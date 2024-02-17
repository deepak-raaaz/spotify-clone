import React from 'react'

function LikeIcon(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={3}
        width={21}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3h20.473v19.5H2V3z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.824 12.123c1.402 4.362 6.94 7.889 8.413 8.762 1.477-.882 7.056-4.448 8.413-8.758.89-2.786.064-6.315-3.222-7.374-1.592-.511-3.45-.2-4.731.792a.75.75 0 01-.91.006 5.234 5.234 0 00-4.75-.798c-3.28 1.058-4.104 4.587-3.213 7.37zm8.414 10.378a.748.748 0 01-.36-.091c-.312-.171-7.685-4.235-9.482-9.829l-.001-.001c-1.128-3.522.128-7.948 4.183-9.255a6.729 6.729 0 015.657.714c1.626-1.028 3.786-1.312 5.652-.714 4.059 1.309 5.319 5.734 4.192 9.255-1.74 5.53-9.166 9.655-9.481 9.828a.743.743 0 01-.36.093z"
          fill={props.fill}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.154 10.625a.75.75 0 01-.747-.69 2.024 2.024 0 00-1.4-1.768.75.75 0 01.46-1.428 3.525 3.525 0 012.436 3.075.75.75 0 01-.75.81z"
        fill={props.fill}
      />
    </svg>


  )
};

export default LikeIcon