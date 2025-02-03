import AllShopDetail from "@/components/AllShopDetail";
import Banners from "@/components/Banners";
import Intro from "@/components/Intro";
import NoticeBanner from "@/components/NoticeBanner";

const HomePage = () => {
  return (
    <div>
      <Banners />
      <Intro />
      <AllShopDetail />
      <NoticeBanner />
    </div>
  );
};

export default HomePage;
