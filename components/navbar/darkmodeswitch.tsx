import React from 'react';
import {useTheme as useNextTheme} from 'next-themes';
import {Switch, useTheme} from '@nextui-org/react';
import { SunIcon } from '../icons/navbar/sun-icon';
import { MoonIcon } from '../icons/navbar/moon-icon';

export const DarkModeSwitch = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   return (
      <Switch
         checked={isDark}
         onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
         iconOff={<SunIcon />}
         iconOn={<MoonIcon />}
      />
   );
};
