import Hero from "@/pages/Hero/Hero";
import Overview from "@/pages/overview/Overview";
import Rooms from "@/pages/rooms-and-suite/Rooms";
import Explore from "@/pages/explore-musk/Explore";
import News from "@/pages/news-and-offers/News";
import Contact from "@/pages/contact/Contact";

const page = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <Rooms />
      <Explore />
      <News />
      <Contact />
    </div>
  );
}

export default page;