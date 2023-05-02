import React, { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="p-2 inline-block">
      {theme === 'dark' ? (
        <div
          onClick={() => setTheme('light')}
          className="flex items-center cursor-pointer"
        >
          <HiSun className="text-primary text-2xl mr-2" />
          Light Mode
        </div>
      ) : (
        <div
          onClick={() => setTheme('dark')}
          className="flex items-center cursor-pointer"
        >
          <HiMoon className="text-primary text-2xl mr-2" />
          Dark Mode
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
