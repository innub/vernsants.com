export const CubeIcon: IconComponent = ({ customTwClass = "", style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${customTwClass} h-6 w-6`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  );
};
