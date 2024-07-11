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
        d="M22.1,-33.3C33.7,-31.6,51.6,-35.9,55.6,-31.3C59.7,-26.7,49.9,-13.4,51.4,0.9C52.8,15.1,65.6,30.2,59.2,30.7C52.9,31.2,27.3,17.1,14.2,18.6C1.2,20,0.6,37,-3.8,43.7C-8.3,50.3,-16.5,46.6,-20.7,40C-24.8,33.4,-24.8,23.9,-36.2,16.7C-47.7,9.6,-70.5,4.8,-77.4,-4C-84.4,-12.9,-75.6,-25.7,-68.3,-39.9C-60.9,-54.1,-55,-69.6,-43.9,-71.5C-32.8,-73.5,-16.4,-61.8,-5.6,-52.1C5.3,-42.5,10.5,-34.9,22.1,-33.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default Blob;
