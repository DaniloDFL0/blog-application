import Header from "../components/Header"
import Main from "../components/Main"

import { useState } from "react"

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="">
        <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <Main isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  )
}

export default Home