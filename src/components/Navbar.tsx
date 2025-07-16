import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Info', href: '/info' },
  { name: 'Kontakt', href: '/kontakt' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="navbar-modern">
      {({ open }) => (
        <>
          <div className="nav-container">
            <div className="nav-content">
              {/* Logo */}
              <motion.div 
                className="logo-container"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/" className="logo-link">
                  <SparklesIcon className="logo-icon" />
                  <span className="logo-text">BS Hydro Cleaning</span>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="nav-desktop">
                <div className="nav-links">
                  {navigation.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      <Link
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? 'nav-link active'
                            : 'nav-link',
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="nav-mobile-toggle">
                <Disclosure.Button className="mobile-menu-button">
                  <span className="sr-only">Hauptmenü öffnen</span>
                  {open ? (
                    <XMarkIcon className="menu-icon" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="menu-icon" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <Disclosure.Panel className="nav-mobile-panel">
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? 'mobile-link active'
                      : 'mobile-link',
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;