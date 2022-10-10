/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          'warm-gray': colors.warmGray,
          sky: colors.sky,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'

const navigation = [
  { name: 'Contact', href: 'contact' },
  { name: 'Services', href: 'services' },
  { name: 'Support', href: 'support' },
  { name: 'Book', href: 'book' },
]
const contactDetails = [
  { name: 'Collaborate', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Press', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Join our team', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Say hello', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
]
const locations = [
  { city: 'Ontario', address: ['4556 Brendan Ferry', 'canada, CA 90210'] },
  { city: 'Quebec City', address: ['886 Walter Streets', 'canada, NY 12345'] },
  { city: 'Toronto', address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'] },
  { city: 'Ottawa', address: ['726 Mavis Island', 'canada, IL 60601'] },
]
const faqs = [
  {
    id: 1,
    question: 'Do you require deposits for appointments?',
    answer:
      ' you’re a high-end salon that has a lot of cancelation issues, you might not want to charge deposits because it can discourage people from booking a service.',
      
  },
  {
    id: 2,
    question: "Do i need to wear or do anything special for my visit",
    
  
    answer:
      " This is a good question for several reasons. People want to know, most often for spas, what they should wear to ensure they are prepared and comfortable for the service.",
  },
  {
    id: 3,
    question: 'Do you offer gift certificates or any kinds of things?',
    
    answer: 'People like deals and specials. They also like getting gift certificates for the people that they love. Salon and spa services are great gifts but they’re not always “affordable” for everyone.',
  },
  {
    id: 4,
    question: 'Can I bring my children? ',
    answer:
      " This is a common question of a lot of salons and spas. Some are more flexible or casual and may be fine with children coming to appointments.",
  },
]
/*footer navigation */

    

export default function Example() {
  return (
    <div>
    

    
    <div className="bg-white">
      <header className="relative pb-24 bg-sky-800 sm:pb-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src=
            "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <Popover as="div" className="relative z-10">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&shade=300"
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="bg-sky-800 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-cyan-100 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:flex lg:ml-10">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-cyan-100">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="signin"
                className="py-2 px-6 bg-white bg-opacity-10 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-20"
              >
                Login
              </a>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
              <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&shade=400"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="#"
                      className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-green-400 text-white font-medium hover:bg-green-500"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <div className="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
          <p className="mt-6 text-xl text-cyan-100 max-w-3xl">
          Visit our contact Us page to find answers and learn about our products.
        
          </p>
        </div>
      </header>

      <main>
        {/* Side-by-side grid */}
        <div className="bg-white">
          <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">
                  Get in touch
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                  {contactDetails.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-lg font-medium text-warm-gray-900">{item.name}</h3>
                      <dl className="mt-2 text-base text-warm-gray-500">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>{item.email}</dd>
                        </div>
                        <div className="mt-1">
                          <dt className="sr-only">Phone number</dt>
                          <dd>{item.telephone}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </section>
              <section className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="location-heading">
                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">
                  Locations
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                  {locations.map((location) => (
                    <div key={location.city}>
                      <h3 className="text-lg font-medium text-warm-gray-900">{location.city}</h3>
                      <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                        {location.address.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-warm-gray-50">
          <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-warm-gray-900">Frequently asked questions</h2>
                <p className="mt-4 text-lg text-warm-gray-500">
                  Can’t find the answer you’re looking for? Reach out to our{' '}
                  <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600">
                    customer support
                  </a>{' '}
                  team.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.id}>
                      <dt className="text-lg font-medium text-warm-gray-900">{faq.question}</dt>
                      <dd className="mt-2 text-base text-warm-gray-500">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
          <div className="relative max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-10 px-6 bg-gradient-to-l from-sky-800 to-cyan-700 rounded-3xl sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Contact pages for our customer</h2>
                <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                Visit our contactus page to find answers.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </div>
      
     

      
    </div>
    
    
  )
}
