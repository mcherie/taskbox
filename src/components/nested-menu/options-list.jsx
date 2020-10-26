import React, { Fragment, useState } from "react"
import { ListItem, FormControlLabel, List, Checkbox } from "@material-ui/core"


export const OptionsList = ({ options, selectedOptions, onChange }) => {

  // Just the checkbox component
  const EachItem = ({ selected, label, onChange }) => {
    return <FormControlLabel
          control={<Checkbox checked={false} onClick={()=> onChange(!selected)} />}
          label={label}
          labelPlacement="start"
        >{label}</FormControlLabel>
  }
  // const Checkbox = ({ selected, label, onChange}) => {
  //   return (
  //     <div>
  //       <div onClick={()=> onChange(!selected)} />
  //       {label}
  //     </div>
  //   )
  // }

  const handleClick = (selectedOptionId) => {
    // if it's currently selected
    if (selectedOptions[selectedOptionId]) {
      // remove selected key from options list
      delete selectedOptions[selectedOptionId]
    } else {
      // so not currently selected
      selectedOptions[selectedOptionId] = {}
    }
    // call onChange function from parent
    onChange(selectedOptions)
  }

  const handleOptionsListChange = (optionId, subSelections) => {
    // add subselections to current optionId
    selectedOptions[optionId] = subSelections
    // call onChange function given by parent
    onChange(selectedOptions)
  }
  console.log("options is", options)

  return (
    <Fragment>
      {console.log("I'm on this layer")}
      {options.map(option => (
        <List key={option.id}>
          <EachItem
            selected={selectedOptions[option.id]} 
            label={option.name} 
            onChange={() => {handleClick(option.id)}}
           />
          {/* Base Case */}
          {(option.subOptions.length > 0 && selectedOptions[option.id]) &&
            <OptionsList
              options={option.subOptions}
              selectedOptions={selectedOptions[option.id]} 
              onChange={(subSelections) => handleOptionsListChange(option.id, subSelections)}
             />
          }
        </List>
      ))}
    </Fragment>
  )

}