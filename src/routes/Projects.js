
import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
import PricingCard from '../components/PricingCard';

const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Projects" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}
export default Projects;