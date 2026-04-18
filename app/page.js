import MainHero from "@/components/MainHero";
import HomeServices from "@/sections/HomeServices";
import HomeAbout from "@/sections/HomeAbout";
import HomeClients from "@/sections/HomeClients";
import HomeContactCta from "@/sections/HomeContactCta";

export default function HomePage() {
  return (
    <>
      <MainHero />
      <HomeServices />
      <HomeAbout />
      <HomeClients />
      <HomeContactCta />
    </>
  );
}
