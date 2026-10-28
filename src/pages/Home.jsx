import '../styles/sections.css';
import Hero from '../components/Hero.jsx';
import Capabilities from '../components/Capabilities.jsx';
import { Intro, Services, Process, Transformation, Banner, Founders, Why, Numbers, Ways, Faq } from '../components/Sections.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Intro />
      <Services />
      <Process />
      <Transformation />
      <Banner />
      <Founders />
      <Why />
      <Numbers />
      <Ways />
      <Faq />
    </>
  );
}