import Playlist from "@/components/playlist/Playlist";
import SearchAlbums from "@/components/search-albums/SearchAlbums";
import SearchArtists from "@/components/search-artists/SearchArtists";

import SearchSongs from "@/components/search-songs/SearchSongs";

export default function PlaylistPage() {
  return (
    <>
      <Playlist />
      <SearchAlbums />
      <SearchSongs />
      <SearchArtists />
    </>
  );
}
