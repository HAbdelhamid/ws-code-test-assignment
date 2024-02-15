"use client";

import { fetchRandomQuote } from "@/app/utils/fetchRandomQuote";
import { Quote } from "../Quote/Quote";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { fetcher } from "@/app/page";

type Quote = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

/**
 * Fetches a random quote and displays it.
 *
 * @returns {JSX.Element} The random quote.
 */
export const RandomQuote = () => {
  const { data: quoteContent, error: getRequestError } = useSWR<
    Quote,
    string,
    string
  >("https://api.chucknorris.io/jokes/random?category=dev", fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
  });
  const {
    trigger: getRandomQuote,
    isMutating,
    error,
  } = useSWRMutation<Quote, string, string>(
    "https://api.chucknorris.io/jokes/random?category=dev",
    fetcher
  );

  if (getRequestError) return <div>Failed to load</div>;
  if (!quoteContent) return null;
  return (
    <Quote
      content={quoteContent.value}
      imageURL="/Quote_image.webp"
      onFetchRandom={getRandomQuote}
    />
  );
};
