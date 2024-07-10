import React, { SVGProps } from "react";

const Blob = (props: SVGProps<SVGElement>): React.JSX.Element => {
  return (
    // @ts-ignore
    <svg {...props} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#bef264" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad1)"
        d="M38.2,-25.2C50.6,-14.8,62.7,1.1,61.2,16.4C59.7,31.6,44.5,46.2,28.4,50.9C12.3,55.6,-4.7,50.3,-23.9,43.5C-43,36.6,-64.3,28.1,-67.9,14.8C-71.6,1.5,-57.5,-16.6,-43.3,-27.5C-29,-38.3,-14.5,-41.9,-0.8,-41.2C12.8,-40.6,25.7,-35.6,38.2,-25.2Z"
        transform="translate(50 45)"
      />
    </svg>
  );
};

export default Blob;
