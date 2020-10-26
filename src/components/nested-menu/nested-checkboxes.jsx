import React, { useState } from "react"
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { FormControlLabel, FormControl, FormGroup, ListItem, ListItemText, Collapse, List, Divider } from "@material-ui/core"
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export const NestedCheckboxes = () => {

  const [fruits, setFruits] = useState({
    citrus: { orange: false, mandarin: false, lemon: false, lime: false },
    berries: { strawberries: false, blueberries: false, raspberries: false },
    melons: { watermelon: false, honeydew: false, },
  })
  const [fruitsSelected, setFruitsSelected] = useState(false)
  const [ selectedFruitGroup, setSelectedFruitGroup ] = useState()


  const handleSelectFruits = () => {
    setFruitsSelected(!fruitsSelected)
  }

  const handleFruitsChange = (e) => {
    setFruits({
      ...fruits,
      // fruits[selectedFruitGroup][e.target.name]: e.target.checked
    })
  }

  const selectFruitGroup = (e) => {
    console.log("selected fruit group is ", e.target.textContent)
    // find this item, and set it to true
    const fruitGroup = e.target.textContent
    setSelectedFruitGroup(fruitGroup)
  }


  return (
    <div>
      {/* Main Fruit button */}
      <Button
        variant="contained"
        color="primary"
        spacing={2}
        onClick={handleSelectFruits}
        style={{ margin: "1em"}}
      >Fruits</Button>

      {/* Grouped Fruits list */}
      {fruitsSelected &&
        <FormControl>
          <FormGroup>
            {Object.keys(fruits).map((ea) => (
              <div>
                <ListItem button onClick={selectFruitGroup} >
                  <ListItemText primary={ea} name={ea} />
                  {selectedFruitGroup === ea ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={selectedFruitGroup === ea} timeout="auto" unmountOnExit>
                {/* individual item */}
                  {Object.keys(fruits[ea]).map((eachF) => (
                    <ListItem component="div" disablePadding onChange={handleFruitsChange}>
                    <FormControlLabel
                      control={<Checkbox checked={fruits.ea} onChange={handleFruitsChange} name={eachF} />}
                      label={eachF}
                      key={eachF}
                      labelPlacement="start"
                    >{eachF}</FormControlLabel>
                  </ListItem>
                  ))
                  }
                  <Divider />
                </Collapse>
              </div>
            ))}
          </FormGroup>
        </FormControl>

      }
      <Button variant="contained" color="primary">Vegetables</Button>


    </div>

  )
}