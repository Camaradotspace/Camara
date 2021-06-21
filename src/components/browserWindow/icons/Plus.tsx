import React from 'react';
import { ITheme } from '.';

export const Plus = ({ theme }: ITheme) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 14.0044C7.90674 14.0044 8.24707 13.6807 8.24707 13.2822V7.76221H13.6094C14.0078 7.76221 14.3481 7.42188 14.3481 7.01514C14.3481 6.6084 14.0078 6.27637 13.6094 6.27637H8.24707V0.748047C8.24707 0.349609 7.90674 0.0258789 7.5 0.0258789C7.09326 0.0258789 6.76123 0.349609 6.76123 0.748047V6.27637H1.39062C0.992188 6.27637 0.651855 6.6084 0.651855 7.01514C0.651855 7.42188 0.992188 7.76221 1.39062 7.76221H6.76123V13.2822C6.76123 13.6807 7.09326 14.0044 7.5 14.0044Z"
        fill={theme === 'dark' ? '#AEB4BA' : '#737373'}
      />
    </svg>
  );
};