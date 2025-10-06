import { Apple, Grid2x2, Smartphone, } from "lucide-react";

const Download = () => {
  return (
    <section className="bg-primaryBlue py-24 text-center text-white font-primary">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold">Try Whitepace today</h2>
        <p className="mt-4 text-lg text-gray-300">
          Get started for free. Add your whole team as your needs grow.
        </p>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-600"
        >
          Try Taskey free &rarr;
        </a>

        <p className="mt-12 text-gray-400">
          On a big team?{" "}
          <a href="#" className="underline hover:text-white">
            Contact sales
          </a>
        </p>

        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-10">
            <Apple
              size={40}
              className="cursor-pointer text-white transition hover:text-gray-300"
            />
            <Grid2x2
              size={40}
              className="cursor-pointer text-white transition hover:text-gray-300"
            />
            <Smartphone
              size={40}
              className="cursor-pointer text-white transition hover:text-gray-300"
            />
          </div>
          <div className="mt-5 h-1 w-16 rounded-full bg-yellow-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Download;
