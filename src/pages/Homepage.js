import React from 'react'
import Header from '../components/Header';

function Homepage() {
  return (
    <div>
        <Header/>
        <h2 className="flex justify-center text-center text-gray-800 font-bold text-4xl pt-24 md:text-6xl">Encouraging industry growth & closing skills gap</h2>
        <h5 className="text-center font-normal text-2xl py-4 px-2">Contributing to the future of upscaling world class professionals and industry players.</h5>
        <div className="flex flex-col justify-center items-center py-12 md:flex-row">
            <button type="button" className="py-4 px-5 mb-4 text-sm font-bold text-white focus:outline-none bg-green-700 rounded-lg hover:bg-green-600 w-11/12 md:w-36 mx-6">Find a Mentor</button>
            <button type="button" className="py-4 px-5 text-sm font-bold text-green-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 w-11/12 md:w-36">Become a Mentor</button>
        </div>
    </div>
  )
}

export default Homepage