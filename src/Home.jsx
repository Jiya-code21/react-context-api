import React,{useContext} from 'react'
import Herosection from './components/Herosection'
import heroImage from './assets/images/hero.webp'

import { AppContext } from './Context'

function Home(){
  const firstName=useContext(AppContext); 

  const data = {
    name:firstName,
    image:heroImage
  };

  return <Herosection {...data} />;  // Pass data to Herosection component
}

export default Home;
