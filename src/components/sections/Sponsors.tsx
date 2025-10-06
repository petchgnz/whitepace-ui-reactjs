import { Facebook, Linkedin, Slack } from "lucide-react";

const Sponsors = () => {
  return (
    <section className="bg-white font-primary relative py-20 text-secondaryBlack">
      <div className="absolute inset-0 bg-left scale-x-[-1] bg-[url('/img/bg-line.png')] bg-no-repeat opacity-20" />

      <div className="container mx-auto flex flex-col items-center justify-center space-y-14">
        <h2 className="text-5xl font-bold">Our sponsors</h2>

        <div className="flex items-center gap-20">
          <div className="flex items-center gap-3 text-2xl font-semibold">
            <Facebook size={32}/>
            Facebook
          </div>

          <div className="flex items-center gap-3 text-2xl font-semibold">
            <Linkedin size={32}/>
            LinkedIn
          </div>

          <div className="flex items-center gap-3 text-2xl font-semibold">
            <Slack size={32}/>
            Slack
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
