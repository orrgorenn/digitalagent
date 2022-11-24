import React, {useState, useEffect} from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }

    if (typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="inline-flex items-center p-[10px] rounded-lg bg-indigo-100 dark:bg-slate-800 cursor-pointer" onClick={toggleTheme}>
      <button
        key={theme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  ) : (
    <div />
  )
}

export default ThemeToggle;