import Image from 'next/image'
export default function Example() {
    return (
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              MAHEK
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              WELCOME TO MAHEK BEAUTY SALOON
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
            We have been servicing the Greater Toronto Area for the past 19 years. We offer a full range of the latest beauty and grooming services. We are passionate about helping you with your haircare, skincare, and beauty needs! -MONA (LIC. HAIR STYLIST) If you are looking for flawless skin and beauty services, Mahek Beauty Salon is where you need to be. Our excellent professional team knows what your skin and hair need and offer services accordingly. Right from bridal services to beauty services we offer you all under one roof. We offer you a luscious range of face, hair, and skin services specially designed for your skin. Have special skin needs? For all your grooming needs, reach us and we would be glad to help. Book us now!

            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
            We are a full-service hair salon and beauty spa in the Toronto Financial District, <strong>EXPERT BEAUTICIANS</strong> QUALITY SERVICES <strong> BEAUTY PRODUCTS</strong>.
            steps away from St. Andrew subway station at the corner of University Ave.
            Our team consistently pushes themselves with regular training, and are obsessed with keeping up-to-date with the newest looks.{' '}
              <a href="#">30 YEARS OF EXPERIENCE</a> with mahek beuty salon
            </p>
            
            <p>
            We are a full-service hair salon and beauty spa in the Toronto Financial District, steps away from St. Andrew subway station at the corner of University Ave. and Adelaide St. Our team consistently pushes themselves with regular training, and are obsessed with keeping up-to-date with the newest looks, styles and procedures. Many of our team also share their own their skills and knowledge, formally educating up-and-coming industry talent.



          
            </p>
            <h2>Our Services</h2>
            <p>
            Many of our team also share their own their skills and knowledge, formally educating up-and-coming industry talent.

Our number one priority is your happiness and satisfaction. Our medical estheticians can make years vanish from your face in a matter of days. Our stylists are here to give your hair a new lease of life. Why wait – come in and enjoy the P&H experience!
            </p>
            <blockquote>
              <p>
              Great hair doesnt happens by chance it happen by great appointmet.
              </p>
            </blockquote>
            <p>
             
            </p>
            <figure>
              <Image
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                alt=""
                width={1310}
                height={873}
              />
              <figcaption></figcaption>
            </figure>
            <h2>WHAT OUR CLIENT SAYS</h2>
            <p>
            At Mahek salon it was my first experience. <a href="#">HAIR STYLING SERVICES</a>. I must says i was really impressed by an excellent service.
              
            </p>
            <p>
            Awesome service, very much proffesional staff net and clean place especially in time of covid19. Truely Satisfied.

            </p>
          </div>
        </div>
      </div>
    )
  }
  