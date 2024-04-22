import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Logo from "../../assets/Logo/PNG/LOGO-LF-BLANC.png";
import Presentation from "../../components/Home/Presentation";
import ArticleHome from "../../components/Home/ArticleHome";
import Carroussel from "../../components/Carroussel/Carroussel";
import Footer from "../../components/Footer/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter/Newsletter";

export default function Home() {
  return (
    <div className="Home">
      <Hero logo={Logo} />
      <div className="Home__content">
        <Presentation />
        <ArticleHome />
        <Carroussel />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
