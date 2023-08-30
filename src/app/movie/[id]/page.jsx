import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const apiKey = "51cacaf7bab5327b6fd505c18b4d83ca";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetails = await getMovie(id);
  const rating = movieDetails?.vote_average || 0;
  const maxRating = 10;
  const numStars = 5;

  const starColors = Array.from({ length: numStars }).map((_, index) => {
    if (rating >= (index + 1) * (maxRating / numStars)) {
      return "#FFD700";
    } else {
      return "#C0C0C0";
    }
  });

  const integerRating = Math.floor(rating);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <Image
            width={500}
            height={500}
            className="rounded-lg card-front"
            src={`https://images.tmdb.org/t/p/original/${
              movieDetails?.backdrop_path || movieDetails?.poster_path
            }`}
          />
        </div>
        <div className="p-4">
          <h1 className="text-4xl my-6">{movieDetails?.title}</h1>
          <p className="text-lg antialiased my-4">{movieDetails?.overview}</p>
          <div className="flex items-center">
            <p className="text-md font-bold antialiased mx-2">
              {integerRating} / 10
            </p>

            {starColors.map((color, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={color}
                width="20"
                height="20"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1l1.567 4.929h4.978a.5.5 0 0 1 .39.843l-3.979 3.057 1.567 4.929a.5.5 0 0 1-.769.558L8 14.142l-4.734 3.214a.5.5 0 0 1-.77-.558l1.567-4.929-3.98-3.057a.5.5 0 0 1 .39-.843h4.978L8 1z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
