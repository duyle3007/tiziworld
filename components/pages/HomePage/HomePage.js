import AllShopDetail from "@/components/AllShopDetail";
import Banners from "@/components/Banners";
import ComboHot from "@/components/ComboHot";
import CustomerFeedback from "@/components/CustomerFeedback";
import Intro from "@/components/Intro";
import NoticeBanner from "@/components/NoticeBanner";
import SocialMention from "@/components/SocialMention";

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
