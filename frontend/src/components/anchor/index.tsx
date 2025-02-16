import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface AnchorProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const Anchor: React.FC<AnchorProps> = ({ children, className, ...props }) => {
  return (
    <Link
      className={`text-foreground hover:text-gray-500 transition-colors duration-150 ease-linear ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Anchor;
