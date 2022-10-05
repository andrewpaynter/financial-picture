import React, { useState, createContext } from 'react'

export const MobileMenuContext = createContext()

export const MobileMenuProvider = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenu = () => {
    setMenuIsOpen(true)
  }
  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  return (
    <MobileMenuContext.Provider
      value={{
        menuIsOpen,
        openMenu,
        closeMenu
      }}
    >
      {props.children}
    </MobileMenuContext.Provider>
  )
}
