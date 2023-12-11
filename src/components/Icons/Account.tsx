import React from 'react';
import { SVGCustomProps } from './types';

export default function AccountSVG({ $filled, ...rest }: SVGCustomProps) {
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
          d="M23.1799 11.6899C23.1799 5.61994 18.2499 0.689941 12.1799 0.689941C6.10993 0.689941 1.17993 5.61994 1.17993 11.6899C1.17993 13.4799 1.61995 15.2299 2.44995 16.8099L2.40991 16.84L2.96991 17.7C2.96991 17.7 2.96991 17.6999 2.96991 17.7099L3.49994 18.5199L3.54993 18.4899C5.62993 21.1399 8.77993 22.7 12.1799 22.7C15.5799 22.7 18.7299 21.1299 20.8099 18.4899L20.8599 18.5199L21.39 17.7099L21.95 16.8499L21.9099 16.8199C22.7399 15.2499 23.1799 13.4999 23.1799 11.7099V11.6899ZM12.1799 20.6899C9.49993 20.6899 6.99993 19.5099 5.29993 17.4899C5.42993 17.4299 5.55995 17.3699 5.69995 17.3199C5.77995 17.2899 5.85994 17.2499 5.93994 17.2199C6.20994 17.1199 6.48991 17.0199 6.77991 16.9299C6.81991 16.9199 6.86991 16.9099 6.90991 16.8899C7.15991 16.8199 7.41994 16.7499 7.68994 16.6799C7.79994 16.6499 7.9099 16.6299 8.0199 16.6099C8.2299 16.5699 8.43991 16.5199 8.65991 16.4799C8.78991 16.4599 8.90992 16.4399 9.03992 16.4199C9.24992 16.3899 9.45993 16.3599 9.67993 16.3299C9.80993 16.3099 9.93995 16.2999 10.0699 16.2899C10.2999 16.2699 10.5399 16.25 10.7799 16.2299C10.8999 16.2299 11.0099 16.2099 11.1299 16.2099C11.4799 16.1899 11.84 16.1799 12.2 16.1799C12.56 16.1799 12.9199 16.1899 13.2699 16.2099C13.3799 16.2099 13.4899 16.2299 13.6099 16.2299C13.8499 16.25 14.0899 16.2599 14.3199 16.2899C14.4499 16.2999 14.58 16.3199 14.7 16.3299C14.92 16.3599 15.1299 16.3899 15.3499 16.4199C15.4799 16.4399 15.5999 16.4599 15.7299 16.4799C15.9499 16.5199 16.1599 16.5599 16.3699 16.6099C16.4799 16.6299 16.59 16.6599 16.7 16.6799C16.96 16.7399 17.2199 16.8099 17.4599 16.8799C17.5099 16.8899 17.5599 16.8999 17.5999 16.9199C17.8899 17.0099 18.1599 17.1 18.4299 17.2C18.5199 17.23 18.5999 17.2699 18.6899 17.3099C18.8199 17.3599 18.9499 17.42 19.0699 17.4799C17.3699 19.5 14.8699 20.6899 12.1899 20.6899H12.1799ZM12.1799 5.71994C14.1099 5.71994 15.6799 7.28994 15.6799 9.21994C15.6799 11.1499 14.1099 12.7199 12.1799 12.7199C10.2499 12.7199 8.67993 11.1499 8.67993 9.21994C8.67993 7.28994 10.2499 5.71994 12.1799 5.71994Z"
          fill={rest.color || '#222222'}
        />
      ) : (
        <>
          <path
            d="M12.01 13.7199C14.49 13.7199 16.51 11.6999 16.51 9.21994C16.51 6.73994 14.49 4.71994 12.01 4.71994C9.52999 4.71994 7.50999 6.73994 7.50999 9.21994C7.50999 11.6999 9.52999 13.7199 12.01 13.7199ZM12.01 6.71994C13.39 6.71994 14.51 7.83994 14.51 9.21994C14.51 10.5999 13.39 11.7199 12.01 11.7199C10.63 11.7199 9.50999 10.5999 9.50999 9.21994C9.50999 7.83994 10.63 6.71994 12.01 6.71994Z"
            fill={rest.color || '#222222'}
          />
          <path
            d="M23 11.6899C23 5.61994 18.07 0.689941 12 0.689941C5.93 0.689941 1 5.61994 1 11.6899C1 13.8199 1.61999 15.8999 2.78999 17.6899C4.82999 20.8199 8.28 22.6899 12 22.6899C15.72 22.6899 19.17 20.8199 21.21 17.6899C22.38 15.8999 23 13.8299 23 11.6899ZM12 2.68994C16.96 2.68994 21 6.72994 21 11.6899C21 13.1299 20.66 14.5299 20 15.7999C19.72 15.6599 19.43 15.5399 19.13 15.4199C19.05 15.3899 18.97 15.3599 18.89 15.3299C18.65 15.2399 18.41 15.1599 18.16 15.0799C18.04 15.0399 17.92 15.0099 17.79 14.9699C17.57 14.9099 17.35 14.8399 17.12 14.7899C16.98 14.7599 16.84 14.7199 16.7 14.6899C16.48 14.6399 16.25 14.5899 16.02 14.5499C15.87 14.5199 15.72 14.4999 15.57 14.4699C15.34 14.4299 15.1 14.3999 14.86 14.3699C14.71 14.3499 14.56 14.3299 14.41 14.3199C14.15 14.2899 13.88 14.2699 13.61 14.2499C13.48 14.2499 13.35 14.2299 13.22 14.2199C12.82 14.1999 12.41 14.1899 12 14.1899C11.59 14.1899 11.18 14.1999 10.77 14.2199C10.64 14.2199 10.51 14.2399 10.38 14.2499C10.11 14.2699 9.84 14.2899 9.58 14.3199C9.43 14.3399 9.28 14.3599 9.13 14.3699C8.89001 14.3999 8.65 14.4299 8.42 14.4699C8.27 14.4899 8.12 14.5199 7.97 14.5499C7.74 14.5899 7.52 14.6399 7.3 14.6899C7.16 14.7199 7.00999 14.7499 6.87 14.7899C6.65 14.8399 6.43 14.8999 6.22 14.9699C6.09 15.0099 5.96 15.0399 5.83 15.0799C5.6 15.1499 5.36999 15.2399 5.14999 15.3199C5.04999 15.3599 4.96 15.3899 4.86 15.4199C4.56 15.5399 4.27 15.6599 4 15.7999C3.35 14.5299 3 13.1299 3 11.6899C3 6.72994 7.04 2.68994 12 2.68994ZM12 20.6899C9.32 20.6899 6.81999 19.5099 5.12 17.4899C5.25 17.4299 5.39 17.3699 5.53 17.3099C5.61 17.2799 5.68 17.2499 5.75 17.2199C6.02 17.1199 6.3 17.0199 6.59 16.9299C6.63 16.9199 6.67001 16.9099 6.71001 16.8999C6.97001 16.8299 7.23 16.7599 7.5 16.6899C7.61 16.6599 7.72001 16.6399 7.82001 16.6199C8.03001 16.5799 8.24001 16.5299 8.46001 16.4899C8.59001 16.4699 8.71 16.4499 8.84 16.4299C9.05 16.3999 9.26 16.37 9.48 16.34C9.61 16.32 9.74 16.3099 9.87 16.2999C10.1 16.2799 10.34 16.2599 10.58 16.2399C10.7 16.2399 10.81 16.2199 10.93 16.2199C11.28 16.1999 11.64 16.1899 12 16.1899C12.36 16.1899 12.72 16.1999 13.07 16.2199C13.18 16.2199 13.3 16.2399 13.41 16.2399C13.65 16.2599 13.89 16.2699 14.12 16.2999C14.25 16.3099 14.38 16.33 14.51 16.34C14.73 16.37 14.94 16.3999 15.15 16.4299C15.28 16.4499 15.4 16.4699 15.53 16.4899C15.74 16.5299 15.95 16.5699 16.16 16.6099C16.27 16.6299 16.38 16.6599 16.49 16.6799C16.75 16.7399 17 16.8099 17.24 16.8799C17.29 16.8899 17.35 16.9099 17.4 16.9199C17.69 17.0099 17.96 17.1 18.23 17.2C18.32 17.23 18.41 17.2699 18.5 17.3099C18.63 17.3599 18.75 17.4199 18.88 17.4699C17.18 19.4899 14.68 20.6799 12 20.6799V20.6899Z"
            fill={rest.color || '#222222'}
          />
        </>
      )}
    </svg>
  );
}
