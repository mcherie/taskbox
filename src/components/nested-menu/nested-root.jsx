import React, { useState } from "react"
import { Button, Box } from '@material-ui/core'
import { NestedMenu } from "./nested-menu"
import { OptionsList } from "./options-list"

export const NestedRoot = () => {

  const [data, setData] = useState({
      Fruits: {
        Citrus: [
          {
            name: "orange",
            isChecked: false,
            types : [
              {
                name:"clementine",
                isChecked: false,
              },
              {
                name: "navel",
                isChecked: false,
              },
            ]
          },
          {
            name: "mandarin",
            isChecked: false,
          },
          {
            name: "lemon",
            isChecked: false,
          },
          {
            name: "lime",
            isChecked: false,
          },
        ],
        Berries: [
          // {
          //   name: "strawberries",
          //   isChecked: false,
          // },
          // {
          //   name: "blueberries",
          //   isChecked: false
          // },
          // {
          //   name: "raspberries",
          //   isChecked: false
          // }
        ],
        Melons: [
          {
            name: "watermelon",
            isChecked: false
          },
          {
            name: "honeydew",
            isChecked: false
          },
        ],
      },
      Vegetables: {
        Cruciferous: [
          {
            name: "broccoli",
            isChecked: false,
          },
          {
            name: "cauliflower",
            isChecked: false,
          },
          {
            name: "cabbage",
            isChecked: false,
          },
        ],
        Root: [
          {
            name: "potato",
            isChecked: false,
          },
          {
            name: "carrots",
            isChecked: false
          },
          {
            name: "raspberradishries",
            isChecked: false
          }
        ],
        Leafy_Green: [
          {
            name: "spinach",
            isChecked: false
          },
          {
            name: "lettuce",
            isChecked: false
          },
        ],
      }
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
      {selectedRoot && <NestedMenu rootData={data[selectedRoot]} />}
        {/* { selectedRoot && <OptionsList 
          options={data[selectedRoot]}
          onChange={(selectedOptions) => setSelectedOptions(selectedOptions)}
          selectedOptions={selectedOptions}
        />} */}
    </Box>
  )

}