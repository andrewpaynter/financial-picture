import React, { useRef, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from '../../../contexts/ModalContext'

const Modal = () => {
  const { modalContent, modalIsOpen, closeModal } = useContext(ModalContext)

  let menuRef = useRef()

  useEffect(() => {
    document.documentElement.style.overflow = modalIsOpen ? 'hidden' : 'visible'
  }, [modalIsOpen])

  const handleOutsideClick = (event) => {
    if (!menuRef.current.contains(event.target)) closeModal()
  }

  if (!modalIsOpen) return null

  return ReactDOM.createPortal(
    <div
      onMouseDown={(e) => handleOutsideClick(e)}
      className='fixed top-0 left-0 right-0 bottom-0 bg-white/75 z-20 '
    >
      <div
        ref={menuRef}
        className={` bg-slate-100 rounded-lg
        h-screen w-screen md:h-fit md:w-fit
        md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
       p-16 z-20 flex flex-col items-center`}
      >
        <div className='hover:cursor-pointer md:hidden place-self-end pb-24 md:pb-0'>
          <i onClick={closeModal} class='fa-solid fa-x text-xl '></i>
        </div>
        {modalContent}
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
