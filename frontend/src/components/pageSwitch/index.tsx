import { HTMLProps } from "react";
import Button from "../button";
import { ChrevronDownIcon } from "../icons";

interface PageSwitchProps extends HTMLProps<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const PageSwitch: React.FC<PageSwitchProps> = ({
  currentPage = 1,
  totalPages = 1,
  className,
  onPageChange = () => {},
  ...props
}) => {
  if (totalPages === 0) return <></>;

  const getPageNumbers = (pageNumber: number, totalPages: number): number[] => {
    const start = Math.max(1, pageNumber - 2);
    const end = Math.min(totalPages, pageNumber + 2);
    const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const diff = 5 - range.length;
    if (diff > 0) {
      const leftOffset = Math.max(0, pageNumber - start);
      const rightOffset = Math.max(0, totalPages - end);

      const extendedRange = [
        ...Array(Math.min(leftOffset, diff))
          .fill(0)
          .map((_, i) => start - 1 - i)
          .reverse(),
        ...range,
        ...Array(Math.min(rightOffset, diff))
          .fill(0)
          .map((_, i) => end + i + 1),
      ];

      return extendedRange.filter((page) => page > 0).slice(0, 5);
    }

    return range;
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-center gap-2 ${className}`}
      {...props}
    >
      <Button
        disabled={currentPage === 1}
        type="button"
        variant="secondary"
        className="order-2 sm:order-1 w-full border border-foreground flex items-center sm:pl-9 relative min-w-12 min-h-12 justify-center disabled:bg-gray-300 disabled:opacity-40"
        onClick={() => {
          onPageChange(currentPage - 1);
        }}
      >
        <ChrevronDownIcon className="rotate-90 absolute top-1/2 left-1 -translate-y-1/2" />
        <span>Prev</span>
      </Button>
      <div className="flex order-1 sm:order-2 items-center gap-1">
        {getPageNumbers(currentPage, totalPages)?.map((num) => (
          <Button
            key={num}
            type="button"
            variant={currentPage === num ? "primary" : "secondary"}
            className="border border-foreground flex items-center sm:min-w-12 min-h-12 justify-center"
            onClick={() => {
              onPageChange(num);
            }}
          >
            {num}
          </Button>
        ))}
      </div>
      <Button
        disabled={currentPage === totalPages}
        type="button"
        variant="secondary"
        className="order-3 sm:order-3 w-full border border-foreground flex items-center sm:pr-9 relative min-w-12 min-h-12 justify-center disabled:bg-gray-300 disabled:opacity-40"
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
      >
        <ChrevronDownIcon className="-rotate-90 absolute top-1/2 right-1 -translate-y-1/2" />
        <span>Next</span>
      </Button>
    </div>
  );
};

export default PageSwitch;
