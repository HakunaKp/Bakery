import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Place Order',
    path: '/order',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'View Gallery',
    path: '/gallery',
    icon: <IoIcons.IoIosPhotos />,
    cName: 'nav-text'
  },
  /*
  {
    title: 'View Order Status',
    path: '/manage',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  */
];