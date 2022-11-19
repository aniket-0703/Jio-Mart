import React from 'react';

const MinusButton = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <g fill='none' fillRule='evenodd'>
        <circle cx='16' cy='16' r='16' fill='#008ECC' />
        <g>
          <path d='M0 0H20V20H0z' transform='translate(6 6)' />
          <path
            fill='#FFF'
            d='M18.01 10.634H1.988c-.344 0-.622-.278-.622-.622s.278-.622.622-.622h16.02c.344 0 .622.278.622.622s-.278.622-.622.622z'
            transform='translate(6 6)'
          />
        </g>
      </g>
    </svg>
  );
};

export default MinusButton;
