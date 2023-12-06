import DiscoverPage from "@/components/discover/Discover";
import SearchAlbums from "@/components/search-albums/SearchAlbums";
import SearchArtists from "@/components/search-artists/SearchArtists";
import SearchSongs from "@/components/search-songs/SearchSongs";
import TestExplorerPage from "@/components/testFindComponents/testExplorerPage/TestExplorerPage";

export default function Discover() {
  return (
    <>
      <DiscoverPage />
      <SearchArtists />
      <SearchAlbums />
      <SearchSongs />
      <TestExplorerPage />
    </>
  );
}
