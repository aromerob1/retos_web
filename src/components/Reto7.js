import Navbar from './Reto7/navbar';
import Products from './Reto7/products';
import Carousel from './Reto7/carousel';
import SwitchButton from './Reto7/btnlike';
import DefaultSlider from './Reto7/slider';
import Footer from './Reto7/footer';
import ArcadeImage from './assets/arcade.png';
import StrategyImage from './assets/strategy.png';
import ActionImage from './assets/action.png';
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function Reto7() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);

  useEffect(() => {
    loadMore();
  }, []);

  async function fetchData(pageNumber) {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
      const data = await response.json();
      setCharacters(prevCharacters => [...prevCharacters, ...data.results]);
    } catch (error) {
      console.error(error);
    }
  }

  const loadMore = useCallback(() => {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
  }, [page]);

  return (
    <>
      <Navbar></Navbar>
      <div id="main_container" className="container mx-auto pt-14">
        <Carousel></Carousel>
        <h1 className="text-4xl font-bold pt-7">Characters</h1>
        <div className='flex justify-between pt-7'>
            <SwitchButton></SwitchButton>  
            <DefaultSlider></DefaultSlider>    
        </div>
        <div className='pt-14'>
        <Products characters={characters}></Products>
        </div>
        <div className='flex justify-center mt-14'>
          <button 
            onClick={loadMore} 
            className='flex justify-center w-64 border border-[#d8402a] rounded-full text-[#d8402a] p-4 text-xl font-bold'
          >
            Show More
            <ChevronDownIcon className='text-[#d8402a] h-6 w-6 ml-2'></ChevronDownIcon>
          </button>
        </div>
      </div>
      <div className='pt-14'>
          <Footer></Footer>
      </div>
    </>
  )
}

export default Reto7;


