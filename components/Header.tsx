import React from 'react'
import { FaShieldAlt } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';

import NavLink from './NavLink'
import ThemeToggle from './ThemeToggle'

interface Props {
  title: string;
}

const Header = ({title}: Props) => {
  return (
    <header className="fixed w-full p-2 z-20 backdrop-blur-md">
      <div className="mx-auto max-w-[52rem]">
        <nav className="flex items-center gap-3 text-base">
          <a href="/" className="group">
            <h2 className="font-semibold tracking-tight p-2 font-plexsans text-xl flex items-center gap-2">
              <FaShieldAlt className="w-5 inline-block transition-transform group-hover:scale-110" /> הסוכן הדיגיטלי
            </h2>
          </a>
          <div className="flex-1"></div>
          <div className="gap-6 hidden md:flex">
            <NavLink className="inline-flex items-center gap-2 border rounded-lg border-slate-800 dark:border-slate-100 px-2 py-1" href="/quote">השווה ביטוח</NavLink>
            <NavLink className="inline-flex items-center gap-2 border rounded-lg border-slate-800 dark:border-slate-100 px-2 py-1" href="tel:0524200785"><AiOutlinePhone /> 052-4200785</NavLink>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;