interface Props {
  className?: string;
}

export const ChairIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32.1006" cy="28.3005" r="15.9714" fill="#7D88C3" />
      <path
        d="M53.6472 36.067C50.1254 44.4936 41.8044 50.4149 32.1005 50.4149C22.7854 50.4149 14.7447 44.9586 11 37.0677C11.4216 36.4918 11.8776 35.9341 12.3656 35.3965C16.0145 41.3918 23.4817 45.5006 32.1005 45.5006C41.0992 45.5006 48.8426 41.0215 52.2954 34.5928C52.7727 35.067 53.2239 35.5588 53.6472 36.067Z"
        fill="#5161AF"
      />
      <rect
        x="23.5005"
        y="40.5864"
        width="2.45714"
        height="11.0571"
        rx="1.22857"
        transform="rotate(20.9856 23.5005 40.5864)"
        fill="#273A9C"
      />
      <rect
        width="2.45714"
        height="11.0571"
        rx="1.22857"
        transform="matrix(-0.93367 0.358133 0.358133 0.93367 40.7004 40.5864)"
        fill="#273A9C"
      />
    </svg>
  );
};
