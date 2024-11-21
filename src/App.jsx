import React, {useEffect, useState} from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import './App.css'

function App() {
  const heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passion"},
    {text1: "Give in to", text2: "your passions"}
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {return count === 2 ? 0 : count + 1});
    }, 3000);
  }, []);

  return (
    <>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <Navbar />
        <Hero 
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          playStatus={playStatus}
          setPlayStatus={setPlayStatus}
        />
    </>
  )
}

export default App
