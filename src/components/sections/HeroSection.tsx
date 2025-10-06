import { MoveRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-primaryBlue relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="absolute inset-0 origin-bottom-left scale-75 bg-[url(/img/curve-lines.png)] bg-cover bg-no-repeat opacity-10 invert" />

      <div className="relative z-10 container mx-auto">
        <div className="flex items-center justify-evenly">
          <div className="max-w-lg text-white">
            <h1 className="text-5xl font-bold">Get More Done with Whitepace</h1>
            <p className="my-5">
              Project management software that enables your teams collaborate,
              plan, analyze and manage everyday tasks
            </p>
            <a
              href="#"
              className="bg-primaryCyan hover:bg-primaryCyanDark mt-10 inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-all ease-out shadow-lg"
            >
              Try Whitepace free
              <MoveRight size={16} />
            </a>
          </div>

          <div className="hidden h-[450px] lg:block">
            <img src="https://placehold.co/600x450" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
