import React, { useState, useEffect } from 'react'
import './Listing.css'

const data = [{ name: 'Pawan' }, { name: 'Vikash' }, { name: 'Puja' }]
const Listing = () => {
  const [value, setValue] = useState({})

  const handle = (e) => {
    const { name, checked } = e.target
    let temp
    if (name === 'allSelect') {
      temp = Object.keys(value).map((data) => {
        return { ...value[data], isChecked: checked }
      })
    } else {
      temp = Object.keys(value).map((data) =>
        data === name ? { ...value[data], isChecked: checked } : data,
      )
    }

    setValue(temp)
  }

  // ====================
  // fetching covid data from api
  // ====================

  const fetchdata = async () => {
    const res = await fetch(
      `https://data.covid19india.org/v4/min/data.min.json`,
    )
    const result = await res.json()
    //console.log([result])
    setValue(result)
  }
  console.log(value)
  useEffect(() => {
    fetchdata()
  }, [])

  //   ======================
  return (
    <div>
      <form>
        <input type="checkbox" onChange={handle} name="allSelect" />
        <label>Select All</label>
        {Object.keys(value).map((data, index) => (
          <div key={index} className="listing">
            <input
              type="checkbox"
              checked={value?.isChecked || false}
              name={data}
              onChange={handle}
            />
            <label>{data}</label>
          </div>
        ))}
      </form>
    </div>
  )
}

export default Listing
