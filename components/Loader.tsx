import React from 'react';

const Loader = () => {
  return (
    <div className="flex absolute inset-0 w-screen h-screen bg-transparent backdrop-blur-sm bg-opacity-40 justify-center items-center space-x-2">
      <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-100"></div>
      <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-200"></div>
      <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-300"></div>
    </div>
  );
};

export default Loader;
