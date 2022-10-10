import Header from '../components/Header'
import Footer from '../components/Footer'
/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'HAIR STYLING SERVICES',
    description: 'At Mahek Beauty Salon we bring to you the latest generation of men’s hair systems.',
  },
  { name: 'MAKE-UP SERVICES', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'COSMETICS SERVICES',
    description: ' Mahek salons provide comprehensive services related to skin health, facial aesthetics, foot care, nail manicures, and aromatherapy.',
  },
  { name: 'NAIL CARE', description: ' Nail technicians do much more than apply polish. They also check for signs of problems like fungus or sores that need treatment, keep nails ' },
  { name: 'HAIR CARE', description: 'Our latest hair system looks absolutely natural and stylish;' },
  
]

export default function Example() {
  return (
   
    <div>
      <Header />
      
    
    
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Our Services!</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">All-in-one platform</p>
          <p className="mt-4 text-lg text-gray-500">
          Mahek beuty salon wants to say thanku for great client. Check out the services pages every months for monthly deals.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}
