import { IoIosClose } from "react-icons/io";

const Main = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div>
        {isModalOpen && 
          <div className="absolute w-[520px] bg-white top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-roboto py-4 px-4 rounded-xl shadow-lg">
            <div className="relative">
                <h2 className="text-2xl font-medium mb-4">Create Post</h2>
                <div className="absolute -right-5 -top-5">
                    <IoIosClose size={70} className="cursor-pointer" onClick={() => setIsModalOpen(false)}/>
                </div>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="block mb-1">Blog Title</label>
                    <input type="text" id="title" placeholder="Blog Title" autoComplete="off" className="border border-slate-300 py-2 px-4 w-full rounded-lg focus:outline-none focus:border-indigo-800 transition-colors duration-150 ease-linear cursor-pointer"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="block mb-1">Image URL</label>
                    <input type="text" id="image" placeholder="Image URL" autoComplete="off" className="border border-slate-300 py-2 px-4 w-full rounded-lg focus:outline-none focus:border-indigo-800 transition-colors duration-150 ease-linear cursor-pointer"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="block mb-1">Description</label>
                    <textarea className="text-lg leading-5 resize-none w-full px-4 cursor-pointer rounded-lg border border-slate-300 py-2" id="description" placeholder="Description" rows="5"></textarea>
                </div>
                <button className="bg-indigo-800 w-full py-3 text-white text-lg rounded-lg">Create Post</button>
            </form>
          </div>
        }
    </div>
  )
}

export default Main