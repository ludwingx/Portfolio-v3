'use client'
import { createContext, useEffect, useState } from "react";
import { CssBaseline, Theme, ThemeProvider, useMediaQuery } from "@mui/material";
import { AppDarkTheme, AppLightTheme } from "./theme";
import { IThemeContext, IThemeMode } from "./types";

export const ThemeContext = createContext<IThemeContext | null>(null) ;

export const ThemeContexProvider: React.FunctionComponent<
  React.PropsWithChildren
>=({ children }) =>{
  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.LIGHT);
  const [theme, setTheme] = useState<Theme>(AppLightTheme);
  const SYSTEM_THEME:Exclude<IThemeMode, IThemeMode.SYSTEM> = useMediaQuery('(prefers-color-scheme: dark)') ? IThemeMode.DARK : IThemeMode.LIGHT;
  useEffect(() => {
    const themeModeFromPref = _getThemeModeFromPref();
    setThemeMode(themeModeFromPref)
  })
  useEffect(() => {
    switch(themeMode) {
      case IThemeMode.LIGHT:
        setTheme(AppLightTheme);
        break
      case IThemeMode.DARK:
        setTheme(AppDarkTheme);
        break
      case IThemeMode.SYSTEM:
        switch(SYSTEM_THEME) {
          case IThemeMode.LIGHT:
            setTheme(AppLightTheme);
            break
          case IThemeMode.DARK:
            setTheme(AppDarkTheme);
            break
          default:
            setTheme(AppLightTheme);
            break
        }
    }
  }, [themeMode, SYSTEM_THEME]);
  const _getThemeModeFromPref = (): IThemeMode  => {
    const themeModeFromPref = localStorage.getItem('themeMode') as IThemeMode ;
    if(themeModeFromPref) {
      return themeModeFromPref;
    }
    return IThemeMode.LIGHT;
  }
  const _setThemeModeToPref = (mode: IThemeMode) => {
    localStorage.setItem('themeMode', mode);
  }

  const switchThemeMode = (mode: IThemeMode) => {
    setThemeMode(mode);
    _setThemeModeToPref(mode);
  };

  return (
    <ThemeContext.Provider value={{
      themeMode,
      switchThemeMode,
    }}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        {children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}