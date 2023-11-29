import React from 'react'
import Banner from './Banner'
import TrendingNow from './TrendingNow'
import BestSelling from './BestSelling'
import Testimonials from './Testimonials'
import WhyChooseUs from './WhyChooseUs'

export default function Home() {
  return (
    <>
      <Banner/>
      <TrendingNow/>
      <BestSelling/>
      <Testimonials/>
      <WhyChooseUs/>
    </>
  )
}
