import React from 'react';
import { ITheme } from '.';

export const Share = ({ theme }: ITheme) => {
  return (
    <svg
      width="15"
      height="19"
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 12.2646C7.85693 12.2646 8.15576 11.9658 8.15576 11.6172V3.09229L8.10596 1.84717L8.67041 2.43652L9.92383 3.78125C10.04 3.91406 10.2144 3.98047 10.3721 3.98047C10.7207 3.98047 10.978 3.73145 10.978 3.39111C10.978 3.2168 10.9116 3.08398 10.7871 2.95947L7.98145 0.253418C7.81543 0.0874023 7.66602 0.0292969 7.5 0.0292969C7.33398 0.0292969 7.18457 0.0874023 7.01855 0.253418L4.21289 2.95947C4.08838 3.08398 4.01367 3.2168 4.01367 3.39111C4.01367 3.73145 4.271 3.98047 4.61133 3.98047C4.77734 3.98047 4.95166 3.91406 5.06787 3.78125L6.32959 2.43652L6.89404 1.84717L6.83594 3.09229V11.6172C6.83594 11.9658 7.14307 12.2646 7.5 12.2646ZM2.73535 18.7642H12.2563C13.9912 18.7642 14.8628 17.9009 14.8628 16.1909V7.90674C14.8628 6.19678 13.9912 5.3335 12.2563 5.3335H9.94043V6.66992H12.2314C13.0532 6.66992 13.5264 7.11816 13.5264 7.98145V16.1162C13.5264 16.9795 13.0532 17.4277 12.2314 17.4277H2.75195C1.92188 17.4277 1.46533 16.9795 1.46533 16.1162V7.98145C1.46533 7.11816 1.92188 6.66992 2.75195 6.66992H5.05127V5.3335H2.73535C1.00049 5.3335 0.128906 6.19678 0.128906 7.90674V16.1909C0.128906 17.9009 1.00049 18.7642 2.73535 18.7642Z"
        fill={theme === 'dark' ? '#AEB4BA' : '#737373'}
      />
    </svg>
  );
};