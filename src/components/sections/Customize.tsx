import { MoveRight } from "lucide-react";

const Customize = () => {
  return (
    <section className="text-secondaryBlack bg-white py-20">
      <div className="container mx-auto flex items-center justify-evenly">
        <div className="hidden h-fit lg:block">
          <img src="https://placehold.co/450x350" alt="" />
        </div>

        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Customise it to your needs</h1>
          <p className="my-5">
            Customise to app with plugins, custom themes ans multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>

          <a
            href="#"
            className="bg-primaryCyan hover:bg-primaryCyanDark mt-10 inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-all ease-out text-white shadow-lg"
          >
            Let's Go
            <MoveRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Customize;
