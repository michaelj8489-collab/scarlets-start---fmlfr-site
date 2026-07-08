import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '@/app/auth/actions'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const username = user.user_metadata?.username || user.email?.split('@')[0] || 'User'

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
      <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-4xl px-6 py-12 bg-black/50 backdrop-blur-md border border-scarlet/30 rounded-2xl shadow-[0_0_40px_rgba(193,18,31,0.2)]">
        <div className="flex justify-between items-center mb-10 border-b border-scarlet/20 pb-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2 tracking-widest uppercase">
              Welcome, <span className="text-scarlet">{username}</span>
            </h1>
            <p className="text-gray-400 font-sans tracking-wide">
              Your Scarlet Star Dashboard
            </p>
          </div>
          
          <form action={logout}>
            <button className="px-6 py-2 bg-transparent border border-scarlet text-scarlet hover:bg-scarlet/10 font-bold rounded transition-all uppercase tracking-widest text-xs">
              Log Out
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/60 border border-scarlet/20 p-6 rounded-xl hover:border-scarlet/50 transition-colors">
            <h3 className="text-xl font-serif text-white mb-3 uppercase tracking-wider">Your Broadcasts</h3>
            <p className="text-gray-400 font-sans text-sm mb-4">Manage your streams, recordings, and audience analytics.</p>
            <button className="text-scarlet text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Enter Studio →</button>
          </div>

          <div className="bg-black/60 border border-scarlet/20 p-6 rounded-xl hover:border-scarlet/50 transition-colors">
            <h3 className="text-xl font-serif text-white mb-3 uppercase tracking-wider">Account Settings</h3>
            <p className="text-gray-400 font-sans text-sm mb-4">Update your profile, change your password, or manage subscriptions.</p>
            <button className="text-scarlet text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Manage →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
