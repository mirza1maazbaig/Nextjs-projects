import React from 'react'

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] =useState(false)

  const toogleMenu = () =>{
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
      <div className='text-xl font-medium'> Mirza Maaz Baig</div>
      <ul className='gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink' ><a href='#hero'>Home</a></li>
        <li className='menuLink'><a href='#about'>About</a></li>
        <li className='menuLink'><a href='#skills'>Skills</a></li>
        <li className='menuLink'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='md:hidden' onClick={toogleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30}/>:
        <AiOutlineMenu size={30}/>

        }
      </div>

      

     </div>
     {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li className='menuLink'>
          <a href="#hero" onClick={toogleMenu}>Home</a>
        </li>
        <li className='menuLink'>
          <a href="#about" onClick={toogleMenu}>About</a>
        </li>
        <li className='menuLink'>
          <a href="#contact" onClick={toogleMenu}>Contact</a>
        </li>
        <li className='menuLink'>
          <a href="#skills" onClick={toogleMenu}>Skills</a>
        </li>
      </ul>
     ) 
     } 
    </div>
  );
}

export default Navbar
