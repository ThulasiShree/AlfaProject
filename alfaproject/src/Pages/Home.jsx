import React from 'react'
import SliderImage from '../Components/SliderImage'
import BrandedLuxury from '../Components/BrandedLuxury'
import Awards from '../Components/Awards'
import Discover from '../Components/Discover'
import Contactus from '../Components/Contactus'

const Home = () => {
  return (
    <div>
        <SliderImage/>
        <BrandedLuxury/>
        <Awards/>
        <Discover/>
        <Contactus/>
    </div>
  )
}

export default Home