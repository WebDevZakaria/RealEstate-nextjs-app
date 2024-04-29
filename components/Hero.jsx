import React from 'react'
import PropertySearch from './PropertySearch'

const Hero = () => {
  return (
    <section className="bg-purple-500 py-20 mb-4">
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div className="text-center">
        <h1
          className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
        >
ابحث عن الإيجار المثالي للمنازل
        </h1>
        <p className="my-4 text-xl text-white">
        اكتشف العقار المثالي الذي يناسب احتياجاتك.
        </p>
      </div>

      <PropertySearch />
     
    </div>
  </section>

  )
}

export default Hero
