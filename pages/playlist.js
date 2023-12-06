import SearchPlaylists from "@/components/playlist/Playlist";
import Playlist from "@/components/playlist/Playlist";
import SearchAlbums from "@/components/search-albums/SearchAlbums";
import SearchArtists from "@/components/search-artists/SearchArtists";
import SearchSongs from "@/components/search-songs/SearchSongs";
import TestExplorerPage from "@/components/testFindComponents/testExplorerPage/TestExplorerPage";

export default function PlaylistPage() {
  return (
    <>
      {/* <Playlist /> */}
      <TestExplorerPage />
      <SearchAlbums />
      <SearchSongs />
      <SearchArtists />
      {/* <SearchPlaylists /> */}
    </>
  );
}
