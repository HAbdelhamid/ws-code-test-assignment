export const fetchRandomQuote = () =>
  fetch("https://api.chucknorris.io/jokes/random?category=dev")
    .then((response) => response.json())
    .then((data) => data.value);
