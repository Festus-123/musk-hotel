import Hero from "@/pages/Hero/Hero";
import Overview from "@/pages/overview/Overview";
import Rooms from "@/pages/rooms-and-suite/Rooms";
import Explore from "@/pages/explore-musk/Explore";
import News from "@/pages/news-and-offers/News";

const page = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <Rooms />
      <Explore />
      <News />
    </div>
  );
}

export default page;