import React from 'react';

const Wallet = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 19V9C22 7.34315 20.6569 6 19 6H5V4H2V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19Z"
        className={`  fill-[#C8CDD8] text-xl transition-all`}
      />
      <path
        d="M16 14C16 12.8954 16.8954 12 18 12H22V16H18C16.8954 16 16 15.1046 16 14V14Z"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
      <path
        d="M4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6H19C19.3506 6 19.6872 6.06015 20 6.17071V3C20 2.44772 19.5523 2 19 2H4Z"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
    </svg>
  );
};

export default Wallet;
