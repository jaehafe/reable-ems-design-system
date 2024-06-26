import React from 'react';
import { SVGCustomProps } from './types';

export default function InfoSVG({ $filled, ...rest }: SVGCustomProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={'pointer'}
      {...rest}
    >
      {$filled ? (
        <path
          d="M12.1799 1C6.10993 1 1.17993 5.93 1.17993 12C1.17993 18.07 6.10993 23 12.1799 23C18.2499 23 23.1799 18.07 23.1799 12C23.1799 5.93 18.2499 1 12.1799 1ZM11.1799 16.5V10.5C11.1799 9.95 11.6299 9.5 12.1799 9.5C12.7299 9.5 13.1799 9.95 13.1799 10.5V16.5C13.1799 17.05 12.7299 17.5 12.1799 17.5C11.6299 17.5 11.1799 17.05 11.1799 16.5ZM12.1799 8.99C11.5799 8.99 11.0999 8.51 11.0999 7.91C11.0999 7.31 11.5799 6.83 12.1799 6.83C12.7799 6.83 13.2599 7.31 13.2599 7.91C13.2599 8.51 12.7699 8.99 12.1799 8.99Z"
          fill={rest.color || '#222222'}
        />
      ) : (
        <>
          <path
            d="M12 1C5.93 1 1 5.93 1 12C1 18.07 5.93 23 12 23C18.07 23 23 18.07 23 12C23 5.93 18.07 1 12 1ZM12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21Z"
            fill={rest.color || '#222222'}
          />
          <path
            d="M12 9.5C11.45 9.5 11 9.95 11 10.5V16.5C11 17.05 11.45 17.5 12 17.5C12.55 17.5 13 17.05 13 16.5V10.5C13 9.95 12.55 9.5 12 9.5Z"
            fill={rest.color || '#222222'}
          />
          <path
            d="M12 6.83C11.4 6.83 10.92 7.31 10.92 7.91C10.92 8.51 11.4 8.99 12 8.99C12.6 8.99 13.08 8.51 13.08 7.91C13.08 7.31 12.6 6.83 12 6.83Z"
            fill={rest.color || '#222222'}
          />
        </>
      )}
    </svg>
  );
}
