import AllShopDetail from "@/components/AllShopDetail.server";
import Banners from "@/components/Banners.server";
import ComboHot from "@/components/ComboHot.server";
import CustomerFeedback from "@/components/CustomerFeedback.server";
import Intro from "@/components/Intro.server";
import NoticeBanner from "@/components/NoticeBanner.server";

const HomePage = () => {
  return (
    <div>
      <Banners />
      <Intro />
      <AllShopDetail />
      <NoticeBanner />
      <CustomerFeedback />
      <ComboHot />
    </div>
  );
};

export default HomePage;
