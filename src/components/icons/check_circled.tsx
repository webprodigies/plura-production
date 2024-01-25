import React from 'react';

const CheckCircle = () => {
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
        d="M19.3608 5.23093C19.8156 5.7253 20.2213 6.26561 20.5701 6.84411L12.4142 15C11.6332 15.7811 10.3668 15.7811 9.58579 15L6.79289 12.2071C6.40237 11.8166 6.40237 11.1834 6.79289 10.7929C7.18342 10.4024 7.81658 10.4024 8.20711 10.7929L11 13.5858L19.2929 5.2929C19.3148 5.27101 19.3374 5.25036 19.3608 5.23093Z"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
    </svg>
  );
};

export default CheckCircle;
