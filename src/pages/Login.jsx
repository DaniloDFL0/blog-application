import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="w-[420px] bg-white font-roboto py-2 px-4 rounded-xl">
            <h2 className="text-2xl font-medium mb-4">Log In</h2>
            <form className="w-full">
                <div className="mb-3">
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input type="text" id="email" placeholder="Email" required autoComplete="off" className="border border-slate-300 py-2 px-4 w-full rounded-lg focus:outline-none focus:border-indigo-800 transition-colors duration-150 ease-linear cursor-pointer"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input type="password" id="password" placeholder="Password" required  className="border border-slate-300 py-2 px-4 w-full rounded-lg focus:outline-none focus:border-indigo-800 transition-colors duration-150 ease-linear cursor-pointer"/>
                </div>
                <button className="bg-indigo-800 w-full py-2 text-white text-lg rounded-lg">Log In</button>
                <p className="mt-2 text-md">Don't have an account? <Link to="/register" className="text-indigo-700">Sign Up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login