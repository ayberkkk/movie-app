"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
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
            <Link
              className={`cursor-pointer hover:opacity-70  border p-3 rounded-xl transition-all ${tab.url === genre ? "underline underline-offset-4 text-blue-300" : " " }`}
              href={`/?genre=${tab.url}`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
