import Hls from "hls.js";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Player = ({ sources, episode }) => {
  const [selectedUrl, setSelectedUrl] = useState(
    sources.find((video) => video.quality === "default")?.url
  );
  const [playedPercent, setPlayedPercent] = useState(0);
  const [player, setPlayer] = useState(null);

  const handleQualityChange = (url) => {
    setSelectedUrl(url);
  };

  useEffect(() => {
    setSelectedUrl(sources.find((video) => video.quality === "default")?.url);
    setPlayedPercent(0);
  }, [episode]);

  const handlePlayerReady = (player) => {
    setPlayer(player);
  };

  useEffect(() => {
    if (player) {
      if (selectedUrl.endsWith(".m3u8")) {
        const hls = new Hls();
        hls.loadSource(selectedUrl);
        hls.attachMedia(player.getInternalPlayer());
      }
    }
  }, [player, selectedUrl]);

  return (
    <div key={episode.id} className="w-full mb-7 ">
      {selectedUrl && episode ? (
        <div className="justify-center flex ">
          <div className="w-full h-full   lg:w-[720px] aspect-video ">
            <ReactPlayer
              url={selectedUrl}
              controls
              playing
              width="100%"
              height="100%"
              style={{ top: 0, left: 0, width: "100%", height: "100%" }}
              onProgress={(progress) => {
                const played = progress.played;
                const percent = played * 100;
                setPlayedPercent(percent);
              }}
              onReady={handlePlayerReady}
            />
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
      <div className="gap-1 flex   flex-wrap relative place-content-end lg:place-content-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.688c0-.864.933-1.4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV864.933-1.4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV"
          />
        </svg>
        <select
          value={selectedUrl}
          onChange={(event) => handleQualityChange(event.target.value)}
          className=" px-4 py-2  bg-[#e63946] border-4 border-black/50 text-black rounded-xl focus:outline-none "
        >
          {sources
            .filter(
              (video, index, self) =>
                index === self.findIndex((v) => v.url === video.url)
            )
            .map((video) => (
              <option key={video.url} value={video.url} bg-black>
                {video.quality}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Player;
