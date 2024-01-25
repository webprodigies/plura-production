import React from 'react';

const Info = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        className={`  fill-[#C8CDD8] text-xl transition-all`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11C12.5523 11 13 11.4477 13 12V17.0009C13 17.5532 12.5523 18.0009 12 18.0009C11.4477 18.0009 11 17.5532 11 17.0009V12C11 11.4477 11.4477 11 12 11Z"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
      <circle
        cx="12"
        cy="8"
        r="1"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
    </svg>
  );
};

export default Info;
