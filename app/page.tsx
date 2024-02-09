import { Quote } from "./components/Quote/Quote";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Quote of the day</h1>
      <Quote />
    </main>
  );
};

export default Home;
