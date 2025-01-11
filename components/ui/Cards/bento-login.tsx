'use client'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

interface BentoLoginProps {
  onSubmit?: (email: string, password: string) => void
  onGoogleSignIn?: () => void
  onSignUp?: () => void
  title?: string
  className?: string
}

export default function BentoLogin({
  onSubmit,
  onGoogleSignIn,
  onSignUp,
  title = "Bento Login",
  className = ""
}: BentoLoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(email, password)
  }

  return (
      <div className={`w-full max-w-md bg-[#1a1a1a] rounded-2xl p-8 space-y-6 ${className}`}>
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center">
            <FaStar className='size-6' />
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-white text-center">
          {title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="space-y-2">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white rounded-lg transition-colors duration-200"
          >
            Sign in
          </button>
        </form>

        <button
          onClick={onGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white rounded-lg transition-colors duration-200"
        >
          <FcGoogle className='size-5' />
          Sign in with Google
        </button>

        <div className="text-center text-sm">
          <span className="text-gray-400">Don&apos;t have an account? </span>
          <button
            onClick={onSignUp}
            className="text-white hover:underline"
          >
            Sign up, it&apos;s free!
          </button>
        </div>
      </div>
  )
}
