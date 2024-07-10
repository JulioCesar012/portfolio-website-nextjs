import { useRouter } from "next/router";
import { useEffect } from "react";
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
  const router = useRouter();

  const aboutProps = {
    skills,
    aboutme,
  };

  const pathNavMenu = router?.asPath?.replace('/', '')?.replace('#', '') || '';

  useEffect(() => {
    document.title = `Dev.Julio - ${pathNavMenu?.charAt(0)?.toUpperCase() + pathNavMenu?.slice(1)}`;
  }, [])

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
