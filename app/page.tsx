import { SWRProvider } from "./components/Providers/SWRProvider";
import { RandomQuote } from "./components/RandomQuote/RandomQuote";
import { fetchRandomQuote } from "./utils/fetchRandomQuote";

export const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });

const Home = async () => {
  const randomQuote = await fetchRandomQuote();

  return (
    <main className="flex flex-col items-center px-5 sm:px-20">
      <h1 className="text-2xl font-bold flex h-full p-10 text-center sm:text-4xl">
        Quote of the day
      </h1>

      <SWRProvider
        value={{
          fallback: {
            "https://api.chucknorris.io/jokes/random?category=dev": randomQuote,
          },
        }}
      >
        <RandomQuote />
      </SWRProvider>
    </main>
  );
};

export default Home;
