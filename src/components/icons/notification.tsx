import React from 'react';

const Notification = () => {
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
        cy="18"
        r="4"
        className={`  fill-[#70799A] text-xl transition-all`}
      />
      <path
        d="M20.5858 18H3.40408C2.62863 18 2 17.3714 2 16.5959C2 16.2151 2.15471 15.8506 2.42864 15.586L3.45759 14.5922C3.84928 14.2139 4.06977 13.6922 4.06814 13.1476L4.05867 9.9946C4.04543 5.58319 7.61789 2 12.0293 2C16.4314 2 20 5.56859 20 9.97067L20 13.1716C20 13.702 20.2107 14.2107 20.5858 14.5858L21.5858 15.5858C21.851 15.851 22 16.2107 22 16.5858C22 17.3668 21.3668 18 20.5858 18Z"
        className={`  fill-[#C8CDD8] text-xl transition-all`}
      />
    </svg>
  );
};

export default Notification;
