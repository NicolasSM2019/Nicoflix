import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Carrossel.css';

import alpha from '../assets/alphas.jpeg';
import round from '../assets/round6.jpeg';
import urso from '../assets/ourso.jpeg';
import the from '../assets/thelast.jpeg';
import falo from '../assets/falout.jpeg';
import cartma from '../assets/South-park.jpg';

const seriesData = [
  { id: 1, image: cartma, title: 'South Park' },
  { id: 2, image: alpha, title: 'Alphas' },
  { id: 3, image: urso, title: 'O Urso' },
  { id: 4, image: round, title: 'Round 6' },
  { id: 5, image: the, title: 'The Last of Us' },
  { id: 6, image: falo, title: 'Fallout' },
];

function Carrossel() {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkArrows = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); // -1 para margem de erro
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      checkArrows(); // Verifica no carregamento inicial
      carouselElement.addEventListener('scroll', checkArrows);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('scroll', checkArrows);
      }
    };
  }, []);

  const handleScroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    handleScroll(-carouselRef.current.clientWidth * 0.8);
  };

  const scrollRight = () => {
    handleScroll(carouselRef.current.clientWidth * 0.8);
  };

  return (
    <div className='carousel-section'>
      <span className='carousel-title'>Séries estrangeiras dubladas em português</span>

      <div className='carousel-container'>
        {showLeftArrow && (
          <button className='arrow left-arrow' onClick={scrollLeft}>
            <FiChevronLeft size={40} />
          </button>
        )}

        <div className='carousel-content' ref={carouselRef}>
          {seriesData.map((serie) => (
            <div className='carousel-item' key={serie.id}>
              <img src={serie.image} alt={serie.title} />
              <div className='item-info'>
                <h3>{serie.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button className='arrow right-arrow' onClick={scrollRight}>
            <FiChevronRight size={40} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Carrossel;