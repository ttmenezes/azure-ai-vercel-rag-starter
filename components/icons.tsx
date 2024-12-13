export const VercelIcon = ({ size = 17 }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const SearchIcon = ({ size = 25 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      height={size}
      width={size}
    >
      <defs>
        <linearGradient id="a" x1="9" y1=".36" x2="9" y2="18.31" gradientUnits="userSpaceOnUse">
          <stop offset=".18" stopColor="#5ea0ef" />
          <stop offset="1" stopColor="#0078d4" />
        </linearGradient>
      </defs>
      <path
        d="M18 11.32a4.12 4.12 0 00-3.51-4 5.15 5.15 0 00-5.25-5 5.25 5.25 0 00-5 3.49A4.86 4.86 0 000 10.59a5 5 0 005.07 4.82h8.65a.78.78 0 00.22 0A4.13 4.13 0 0018 11.32z"
        fill="url(#a)"
      />
      <path
        d="M12.33 6.59a3.07 3.07 0 00-5.61.85 3.16 3.16 0 00.33 2.27l-2.34 2.37a.79.79 0 000 1.12.78.78 0 00.56.23.76.76 0 00.56-.23l2.33-2.36a3.14 3.14 0 00.81.33 3.08 3.08 0 003.36-4.58zm-.54 2.1a2.16 2.16 0 01-2.09 1.65 1.79 1.79 0 01-.51-.07 1.87 1.87 0 01-.7-.32 2.13 2.13 0 01-.56-.56 2.17 2.17 0 01-.31-1.73A2.14 2.14 0 019.7 6a2.31 2.31 0 01.52.06 2.18 2.18 0 011.32 1 2.13 2.13 0 01.25 1.63z"
        fill="#f2f2f2"
      />
      <ellipse cx="9.69" cy="8.18" rx="2.15" ry="2.16" fill="#83b9f9" />
    </svg>
  );
};

export const LoadingIcon = () => {
  return (
    <svg
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      style={{ color: "currentcolor" }}
    >
      <g clipPath="url(#clip0_2393_1490)">
        <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5"></path>
        <path
          opacity="0.5"
          d="M8 16V12"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.9"
          d="M3.29773 1.52783L5.64887 4.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.1"
          d="M12.7023 1.52783L10.3511 4.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.4"
          d="M12.7023 14.472L10.3511 11.236"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.6"
          d="M3.29773 14.472L5.64887 11.236"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.2"
          d="M15.6085 5.52783L11.8043 6.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.7"
          d="M0.391602 10.472L4.19583 9.23598"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.3"
          d="M15.6085 10.4722L11.8043 9.2361"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.8"
          d="M0.391602 5.52783L4.19583 6.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2393_1490">
          <rect width="16" height="16" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};