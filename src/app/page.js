import Hero from "@/components/Hero";
import HomeSearch from "@/components/HomeSearch";
import HomeListings from "@/components/HomeListings";
import TradeIn from "@/components/TradeIn";
import AboutStrip from "@/components/AboutStrip";
import { listings } from "@/data/listings";

export default function HomePage() {
  const featured = listings.slice(0, 3);

  return (
    <>
      <Hero slides={featured} />
      <HomeSearch />
      <HomeListings />
      <TradeIn />
      <AboutStrip />
    </>
  );
}
