import { useState } from "react"
import Modal from "react-modal"
import { Header } from "./components/Header/Header"
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal"
import { Dashboard } from "./components/Dashboard/Dashboard"

import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root')

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}  
      />
      <Dashboard />
      <GlobalStyle/>
    </>
  )
}
