export default function Home() {
  return (
    <div 
      className="flex-grow flex items-center justify-center relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: 'url("/images/Scarlet Star Broadcasting.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-16 bg-black/40 backdrop-blur-sm border border-red-700/20 rounded-3xl shadow-[0_0_50px_rgba(193,18,31,0.2)]">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wider uppercase">
          Welcome to <span className="text-red-600">Scarlet Star</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
          The premiere destination for high-quality broadcasting and interactive entertainment.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/login" 
            className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition-all duration-300 uppercase tracking-widest text-lg shadow-[0_0_20px_rgba(193,18,31,0.5)] hover:shadow-[0_0_30px_rgba(193,18,31,0.8)] hover:-translate-y-1"
          >
            Enter Station
          </a>
          <a 
            href="/signup" 
            className="px-8 py-4 bg-transparent border-2 border-red-700 text-red-600 hover:bg-red-900/20 font-bold rounded-lg transition-all duration-300 uppercase tracking-widest text-lg"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
