import { useState } from "react"

const Header = ({ isModalOpen, setIsModalOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative w-full bg-white flex h-[100px] items-center justify-around font-roboto border-b border-b-slate-200">
      <div className="flex items-center">
        <h1 className="text-3xl font-medium mr-5">Blog Application</h1>
        <h2 className="text-xl">Liked Posts</h2>
      </div>
      <div className="flex items-center gap-10">
        <button onClick={toggleModal} className="bg-indigo-700 px-4 py-2 rounded-lg text-white text-lg">Create Post</button>
        <div className="flex flex-col items-center">
          <img onClick={toggleMenu} className="w-12 h-12 rounded-full relative cursor-pointer" src="https://lh3.googleusercontent.com/ogw/ANLem4Y6ovUdlMtzRnZD8F2GjNTUWIiAJB84-C3UauUn=s32-c-mo" alt="" />
          {isMenuOpen && 
            <div className="absolute top-16 z-10 bg-white shadow-md px-2 py-2 hover:bg-[#FBFBFB] cursor-pointer">
              <p className="text-center text-md">Sign Out</p>
            </div>
          }
          <h4 className="text-md">Name</h4>
        </div>
      </div>
    </div>
  )
}

export default Header