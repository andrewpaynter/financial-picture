import React, { useState, createContext, useContext } from 'react'
import { AppContext } from './AppContext'

export const ModalContext = createContext()

export const ModalProvider = (props) => {
  const [modalContent, setModalContent] = useState(<></>)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { dispatch } = useContext(AppContext)

  const setModal = (content) => {
    setModalContent(content)
  }
  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
    dispatch({ type: 'CLEAR_FAIL_MESSAGE' })
  }

  return (
    <ModalContext.Provider value={{ modalContent, modalIsOpen, setModal, openModal, closeModal }}>
      {props.children}
    </ModalContext.Provider>
  )
}
