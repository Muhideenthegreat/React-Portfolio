import React from 'react';
import { FaJava, FaReact, FaCss3Alt, FaHtml5, FaPython, FaJs, FaCode, FaMobileAlt, FaMicrochip } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
	  <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Skills</h1>
	  <br></br>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <FaJava className="text-4xl text-red-600 mr-4" />
            <p className="text-lg font-semibold">Java</p>
          </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <FaCode className="text-4xl text-blue-600 mr-4" />
            <p className="text-lg font-semibold">C++</p>
          </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <FaHtml5 className="text-4xl text-red-500 mr-4" />
            <p className="text-lg font-semibold">HTML</p>
          </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <FaCss3Alt className="text-4xl text-blue-500 mr-4" />
            <p className="text-lg font-semibold">CSS</p>
          </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <FaPython className="text-4xl text-yellow-600 mr-4" />
            <p className="text-lg font-semibold">Python</p>
          </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <FaJs className="text-4xl text-yellow-500 mr-4" />
            <p className="text-lg font-semibold">JavaScript</p>
          </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <FaReact className="text-4xl text-blue-400 mr-4" />
            <p className="text-lg font-semibold">React.JS</p>
          </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <FaMobileAlt className="text-4xl text-green-500 mr-4" />
            <p className="text-lg font-semibold">Flutter</p>
          </div>
		  <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <FaMicrochip className="text-4xl text-green-500 mr-4" />
            <p className="text-lg font-semibold">Assembly Language</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
