import AboutImage from '../images/about.png'
import Deen from '../images/deenAI.jpeg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

function About() {
    return (
      <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          
          <img className="mx-auto h-12" src={AboutImage} alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “I am a rising Senior at Lincoln University with a major in Computer Science and a minor in Mathematics. I'm originally from Lagos, Nigeria. I love to travel. Upon graduation, I look forward to dive into the field of Artificial Intelligence and Machine Learning as I strongly believe it can revolutionize the way we live and work. I’ve taken quite a number of classes during my time in college and they include Web Programming, Calculus I & II, Data Structures & Algorithm, Computer Security, Database Management.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src={Deen}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Muhideen Mustapha</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO</div>
                
              </div>
              <div className="footer">
                  <a href="https://github.com/Muhideenthegreat"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/muhideen-mustapha/"><FaLinkedin /></a>
                </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }

  export default About;
  