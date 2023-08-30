"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Movie = ({ dt }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto w-[500px] h-[300px] relative cursor-pointer" onClick={() => router.push(`/movie/${dt?.id}`)}>
      <div className="imageContainer rounded-lg">
        <div className="card">
          <Image
            width={500}
            height={600}
            className="rounded-lg card-front"
            src={`https://images.tmdb.org/t/p/original/${
              dt.backdrop_path || dt.poster_path
            }`}
          />
          <div className="card-back">
            <article className="image-desc p-5">
              <h4 className="text-xl my-2">{dt?.title}</h4>
              <p className="text-sm">{dt?.overview}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
