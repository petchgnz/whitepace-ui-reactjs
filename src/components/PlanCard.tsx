import { CircleCheckBig } from "lucide-react";

interface PlanProps {
  title: string;
  price: number;
  slogan: string;
  features: string[];
  isHighlighted: boolean;
}

const PlanCard = ({
  title,
  price,
  slogan,
  features,
  isHighlighted,
}: PlanProps) => {
  return (
    <div
      className={`flex w-[470px] flex-col rounded-xl border-2 p-8 ${isHighlighted ? "bg-primaryBlue border-slate-500 py-14 text-white shadow-2xl" : "text-secondaryBlack border-secondaryYellow bg-white shadow-lg"} text-center`}
    >
      <h3
        className={`text-xl font-bold ${isHighlighted ? "text-white" : "text-secondaryBlack"}`}
      >
        {title}
      </h3>
      <p
        className={`my-6 text-5xl font-extrabold ${isHighlighted ? "text-secondaryYellowDark" : "text-secondaryBlack"}`}
      >
        {price}
      </p>
      <p className="mt-2 mb-6 text-sm">{slogan}</p>

      <ul className="space-y-8">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-center gap-2 text-left">
            <CircleCheckBig className={`${!isHighlighted ? 'text-secondaryBlack':'text-secondaryYellowDark'} w-6`} />
            {feat}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`mt-10 w-fit rounded-lg px-5 py-3 text-start transition-all ease-out ${isHighlighted ? "bg-primaryCyan hover:bg-primaryCyanDark border-none" : "hover:bg-secondaryYellowDark border-secondaryYellowDark text-secondaryBlack border hover:text-white"} shadow-sm`}
      >
        Get Started
      </a>
    </div>
  );
};

export default PlanCard;
