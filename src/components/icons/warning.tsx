import React from 'react';

const Warning = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.39358 4.57366C10.5445 2.55417 13.4556 2.55417 14.6065 4.57365L21.4115 16.5146C22.5512 18.5146 21.107 21 18.805 21H5.19508C2.89316 21 1.44888 18.5146 2.58862 16.5146L9.39358 4.57366Z"
        className={`  fill-[#C8CDD8] text-xl transition-all`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14C12.5523 14 13 13.5523 13 13V8.00001C13 7.44772 12.5523 7.00001 12 7.00001C11.4477 7.00001 11 7.44772 11 8.00001V13C11 13.5523 11.4477 14 12 14Z"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
      <circle
        cx="12"
        cy="17"
        r="1"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
    </svg>
  );
};

export default Warning;
