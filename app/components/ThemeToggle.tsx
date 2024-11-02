import { Switch } from '@headlessui/react'
import type { FC } from 'react'
import { useContext } from 'react'
import ThemeContext from 'theme/ThemeContext'

const ThemeSwitch: FC = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

  return (
    // <div className='px-2.5'>
    //   <button
    //     className={`p-2.5 rounded-lg ${currentTheme === 'light' ? 'bg-black' : 'bg-white'}`}
    //     onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
    //   >
    //     {currentTheme === 'light' ? '🌙': '🌞'}
    //   </button>
    // </div>
    <div className='px-2.5 flex gap-5'>
      <span>🌙</span>
      <Switch checked={currentTheme === "light"} onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}>
      {() => (
        <button
          className={`
            group inline-flex h-6 w-11 items-center rounded-full
            ${currentTheme === "light" ? 'bg-blue-600' : 'bg-gray-200'}`}
        >
          <span
            className={`size-4 rounded-full bg-white transition', ${currentTheme === "light" ? 'translate-x-6' : 'translate-x-1'}`}
          />
        </button>
      )}
      </Switch>
      <span>🌞</span>
    </div>
  )
}

export default ThemeSwitch