import React, { useState } from "react"
import { Button, Box } from '@material-ui/core'
import { OptionsList } from "./options-list"

export const OptionsRoot = () => {

  const [data, setData] = useState({
    Fruits: [
      {
        name: "Citrus",
        id: "citrus",
        subOptions: [
          {
            name: "Orange",
            id: "orange",
            subOptions: [
              {
                name: "Clementine",
                id: "clementine",
                subOptions: [],
              },
              {
                name: "Navel",
                id: "navel",
                subOptions: [],
              },
            ]
          },
          {
            name: "Mandarin",
            id: "mandarin",
            subOptions: []
          },
          {
            name: "Lemon",
            id: "lemon",
            subOptions: []
          },
          {
            name: "Lime",
            id: "lime",
            subOptions: []
          }
        ]
      },
      {
        name: "Berries",
        id: "berries",
        subOptions: [
          {
            name: "Strawberries",
            id: "strawberries",
            subOptions: []
          },
          {
            name: "Blueberries",
            id: 'blueberries',
            subOptions: [],
          },
          {
            name: "Raspberries",
            id: 'raspberries',
            subOptions: [],
          }
        ]
      },
      {
        name: "Melons",
        id: "melons",
        subOptions: [
          {
            name: "Watermelon",
            id: "watermelon",
            subOptions: []
          },
          {
            name: "Honeydew",
            id: 'honeydew',
            subOptions: [
              {
                name: "Honeydew-inception",
                id: "honeydew-inception",
                subOptions: [
                  {
                    name: "Honeydew-level3",
                    id: "honeydew-level3",
                    subOptions: [
                      {
                        name: "Honeydew-4",
                        id:"honey-dew4",
                        subOptions: [
                          {
                            name: "HoneyFIVE",
                            id: "honeyFIVE",
                            subOptions: [],
                          }
                        ],
                      }
                    ],
                  }
                ],
              },
              {
                name: "Honeydew-inception2",
                id: "honeydew_inception2",
                subOptions: [],
              },
            ],
          },
        ]
      },
    ]
  })
  const [selectedRoot, setSelectedRoot] = useState()
  const [selectedOptions, setSelectedOptions] = useState({})

  const handleSelectRoot = (e) => {
    const selected = e.target.textContent
    if (selectedRoot === selected) {
      setSelectedRoot()
    } else {
      setSelectedRoot(selected)
    }
  }

  return (
    <Box width="25%" margin="auto">
      {Object.keys(data).map((category) => {
              return <Button
                key={category}
                variant="contained"
                color="secondary"
                spacing={2}
                onClick={handleSelectRoot}
                style={{ margin: "1em" }}
              >{category}</Button>
      })}
        {selectedRoot && <OptionsList 
          options={data[selectedRoot]}
          onChange={(selectedOptions) => setSelectedOptions({selectedOptions})}
          selectedOptions={selectedOptions}
        />}
    </Box>
  )

}