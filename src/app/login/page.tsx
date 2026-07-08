import { login } from '@/app/auth/actions'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function LoginPage({ searchParams }: { searchParams: { message: string } }) {
  // Check if user is already logged in
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (user) {
    redirect('/dashboard')
  }

  return (
    <div 
      className="flex-grow flex items-center justify-center relative overflow-hidden min-h-[calc(100vh-97px)]"
      style={{
        backgroundImage: 'url("/images/Scarlet Star Broadcasting.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0 backdrop-blur-sm"></div>
      
      {/* Background Font Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none overflow-hidden">
        <span className="font-serif text-[15vw] leading-none whitespace-nowrap text-white font-black tracking-tighter">
          LOADING THE STATION...
        </span>
      </div>

      <div className="relative z-10 w-full max-w-md px-6 py-12 bg-black/60 backdrop-blur-md border border-scarlet/30 rounded-2xl shadow-[0_0_40px_rgba(193,18,31,0.3)]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-white mb-2 uppercase tracking-widest">
            Enter Station
          </h2>
          <p className="text-gray-400 font-sans text-sm tracking-wide">
            Login to your Scarlet Star account
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 font-sans text-xs uppercase tracking-widest font-semibold ml-1">
              Username or Email
            </label>
            <input 
              name="identifier"
              type="text" 
              required
              className="w-full bg-black/50 border border-scarlet/30 p-4 rounded-lg text-white font-sans focus:border-scarlet focus:ring-1 focus:ring-scarlet outline-none transition-all placeholder-gray-600"
              placeholder="Your username..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 font-sans text-xs uppercase tracking-widest font-semibold ml-1">
              Password
            </label>
            <input 
              name="password"
              type="password" 
              required
              className="w-full bg-black/50 border border-scarlet/30 p-4 rounded-lg text-white font-sans focus:border-scarlet focus:ring-1 focus:ring-scarlet outline-none transition-all placeholder-gray-600"
              placeholder="••••••••"
            />
          </div>

          {searchParams?.message && (
            <div className="p-3 bg-red-900/30 border border-red-500/50 rounded text-red-200 text-sm text-center">
              {searchParams.message}
            </div>
          )}

          <button 
            formAction={login}
            className="w-full mt-4 py-4 bg-scarlet hover:bg-red-800 text-white font-bold rounded-lg transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(193,18,31,0.4)] hover:shadow-[0_0_25px_rgba(193,18,31,0.6)]"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm font-sans">
            Don't have an account?{' '}
            <a href="/signup" className="text-scarlet hover:text-white transition-colors font-semibold">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
