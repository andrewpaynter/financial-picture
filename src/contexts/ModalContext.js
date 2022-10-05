import React, { useState, createContext } from 'react'

export const ModalContext = createContext()

export const ModalProvider = (props) => {
  const [modalContent, setModalContent] = useState(<></>)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const setModal = (content) => {
    setModalContent(content)
  }
  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ modalContent, modalIsOpen, setModal, openModal, closeModal }}>
      {props.children}
    </ModalContext.Provider>
  )
}
