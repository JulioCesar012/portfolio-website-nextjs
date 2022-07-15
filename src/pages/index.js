import GlobalStyle from "../styles/Global";
import { Hero, Services } from "~/components";
import About from "~/components/UI/About";

import allSkills from '~/utils/mockups/skills.json';
import about from '~/utils/mockups/aboutme.json';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Services />
      <About skills={allSkills} {...about}  />
    </>
  );
}
