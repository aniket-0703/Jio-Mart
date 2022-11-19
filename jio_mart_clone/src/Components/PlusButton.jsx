import React from 'react';

const PlusButton = ({size}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 32 32'
    >
      <g fill='none' fillRule='evenodd'>
        <circle cx='16' cy='16' r='16' fill='#008ECC' />
        <g>
          <path d='M0 0H20V20H0z' transform='translate(6 6)' />
          <path
            fill='#FFF'
            d='M18.006 10.623h-7.382v7.382c0 .345-.28.625-.625.625s-.625-.28-.625-.625v-7.382H1.992c-.346 0-.625-.28-.625-.625s.28-.625.625-.625h7.382V1.99c0-.346.28-.625.625-.625s.625.28.625.625v7.382h7.382c.345 0 .625.28.625.625s-.28.625-.625.625z'
            transform='translate(6 6)'
          />
        </g>
      </g>
    </svg>
  );
};

export default PlusButton;
