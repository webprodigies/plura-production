import React from 'react';

const Flag = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H10.0263C10.6712 3 11.3119 3.10397 11.9237 3.3079L13.0763 3.6921C13.6881 3.89603 14.3288 4 14.9737 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H14.9737C14.3288 16 13.6881 15.896 13.0763 15.6921L11.9237 15.3079C11.3119 15.104 10.6712 15 10.0263 15H4C3.44772 15 3 14.5523 3 14V4Z"
        className={`  fill-[#C8CDD8] text-xl transition-all`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C4.55228 2 5 2.44772 5 3V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2Z"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
    </svg>
  );
};

export default Flag;
