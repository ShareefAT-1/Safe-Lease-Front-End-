import React from 'react'

const Login = () => {
  return (
    <div className="max-w-md mx-auto py-20">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Login to SafeLease</h1>
      <form className="space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;
