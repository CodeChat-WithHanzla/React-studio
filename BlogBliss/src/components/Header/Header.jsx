import React from 'react';
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../Button'
function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Logo />
        <nav className="grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {navItems.map((item) => (
              item.active ? (
                <li key={item.name}>
                  <Button type='button' onClick={() => navigate(item.slug)}>{item.name}</Button>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li><LogoutBtn /></li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
