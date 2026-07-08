import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import StarMakerScraper from '@/components/StarMakerScraper'
import { logout } from '@/app/auth/actions'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // The middleware also checks this, but we can do a double check or display specific admin info
  const role = user.user_metadata?.role
  if (role !== 'admin') {
    // If somehow they bypassed middleware or it's not working
    redirect('/dashboard')
  }

  return (
    <div 
      className="flex-grow flex flex-col relative overflow-hidden min-h-[calc(100vh-97px)]"
      style={{
        backgroundImage: 'url("/images/Scarlet Star Broadcasting.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/80 z-0 backdrop-blur-md"></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-10 border-b border-scarlet/20 pb-6 bg-black/40 p-6 rounded-t-2xl">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2 tracking-widest uppercase">
              Admin <span className="text-scarlet">Dashboard</span>
            </h1>
            <p className="text-gray-400 font-sans tracking-wide">
              Scarlet Star Administrative Controls
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="/dashboard" className="px-6 py-2 bg-transparent text-gray-300 hover:text-white font-bold rounded transition-all uppercase tracking-widest text-xs flex items-center">
              User Dashboard
            </a>
            <form action={logout}>
              <button className="px-6 py-2 bg-transparent border border-scarlet text-scarlet hover:bg-scarlet/10 font-bold rounded transition-all uppercase tracking-widest text-xs">
                Log Out
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-black/60 border border-scarlet/30 p-8 rounded-2xl shadow-[0_0_30px_rgba(193,18,31,0.1)]">
              <StarMakerScraper />
            </div>
            
            <div className="bg-black/60 border border-gray-800 p-8 rounded-2xl">
              <h2 className="text-xl font-serif text-white mb-4 uppercase tracking-wider">User Management</h2>
              <p className="text-gray-400 font-sans text-sm mb-6">Manage users, roles, and access permissions.</p>
              <div className="text-center p-8 border border-dashed border-gray-700 rounded-lg text-gray-500">
                User management module under construction.
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-black/60 border border-gray-800 p-6 rounded-2xl">
              <h2 className="text-lg font-serif text-white mb-4 uppercase tracking-wider border-b border-gray-800 pb-2">System Status</h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 font-sans">Database</span>
                  <span className="text-xs text-green-500 font-bold tracking-widest uppercase bg-green-900/20 px-2 py-1 rounded">Online</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 font-sans">Storage</span>
                  <span className="text-xs text-green-500 font-bold tracking-widest uppercase bg-green-900/20 px-2 py-1 rounded">Online</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 font-sans">Auth Services</span>
                  <span className="text-xs text-green-500 font-bold tracking-widest uppercase bg-green-900/20 px-2 py-1 rounded">Online</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/60 border border-gray-800 p-6 rounded-2xl">
              <h2 className="text-lg font-serif text-white mb-4 uppercase tracking-wider border-b border-gray-800 pb-2">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-900/50 rounded-lg text-center border border-gray-800">
                  <div className="text-2xl font-bold text-white mb-1">2,481</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Users</div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg text-center border border-gray-800">
                  <div className="text-2xl font-bold text-scarlet mb-1">14</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
