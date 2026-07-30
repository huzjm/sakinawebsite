export default function RoseMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 10c-4 0-7 2.6-7 6.4 0 3.6 3 5.6 7 5.6s7-2 7-5.6C31 12.6 28 10 24 10Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M17 14.4c-3.4 1-5.6 3.6-5.6 6.6 0 3.4 2.8 5.6 6.6 5.6"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M31 14.4c3.4 1 5.6 3.6 5.6 6.6 0 3.4-2.8 5.6-6.6 5.6"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M24 22v18M24 40c0-3 2-4.5 4.4-5.6M24 36c0-2.6-1.8-4-4-5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}
