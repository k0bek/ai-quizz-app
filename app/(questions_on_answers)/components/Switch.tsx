import React, { useState } from 'react';

const Switch = ({ enabled, setEnabled }) => {
    return (
      <div
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${
          enabled ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
            enabled ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </div>
    );
  };
  

export default Switch;
