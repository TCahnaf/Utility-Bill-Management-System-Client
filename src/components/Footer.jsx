import React from 'react';
import { SiX, SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {
    return (
        <div>
          <footer className="footer sm:footer-horizontal bg-[#1B3D81] text-[#C9AE5D] p-10">
  <aside>
   <img className='w-12 h-12 md:w-16 md:h-16 object-contain"' src='/images/burj-al-arab.png' alt="" />
    <p>
      Jumerirah Properties Ltd.
      <br />
      Providing Luxury since 2013. Jumerirah Properties is responsible for <br/>
       collecting all bills that are essential for proper maintenance.
    </p>
  </aside>
  <nav className="flex flex-col gap-2">
  <h6 className="footer-title">Facebook</h6>
  <a href="https://www.facebook.com/aljumeirahpropertiesltd/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition-colors">
    <SiFacebook />
  </a>
</nav>

<nav className="flex flex-col gap-2">
  <h6 className="footer-title">Instagram</h6>
  <a href="https://www.instagram.com/jumeirahbeachhotel/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition-colors">
    <SiInstagram />
  </a>
</nav>

<nav className="flex flex-col gap-2">
  <h6 className="footer-title">X</h6>
  <a href="https://x.com/Jumeirah" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition-colors">
    <SiX />
  </a>
</nav>
  
</footer>
            
        </div>
    );
};

export default Footer;