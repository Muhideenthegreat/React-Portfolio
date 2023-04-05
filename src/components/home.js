import Resume from './Resume.pdf'
import Deen from '../images/Muhi.png'

function Home() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
               Muhideen Mustapha
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Software Developer<br></br>
                Computer Science + Mathematics

              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="grid h-256 w-180 place-items-center">
                    <img
                      src={Deen}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  </div>
                </div>
  
                <a
                  href={Resume}
                  className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    )
  }

  export default Home;
  