function AnimeCard({ animeImg, title, releaseDate, relationType, type }) {
  return (
    <div class="relative w-32 h-52 lg:w-36 lg:h-60  hover:border-2 hover:border-[#e63946]/50 overflow-hidden  rounded-lg">
      <img class="object-cover w-full h-full" src={animeImg} alt={title} />
      <div class="absolute inset-0 -bottom-1 bg-gradient-to-t flex flex-col-reverse from-[#0b090a] to-transparent p-3 lg:p-4">
        <p class="text-[#f5f3f4]/50 text-xs lg:text-sm lowercase ">
          <span className="capitalize"> {type}</span> •{" "}
          {releaseDate || relationType}
        </p>
        <p class=" text-md bottom-0 lg:text-lg font-medium line-clamp-3">
          {title}
        </p>
      </div>
    </div>
  );
}

export default AnimeCard;
