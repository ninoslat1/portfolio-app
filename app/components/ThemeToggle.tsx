import { Switch } from '@headlessui/react'
import type { FC } from 'react'
import { useContext } from 'react'
import ThemeContext from 'theme/ThemeContext'

const ThemeSwitch: FC = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

  return (
    <div className='px-2.5 flex gap-5'>
      <span>🌙</span>
      <Switch 
        checked={currentTheme === "light"} 
        onChange={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
      >
        {({ checked }) => (
          <div
            className={`
              group inline-flex h-6 w-11 items-center rounded-full
              ${checked ? 'bg-slate-900' : 'bg-blue'}
            `}
          >
            <div
              className={`size-4 rounded-full bg-white transition ${checked ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </div>
        )}
      </Switch>
      <span>🌞</span>
    </div>
  )
}

export default ThemeSwitch