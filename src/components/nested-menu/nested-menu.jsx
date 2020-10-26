import { Collapse, Divider, List, ListItem, ListItemText } from "@material-ui/core"
import React, { useState, Fragment } from "react"
import { ExpandLess, ExpandMore } from '@material-ui/icons'

export const NestedMenu = ({ rootData }) => {

  const [selectedLevel1, setSelectedlLevel1] = useState()
  const [selectedLevel2, setSelectedlLevel2] = useState()
  const [selectedLevel3, setSelectedlLevel3] = useState()

  const handleSelectLevel1 = (e) => {
    const selected = e.target.textContent
    if (selectedLevel1 === selected) {
      setSelectedlLevel1()
    } else {
      setSelectedlLevel1(selected)
    }
  }

  const handleSelectLevel2 = (e) => {
    const selected = e.target.textContent
    if (selectedLevel2 === selected) {
      setSelectedlLevel2()
    } else {
      setSelectedlLevel2(selected)
    }
  }

  const handleSelectLevel3 = (e) => {
    const selected = e.target.textContent
    if (selectedLevel3 === selected) {
      setSelectedlLevel3()
    } else {
      setSelectedlLevel3(selected)
    }
  }


  return (
    <List disablePadding >
      {
        Object.keys(rootData).map((level1) => {
          return (
            <Fragment key={level1}>
              <ListItem button onClick={handleSelectLevel1} key={level1}>
                <ListItemText primary={level1} name={level1} />
                {(rootData[level1].length > 0) && (selectedLevel1 !== level1) && <ExpandMore />}
                {(rootData[level1].length > 0) && (selectedLevel1 === level1) && <ExpandLess />}
              </ListItem>
              <Divider />
              {/* Show below second layer of options */}
              <Collapse in={selectedLevel1 === level1} timeout="auto" unmountOnExit>
                {
                  rootData[level1].map((level2) => {
                    return <Fragment key={level2.name}>
                      <ListItem button onClick={handleSelectLevel2} key={level2.name}>
                        <ListItemText primary={level2.name} name={level2.name} />
                        {level2.types && (level2.types.length > 0) && (selectedLevel2 !== level2.name) && <ExpandMore />}
                        {level2.types && (level2.types.length > 0) && (selectedLevel2 === level2.name) && <ExpandLess />}
                      </ListItem>
                      {/* Show below third layer of options */}
                      <Collapse in={selectedLevel2 === level2.name} timeout="auto" unmountOnExit>
                        {
                          // show the menu if there are additional types
                          level2.types && level2.types.map((level3) => {
                            return <Fragment key={level3.name}>
                              <ListItem button onClick={handleSelectLevel3}>
                                <ListItemText primary={level3.name} name={level3.name} />
                                {level3.types && (level3.types.length > 0) && (selectedLevel3 !== level3.name) && <ExpandMore />}
                                {level3.types && (level3.types.length > 0) && (selectedLevel3 === level3.name) && <ExpandLess />}
                              </ListItem>
                            </Fragment>
                          })
                        }
                        <Divider />
                      </Collapse>
                    </Fragment>
                  })
                }
              </Collapse>
              <Divider /> 
            </Fragment>
          )
        })
      }
    </List>
  )
}