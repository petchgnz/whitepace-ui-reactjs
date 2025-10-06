import { MoveRight } from "lucide-react";

const Extension = () => {
  return (
    <section className="bg-primaryBlue py-20 text-white">
      <div className="container mx-auto flex items-center justify-evenly">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Use as Extension</h1>
          <p className="my-5">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>

          <a
            href="#"
            className="bg-primaryCyan hover:bg-primaryCyanDark mt-10 inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-all ease-out shadow-lg"
          >
            Let's Go
            <MoveRight size={16} />
          </a>
        </div>

        <div className="hidden h-fit lg:block">
          <img src="https://placehold.co/450x350" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Extension;
