import { SVGProps } from "react";

export const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
);

export const LocationIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7366 10.8064C14.7366 9.43255 13.6234 8.31934 12.2505 8.31934C10.8767 8.31934 9.76349 9.43255 9.76349 10.8064C9.76349 12.1792 10.8767 13.2924 12.2505 13.2924C13.6234 13.2924 14.7366 12.1792 14.7366 10.8064Z"
      stroke="#31393D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2496 21.25C12.2496 21.25 4.97373 16.5108 4.7904 10.5973C4.66167 6.44514 8.12944 2.75012 12.2496 2.75012C16.3697 2.75012 19.8366 6.44508 19.7097 10.5973C19.5253 16.632 12.2496 21.25 12.2496 21.25Z"
      stroke="#31393D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ChrevronDownIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 8.5L12 15.5L5 8.5"
      stroke="#31393D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EuroIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.25425 12.16C6.45425 12.16 5.72358 12.016 5.06225 11.728C4.41158 11.4293 3.84625 11.0187 3.36625 10.496C2.88625 9.97333 2.51825 9.36533 2.26225 8.672C2.00625 7.97867 1.87825 7.23733 1.87825 6.448C1.87825 5.648 2.00625 4.90133 2.26225 4.208C2.51825 3.51467 2.88092 2.912 3.35025 2.4C3.83025 1.87733 4.40092 1.472 5.06225 1.184C5.72358 0.885332 6.45425 0.735999 7.25425 0.735999C8.08625 0.735999 8.80625 0.885332 9.41425 1.184C10.0329 1.48267 10.5983 1.888 11.1103 2.4L10.0703 3.44C9.71825 3.024 9.30758 2.704 8.83825 2.48C8.36892 2.256 7.81958 2.144 7.19025 2.144C6.42225 2.144 5.75025 2.33067 5.17425 2.704C4.60892 3.06667 4.17158 3.57333 3.86225 4.224C3.55292 4.864 3.39825 5.60533 3.39825 6.448C3.39825 7.28 3.55292 8.02133 3.86225 8.672C4.18225 9.32267 4.63025 9.83467 5.20625 10.208C5.79292 10.5707 6.48092 10.752 7.27025 10.752C7.89958 10.752 8.44892 10.64 8.91825 10.416C9.38758 10.1813 9.79825 9.856 10.1503 9.44L11.1903 10.464C10.6783 10.9973 10.1023 11.4133 9.46225 11.712C8.82225 12.0107 8.08625 12.16 7.25425 12.16ZM0.80625 5.632V4.448H8.42225L8.03825 5.632H0.80625ZM0.80625 8.432V7.232H7.76625L7.38225 8.432H0.80625Z"
      fill="#748790"
    />
  </svg>
);

export const MapIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8664 20.802L9.13362 18.7169C8.78238 18.5894 8.39514 18.6031 8.05362 18.7548L4.46724 20.3486C3.77741 20.656 3 20.1511 3 19.3951V6.73084C3 5.97289 3.44659 5.285 4.13935 4.97754L8.05362 3.23786C8.39514 3.08608 8.78238 3.07246 9.13362 3.19992L14.8664 5.285C15.2176 5.41246 15.6049 5.39884 15.9464 5.24705L19.5328 3.65332C20.2226 3.34684 21 3.85181 21 4.60684V17.272C21 18.03 20.5534 18.7169 19.8606 19.0243L15.9464 20.764C15.6049 20.9158 15.2176 20.9294 14.8664 20.802Z"
      stroke="#31393D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.58496 3.125V18.5204"
      stroke="#31393D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4131 20.8521V5.38281"
      stroke="#31393D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeartIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.0017 5.92507C11.3979 5.24903 10.6225 4.72728 9.76648 4.42682C6.4652 3.25658 3.38047 5.59684 3.03157 8.87727C2.5431 13.8208 7.83511 16.8611 11.1366 19.572C11.5082 19.8819 12.0512 19.967 12.4989 19.7815C12.7138 19.7 12.8866 19.5452 13.0616 19.4014C16.3914 16.6725 21.6522 13.5358 20.9334 8.55669C20.401 5.07868 16.7703 3.12597 13.6389 4.67763C13.0203 4.98409 12.4606 5.40932 12.0017 5.92507Z"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EyeIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.998 20.0712C15.703 20.0712 19.092 17.4072 21 12.9682C19.092 8.52923 15.703 5.86523 11.998 5.86523C8.297 5.86523 4.908 8.52923 3 12.9682C4.908 17.4092 8.297 20.0712 12.002 20.0712H11.998Z"
      stroke="#748790"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0788 12.9735C15.0788 14.6715 13.7008 16.0495 12.0028 16.0495C10.3038 16.0495 8.92578 14.6715 8.92578 12.9735C8.92578 11.2745 10.3038 9.89648 12.0028 9.89648C13.7008 9.89648 15.0788 11.2745 15.0788 12.9735Z"
      stroke="#748790"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const YoutubeIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.6112 10.2437C39.3624 10.7535 40.7168 12.1897 41.1586 14.0072C42.2834 17.3659 42.2776 30.7076 41.1586 33.9164C40.7168 35.734 39.3624 37.17 37.6112 37.68C34.4644 38.8572 13.5336 38.8202 10.3889 37.68C8.67254 37.1974 7.32788 35.8274 6.84138 34.0662C5.71856 30.7582 5.72052 17.3679 6.84138 14.0831C7.28312 12.2636 8.63558 10.8294 10.3889 10.3196C13.5336 9.17728 34.4644 9.17728 37.6112 10.2437Z"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.0382 24.8584L21.694 29.0346C21.0674 29.3906 20.289 28.9392 20.289 28.2172V19.8651C20.289 19.1432 21.0674 18.6898 21.694 19.0459L29.0382 23.222C29.6726 23.5838 29.6726 24.4984 29.0382 24.8584Z"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
