import Movie from "@/components/Movie";

const Page = async ({ searchParams }) => {
  const apiKey = "51cacaf7bab5327b6fd505c18b4d83ca";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=${apiKey}&language=en-US%page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="row">
        <div className="flex flex-wrap items-center gap-3">
          {data.results?.map((dt, i) => (
            <Movie key={i} dt={dt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
