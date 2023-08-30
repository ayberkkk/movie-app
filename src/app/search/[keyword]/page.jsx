import React from "react";
import Movie from "@/components/Movie";

const Page = async ({ params }) => {
  const apiKey = "51cacaf7bab5327b6fd505c18b4d83ca";
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`
  );
  const data = await res.json();

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center gap-3">
        {!data?.results ? (
          <p className="text-center text-red-600">Film Bulunamadı !</p>
        ) : (
          data.results?.map((dt, i) => <Movie key={i} dt={dt} />)
        )}
      </div>
    </div>
  );
};

export default Page;
