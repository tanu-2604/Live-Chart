
import React from 'react';
import logo from '../assets/logo.png';
import { useGlobalContext } from '../data/context';
import { social, links } from '../data/data';
import CloseIcon from '@mui/icons-material/Close';

const OpenSidebar = () => {
  return (
    <aside className='opensidebar'>
      <div className='sidebar-header'>
        {/* <img src={logo} className='logo' alt='coding addict' /> */}
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default OpenSidebar;
