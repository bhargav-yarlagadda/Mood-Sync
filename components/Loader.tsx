import React from 'react';

const Loader = () => {
  return (
    <div className="flex fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm justify-center items-center">
      {/* Loader container */}
      <div className="flex items-center justify-center space-x-8">
        {/* Individual loader items with inline animation delays */}
        <div className="w-8 h-8 rounded-full bg-white animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-8 h-8 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-8 h-8 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default Loader;
