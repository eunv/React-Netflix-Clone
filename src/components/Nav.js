import React, { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setShow(true);
      }
      else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className= {`nav ${show && "nav_balck"}`}>
      <img
        alt='Netfilx logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        className='nav_logo'
        onClick={() => window.location.reload()}
      />
      <img
        alt='User logged'
        src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.webp'
        className='nav_avatar'
      />
    </nav>
  )
}
