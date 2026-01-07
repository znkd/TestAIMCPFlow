
import React from 'react';
import LoginCard from './components/LoginCard';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-slate-100 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Decorative Brand Logo */}
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
          <i className="fa-solid fa-bolt-lightning text-white"></i>
        </div>
        <span className="font-bold text-slate-800 text-xl tracking-tight">Luminal.</span>
      </div>

      <main className="relative z-10">
        <LoginCard />
      </main>

      {/* Footer Info */}
      <footer className="absolute bottom-8 left-0 right-0 text-center text-slate-400 text-xs font-medium tracking-widest uppercase">
        &copy; 2024 Luminal Design Labs &bull; Powered by Gemini
      </footer>
    </div>
  );
};

export default App;
