import FeaturedAnimal from "@/Component/Home Page/FeaturedAnimal";
import TipsSection from "@/Component/Home Page/TipsSection";
import Banner from "@/Component/Shared Item/Banner";
import Image from "next/image";

export const metadata = {
  title: 'Home | Qurbanir Hat',
  description: 'Welcome to Qurbanir Hat. A modern livestock marketplace where users can explore animals for Qurbani such as cows and goats.',
};

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <FeaturedAnimal></FeaturedAnimal>
    <TipsSection></TipsSection>
    </>
  );
}
