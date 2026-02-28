import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-800 p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12">
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Notes Dashboard
          </h1>
          <p className="text-xl opacity-90 max-w-md mx-auto">
            Create and manage your notes here.
          </p>
        </div>
      </header>

      {/* Main Buttons - Centered */}
      <main className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center mb-20">
        <button className="group bg-white/20 backdrop-blur-xl hover:bg-white/30 border-2 border-white/40 hover:border-white/60 shadow-2xl hover:shadow-3xl rounded-3xl px-12 py-8 text-2xl font-bold text-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 flex items-center gap-4 w-full lg:w-auto min-h-[140px]">
          Create Note
        </button>
        <button className="group bg-white/20 backdrop-blur-xl hover:bg-white/30 border-2 border-white/40 hover:border-white/60 shadow-2xl hover:shadow-3xl rounded-3xl px-12 py-8 text-2xl font-bold text-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 flex items-center gap-4 w-full lg:w-auto min-h-[140px]">
          View Notes
        </button>
      </main>
    </div>
  );
}