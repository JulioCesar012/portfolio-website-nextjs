import GlobalStyle from "../styles/Global";
import { Contact, Hero, Portfolio, Services, Testimonial } from "~/components";
import About from "~/components/UI/About";

import { aboutme, skills, testimonial } from '~/utils';

export default function Home() {
  const aboutProps = {
    skills,
    aboutme,
  }
  
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Services />
      <About {...aboutProps}  />
      <Portfolio />
      <Testimonial {...testimonial} />
      <Contact />
    </>
  );
}
