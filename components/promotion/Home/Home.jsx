import React from 'react'
import Banner from './Banner'
import Slider from './Slider'
import Portfolio from './Portfolio'

export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
      <Banner/>
      <Slider/>
      <Portfolio/>
      </main>
    </>
  )
}
