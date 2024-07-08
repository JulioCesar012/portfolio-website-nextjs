import {
  Contact,
  Hero,
  Portfolio,
  Services,
  Study,
} from "~/components";
import About from "~/components/UI/About";

import { aboutme, contact, hero, skills, study } from "~/utils";

const Home = () => {
  const aboutProps = {
    skills,
    aboutme,
  };

  return (
    <>
      <Hero {...hero} />
      <Services />
      <About {...aboutProps} />
      <Portfolio />
      <Study {...study} />
      <Contact {...contact} />
    </>
  );
};
export default Home;
