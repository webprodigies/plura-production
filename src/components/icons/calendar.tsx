import React from 'react';

const Calendar = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="18"
        rx="3"
        className={`  fill-[#C8CDD8] text-xl transition-all`}
      />
      <path
        d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V10H2V7Z"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C7.55228 2 8 2.44772 8 3V5C8 5.55228 7.55228 6 7 6C6.44772 6 6 5.55228 6 5V3C6 2.44772 6.44772 2 7 2Z"
        className={`  fill-[#C8CDD8] text-xl transition-all`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2C17.5523 2 18 2.44772 18 3V5C18 5.55228 17.5523 6 17 6C16.4477 6 16 5.55228 16 5V3C16 2.44772 16.4477 2 17 2Z"
        className={`  fill-[#C8CDD8] text-xl transition-all`}
      />
    </svg>
  );
};

export default Calendar;
