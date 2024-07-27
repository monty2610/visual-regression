import React from 'react';
import { FaUserCircle, FaReact } from 'react-icons/fa'; // Importing icons from react-icons

interface NavBarProps {
  logoHref?: string;
  userAvatarSrc?: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoHref, userAvatarSrc }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <a href={logoHref ?? "#"} className="flex items-center">
        <FaReact className="text-3xl mr-2" /> {/* Logo icon */}
        <span className="font-bold text-xl">Logo</span>
      </a>
      <div className="flex items-center">
        {userAvatarSrc ? (
          <img src={userAvatarSrc} alt="User Avatar" className="w-10 h-10 rounded-full" />
        ) : (
          <FaUserCircle className="text-3xl" /> 
        )}
      </div>
    </nav>
  );
};

export default NavBar;
