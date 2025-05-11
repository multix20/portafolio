import React from 'react';

const MobileMenu = ({ navItems, activeSection, handleNavClick }) => {
  return (
    <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6">
      <ul className="flex flex-col gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-xl font-medium ${
                activeSection === item.id ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
