const RecentEpisodeCard = ({ episode }) => {
  const imageUrl = episode.image;
  return (
    <>
      <div
        className={`relative group overflow-hidden cursor-pointer transition-opacity duration-200 rounded-lg`}
      >
        <div className="absolute inset-0 z-10 transition-all duration-300  group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 left-0 lg:w-full h-[113px] w-[200px]  lg:h-full px-4 py-2 flex flex-col justify-end">
            <h3 className="text-md  line-clamp-2">
              {episode.title.english || episode.title.userPreferred || ""}
            </h3>
            <p className="text-sm  text-[#f5f3f4]/50 ">
              Episode {episode.episodeNumber}
            </p>
          </div>
        </div>
        <img
          className="object-cover object-center  h-[113px] w-[200px] lg:w-full lg:h-full aspect-video transition-all duration-100 transform group-hover:scale-[102%]"
          src={imageUrl}
          alt={`Episode ${episode.number}`}
        />
      </div>
    </>
  );
};

export default RecentEpisodeCard;
