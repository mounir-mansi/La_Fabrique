import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Logo from "../../assets/Logo/PNG/LOGO-LF-BLANC.png";

export default function Home() {
  return (
    <div className="Home">
      <Hero logo={Logo} />
    </div>
  );
}
