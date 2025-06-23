import React from 'react'
import Banner from '../components/Banner'
import ServiceSlider from '../components/ServiceSlider'
import AboutSection from '../components/AboutSection'
import WorkProcess from '../components/WorkProcess'
import WhyChuse from '../components/WhyChuse'
import IndustrieServe from '../components/IndustrieServe'
import Teams from '../components/Teams'
import TestimonialSlider from '../components/Testimonial'
import Work from '../components/Works'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <React.Fragment>

      {/* banner section ==> */}

      <Banner />

      {/* sevice section ==>  */}

      <ServiceSlider />

      {/* about us section ===> */}
      <AboutSection />

      {/* work process ==> */}

      <WorkProcess />

      {/* why chuse ==> */}

      <WhyChuse />
      
      {/* industrie serve ==> */}

      <IndustrieServe />

      {/* over teams ==> */}
      <Teams />

      {/* testimonial slider ==> */}
      <TestimonialSlider />

      {/* works ==>  */}

      <Work />

      {/* Pricing ==> */}

      <Pricing />

    </React.Fragment>
  )
}

export default Home