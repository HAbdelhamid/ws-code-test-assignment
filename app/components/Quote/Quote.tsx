import Image from "next/image";
import { Icon } from "../Icon/Icon";

/**
 * Quote dump component
 *
 * @returns {JSX.Element} quote.
 */
export const Quote = ({
  content,
  className = "",
  imageURL,
  onFetchRandom,
}: {
  content: string;
  className?: string;
  imageURL?: string;
  onFetchRandom?: () => void;
}) => {
  return (
    <article
      className={`flex flex-col-reverse justify-between gap-10 items-center w-full xl2:flex-row ${className}`}
    >
      {imageURL && (
        <Image
          className="rounded-lg shadow-lg object-cover"
          src={imageURL}
          alt="Quote"
          width={500}
          height={500}
        />
      )}
      <div className="flex flex-col gap-5 items-center  p-4 text-gray-800 bg-white rounded-lg">
        <blockquote className="flex flex-row gap-5">
          <Icon name="quote-up" />
          <p className="text-1xl italic font-medium text-gray-600 text-justify">
            {content}
          </p>
          <Icon name="quote-down" />
        </blockquote>
        {onFetchRandom && (
          <button
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded w-40"
            onClick={() => onFetchRandom()}
          >
            Generate
          </button>
        )}
      </div>
    </article>
  );
};
