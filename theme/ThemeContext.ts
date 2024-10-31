import { createContext, useState } from 'react';
import { Switch } from '@headlessui/react';
import { TThemeContext } from 'lib/types';

export const DEFAULT_STATE = {
    dark: true
}

export const ThemeContext = createContext<TThemeContext>(DEFAULT_STATE);