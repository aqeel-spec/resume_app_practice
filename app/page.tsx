import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Sidebar from "./components/sidebar";
import AboutMe from "./components/aboutMe";
import { aboutMe, skills, professionalData } from "./data/page-data";
import ProfessionalExperence from "./components/pExperence";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
      <ProfessionalExperence data={professionalData} />
    </div>
  );
}
