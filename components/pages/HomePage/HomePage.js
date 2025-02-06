import AllShopDetail from "@/components/AllShopDetail";
import Banners from "@/components/Banners";
import ComboHot from "@/components/ComboHot";
import CustomerFeedback from "@/components/CustomerFeedback";
import Intro from "@/components/Intro";
import NoticeBanner from "@/components/NoticeBanner";

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
