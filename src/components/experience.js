import React from "react";

function Blog () {
  return (
    
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

      <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Experience</h1>
      <br></br>
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Internship
              </a>
              <p className="text-gray-600">Capital One</p>
              
              
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  Technology EIP
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              June 2022 - August 2022
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Part Time
              </a>
              <p className="text-gray-600">Lincoln University</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  Mathematics Tutor
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              September 2021 - December 2022
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Part-Time
              </a>
              <p className="text-gray-600">Winner's Cyber Cafe</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  Cyber Assistant
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              July 2018 - July 2020.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Blog;
