import type { FC } from 'react'
import { useContext } from 'react'
import ThemeContext from 'theme/ThemeContext'

const ThemeSwitch: FC = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

  return (
    <div className='px-2.5'>
      <button
        className={`p-2.5 rounded-lg ${currentTheme === 'light' ? 'bg-black' : 'bg-white'}`}
        onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
      >
        {currentTheme === 'light' ? '🌙': '🌞'}
      </button>
    </div>
  )
}

export default ThemeSwitch