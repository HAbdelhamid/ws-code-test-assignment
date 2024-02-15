import { Suspense } from "react";
import Counter from "../Counter/Counter";
import { SWRProvider } from "../Providers/SWRProvider";

/**
 * Footer component
 *
 * @returns
 */
const Footer = async () => {
  let fallBackData = { count: 0 };
  try {
    const res = await fetch("http://localhost:3000/api/visitors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    fallBackData = await res.json();
  } catch (error) {
    console.log("Error fetching data", error);
  }

  return (
    <footer className="flex justify-center">
      <SWRProvider
        value={{
          fallback: {
            "/api/visitors": fallBackData,
          },
        }}
      >
        <Counter />
      </SWRProvider>
    </footer>
  );
};

export default Footer;
