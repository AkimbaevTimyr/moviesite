import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom';

interface AuthItemProps {
    handleClick: (email: string, password: string) => void;
    path: string;
    buttonName: string;
    p: string;
    linkText: string;
    header: string;
}

const AuthItem: FC<AuthItemProps> = ({handleClick, path, buttonName, p, linkText, header}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">{header}</h1>
    </div>
    <form className="max-w-md mx-auto mt-8 mb-0 space-y-4">
      <div>
        <label  className="sr-only">Email</label>
        <div className="relative">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter email"
          />
          <span className="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <label  className="sr-only">Password</label>
        <div className="relative">
          <input
            onChange={(e)=> setPassword(e.target.value)}
            type="password"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter password"
          />
          <span className="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {p}
          <Link to={path} className="underline" >{linkText}</Link>
        </p>
        <button
          onClick={() => handleClick(email, password)}
          type="button"
          className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
        >
          {buttonName}
        </button>
      </div>
    </form>
  </div>
  )
}

export default AuthItem