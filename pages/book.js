/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Onma from '../components/Onma'
import Footer from '../components/Footer'
      
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

import {useState} from "react";
export default function Example() {
    const[searchInput, setSearchInput]= useState("")
    const[startDate, setStartDate]= useState(new Date())
    const[endDate, setEndDate]= useState(new Date())
    const handleSelect=(ranges)=>{
      setStartDate(ranges.selection.startDate)
      setEndDate(ranges.selection.endDate)
    }
    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }


    return (
      <div>
        <Onma />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Book  Appointments request</h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Edit your appointment booking page. Booking pages you create are public and aren't affected by your calendar sharing settings.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
                type="text"
                required
                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                placeholder="start your search"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Book here
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="font-medium underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
        
        {searchInput &&( <div>
            <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            />
            </div>)}
      </div>
      <Footer />
      </div>
    )
  }
    
  