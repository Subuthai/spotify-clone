import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
} from "../components/sections.js";

export default function Home() {
  return (
    <div className="pt-28 md:pl-72 p-8">
      <FirstSection title="Spotify Playlists" />
      <SecondSection title="Uyku" />
      <ThirdSection title="Odaklan" />
      <FourthSection title="Ruh Hali" />
      <FifthSection title="Popüler yeni çıkanlar" />
    </div>
  );
}
