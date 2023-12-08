import CopyArtistSearch from "@/components/copy-url-tools/CopyArtistSearch";
import CopyPlaylistSearch from "@/components/copy-url-tools/CopyPlaylistSearch";
import CopySongSearch from "@/components/copy-url-tools/CopySongsSearch";
import Profile from "@/components/profile/Profile";
import SpotifyPlayer from "@/components/spotify-player/SpotifyPlayer";

export default function ProfilePage() {
  return (
    <>
      <Profile />
      <br></br>
      <CopyArtistSearch />
      <CopySongSearch />
      <CopyPlaylistSearch />
      <SpotifyPlayer />
    </>
  );
}
