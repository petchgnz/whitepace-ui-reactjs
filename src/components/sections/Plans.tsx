import PlanCard from "../PlanCard";

const cardData = [
  {
    title: "Free",
    price: "$0",
    slogan: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    isHighlighted: false,
  },
  {
    title: "Personal",
    price: "$11.99",
    slogan: "Keep home and family on track",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    isHighlighted: true,
  },
  {
    title: "Organization",
    price: "$49.99",
    slogan: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    isHighlighted: false,
  },
];

const Plans = () => {
  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Choose Your Plan</h1>
      <p className="py-5 text-center text-sm/7">
        Whether you want to get organized, keep your personal life on tract,
        boost workplace productivity,
        <br /> Evernote thas the rigth plan for you.
      </p>

      <div className="flex items-center justify-center gap-10">
        {cardData.map((card, index) => (
          <PlanCard key={index} {...card}/>
        ))}
      </div>
    </section>
  );
};

export default Plans;
