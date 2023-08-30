import Link from "next/link";

const Tabs = () => {
  const tabs = [
    {
      name: "Most Popular",
      url: "popular",
    },
    {
      name: "Last Movie",
      url: "latest",
    },
    {
      name: "Up Coming",
      url: "upcoming",
    },
  ];
  return (
    <div className="container mx-auto p-5 my-3">
      <div className="row-auto">
        <div className="flex items-center justify-center gap-7">
          {tabs.map((tab, i) => (
            <Link className="cursor-pointer hover:opacity-70 transition-opacity border p-3 rounded-xl" href={`/?genre=${tab.url}`}>{tab.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
