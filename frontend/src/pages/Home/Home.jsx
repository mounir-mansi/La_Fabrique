import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Logo from "../../assets/Logo/PNG/LOGO-LF-BLANC.png";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero logo={Logo} />
    </div>
  );
}
