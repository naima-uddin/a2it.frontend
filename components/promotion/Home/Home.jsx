import React from 'react'
import Banner from './Banner'
import Slider from './Slider'
import Portfolio from './Portfolio'
import PromotionPricing from './PromotionPricing'
import ServicesSection from './ServicesSection'
import StatsSectionSimple from './StatsSectionSimple'

export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
      <Banner/>
      <Slider/>
      <Portfolio/>
      <PromotionPricing/>
      <StatsSectionSimple/>
      <ServicesSection />
      </main>
    </>
  )
}
