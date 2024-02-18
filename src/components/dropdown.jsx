"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Dropdown({ options, defaultOption }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Mis juegos');
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    const selectOption = (option) => {option ?
      setSelectedOption(option) : setSelectedOption('Mis juegos');
      setIsOpen(false);
    };
  
    return (
      <li className='dropdown'>
        <div className='select' onClick={toggleOpen}>
          <span className='selected'>{selectedOption}</span>
          <div className="caret"></div>
        </div>
        <ul className={`menu ${isOpen ? 'menu-open' : ''}`}>
          {options.map((option, index) => (
            <li key={index} onClick={() => selectOption(option)}>{option ?
                <Link href={`/${option}`} className='optionss'>
                    {option}
                </Link>
            : <Link href={'/'} className='optionss'>Mis juegos</Link>}
            </li>
          ))}
        </ul>
      </li>
    );
  }