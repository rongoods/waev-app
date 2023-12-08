import SearchPlaylists from "@/components/search-tools/SearchPlaylists";
import SearchAlbums from "@/components/search-tools/SearchAlbums";
import SearchArtists from "@/components/search-tools/SearchArtists";
import SearchSongs from "@/components/search-tools/SearchSongs";
import TestExplorerPage from "@/components/find-components/explorer-page/ExplorerPage";

export default function PlaylistPage() {
  return (
    <>
      <SearchPlaylists />
      <TestExplorerPage />
      <SearchAlbums />
      <SearchSongs />
      <SearchArtists />
    </>
  );
}
