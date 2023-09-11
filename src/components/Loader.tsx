import { Backdrop } from "@mui/material";

const Loader = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.0"
        width="180px"
        height="40px"
        viewBox="0 0 128 16"
        xmlSpace="preserve"
      >
        <linearGradient id="linear-gradient" gradientTransform="rotate(90)">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>
        <path d="M-0.8-.8H128.8V16.8H-0.8V-0.8Z" fill="#e5e0e9" />
        <g>
          <path
            d="M-31.935,16l16-16H-0.1l-16,16H-31.935Zm32,0,16-16H31.9l-16,16H0.065Zm32,0,16-16H63.9l-16,16H32.065Zm32,0,16-16H95.9l-16,16H64.065Zm32,0,16-16H127.9l-16,16H96.065Z"
            fill="#62497a"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            from="32 0"
            to="0 0"
            dur="1800ms"
            repeatCount="indefinite"
          />
        </g>
        <path d="M0.8,0.8V15.2H0V0H128V0.8H0.8Z" fill="#c2b8cb" />
        <path d="M127.2,16H0V15.2H127.2V0H128V16h-0.8Z" fill="#c8bfd1" />
        <path
          d="M0.8,0.8H127.2V9.6H0.8V0.8Z"
          fill="url(#linear-gradient)"
          fill-rule="evenodd"
        />
      </svg>
    </Backdrop>
  );
};

export default Loader;
