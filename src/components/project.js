/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import '../App.css';
import '../index.css';
import Cesium from '../images/CesiumProject.PNG';
import Tracker from '../images/TrackerProject.PNG';
import Park from '../images/ParkDesign.png';

const callouts = [
    {
      name: 'HTML, CSS, API, JS',
      description: 'National Park Service Redesign',
      imageSrc: Park,
      href: 'https://github.com/Muhideenthegreat/National-Park-Redesign',
    },
    {
      name: 'Cesium, JS',
      description: 'Cesium 3D Modelling',
      imageSrc: Cesium,
      href: 'https://replit.com/@TopicsCSCLU/Cesium-Starter-Muhideen',
    },
    {
      name: 'React.js, CSS, JS, Tailwind, ReChart, C++',
      description: 'Budget & Expense Tracker',
      imageSrc: Tracker ,
      href: 'https://github.com/Muhideenthegreat/SummitHackathon',
    },
  ]
  
 function Project() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Project;