export const fetchRandomQuote = () =>
  fetch("https://api.chucknorris.io/jokes/random?category=dev", {
    cache: "no-store",
  }).then((response) => response.json());
