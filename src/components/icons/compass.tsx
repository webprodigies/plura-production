import React from 'react';

const Compass = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        className={`  fill-[#C8CDD8] text-xl transition-all`}
      />
      <path
        d="M10.3512 9.1808L15.4401 7.27247C16.244 6.97101 17.029 7.75604 16.7275 8.55992L14.8192 13.6488C14.6164 14.1896 14.1896 14.6164 13.6488 14.8192L8.55992 16.7275C7.75604 17.029 6.97101 16.244 7.27247 15.4401L9.1808 10.3512C9.38361 9.81036 9.81036 9.38361 10.3512 9.1808Z"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
    </svg>
  );
};

export default Compass;
