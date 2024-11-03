"use client";

import { Menu } from 'antd';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <Menu mode="horizontal" theme="dark" className="flex">
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        
      </Menu>
    </nav>
  );
};

export default Navbar;
