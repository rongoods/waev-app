import DiscoverPage from "@/components/discover/Discover";
import SearchAlbums from "@/components/search-tools/SearchAlbums";
import SearchArtists from "@/components/search-tools/SearchArtists";
import SearchSongs from "@/components/search-tools/SearchSongs";
import TestExplorerPage from "@/components/find-components/explorer-page/ExplorerPage";
import SearchPlaylist from "@/components/search-tools/SearchPlaylists";
import SearchUsers from "@/components/search-users/SearchUsers";

export default function Discover() {
  return (
    <>
      <DiscoverPage />
      <SearchPlaylist />
      <SearchArtists />
      <SearchAlbums />
      <SearchSongs />
      <TestExplorerPage />
      {/* <SearchUsers /> */}
    </>
  );
}
