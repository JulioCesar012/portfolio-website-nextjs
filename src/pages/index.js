import GlobalStyle from "../styles/Global";
import { Contact, Hero, Portfolio, Services, Study } from "~/components";
import About from "~/components/UI/About";

import { aboutme, contact, hero, skills, study } from '~/utils';

export default function Home() {
  const aboutProps = {
    skills,
    aboutme,
  }
  
  return (
    <>
      <GlobalStyle />
      <Hero {...hero} />
      <Services />
      <About {...aboutProps}  />
      <Portfolio />
      <Study {...study} />
      <Contact {...contact}  />
    </>
  );
}
