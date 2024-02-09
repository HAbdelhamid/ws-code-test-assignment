import Image from "next/image";

/**
 * Quote component
 *
 * @todo call an API to get a random quote
 * @todo add a button to get a new quote
 * @todo add styles
 * @returns quote component
 */
export const Quote = () => {
  return (
    <article className="flex flex-col items-center">
      <Image src="/images/quote.png" alt="Quote" width={100} height={100} />
      <p className="text-2xl">Quote</p>
    </article>
  );
};
