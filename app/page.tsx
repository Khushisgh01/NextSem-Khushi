import Navbar from "./Pages/navigation/Navbar";
import Footer from "./Pages/navigation/Footer";
import Features from "./components/home/Features";
import JoinTeam from "./components/home/JoinTeamSection/JoinTeam";
import HeroCards from "./components/home/herocards";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCards />
      <Features />
      <JoinTeam />
    </>
  );
}
