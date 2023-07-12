import React from 'react';
import Navbar from '../NavbarPage/Navbar';
import MainNavbar from '../NavbarPage/MainNavbar';
import Work from '../Work/Work';
import ToolsLibraries from '../Tools & Skills/ToolsLibraries';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div>
      <Navbar/>
      <MainNavbar/>
      <Work/>
      <ToolsLibraries/>
      <Contact/>
    </div>
  )
}

export default Home
