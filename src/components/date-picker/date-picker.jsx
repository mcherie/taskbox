import React, { useState } from "react"
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns';


export const DatePicker = () => {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  return (
<DateRangePicker
    onChange={item => setState([item.selection])}
    showSelectionPreview={true}
    moveRangeOnFirstSelection={false}
    months={2}
    ranges={state}
    direction="horizontal"
  />
  )
  

}

