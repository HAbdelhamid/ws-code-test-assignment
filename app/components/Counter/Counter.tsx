"use client";

import useSWR from "swr";

/**
 * Counter component
 *
 * @todo make the number humanly readable
 * @returns
 */
const Counter = () => {
  const { data, error } = useSWR(
    "/api/visitors",
    (url) =>
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (!res.ok) throw new Error(res.statusText);

        return res.json();
      }),
    {
      refreshInterval: 5000,
    }
  );

  useSWR("/api/visits", (url) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) throw new Error(res.statusText);
    })
  );

  if (error) return <div className="flex justify-center">Error</div>;

  return (
    <div
      className="flex bg-gray-700 justify-center items-center rounded-2xl p-2 my-5 xl2:my-10"
      data-testid="visitor-count"
    >
      <p className="flex items-center justify-center text-white text-1xl">
        Current visitors:
        <span className="ml-3 countdown ">{data?.count}</span>
      </p>
    </div>
  );
};

export default Counter;
