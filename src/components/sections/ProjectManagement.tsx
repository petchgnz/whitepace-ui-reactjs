import { MoveRight } from "lucide-react";

const ProjectManagement = () => {
  return (
    <>
      <section className="relative bg-white py-20">
        <div className="absolute bg-[url('/img/bg-line.png')] bg-no-repeat opacity-20 scale-95 inset-0 origin-left" />

        <div className="container mx-auto flex items-center justify-evenly z-10">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Project
              <br />
              Management
            </h1>
            <p className="my-5">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>

            <a
              href="#"
              className="bg-primaryCyan hover:bg-primaryCyanDark mt-10 inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-white transition-all ease-out shadow-lg"
            >
              Get Started
              <MoveRight size={16} />
            </a>
          </div>

          <div className="hidden h-[450px] lg:block">
            <img src="https://placehold.co/500x450" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto flex items-center justify-evenly">
          <div className="hidden h-fit lg:block">
            <img src="/img/work-together.png" width={484} alt="work together" />
          </div>

          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Work together</h1>
            <p className="my-5">
              With whitepace, share you notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>

            <a
              href="#"
              className="bg-primaryCyan hover:bg-primaryCyanDark mt-10 inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-white transition-all ease-out shadow-lg"
            >
              Try it now
              <MoveRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectManagement;
