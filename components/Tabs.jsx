import React from 'react'
import TabWithSlider from './tabVariations/TabWithSlider'
import TabWithoutSlider from './tabVariations/TabWithoutSlider'


const Tabs = (props) => {

  let bladeData = props.data

  return (
    <>
      {bladeData?.slider ? (<TabWithSlider {...bladeData} />) : (<TabWithoutSlider {...bladeData} />)}
    </>
  )
}

export default Tabs;