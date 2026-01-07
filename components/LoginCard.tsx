
import React, { useState, useEffect, useCallback } from 'react';
import { generateGreeting } from '../services/geminiService';

const LoginCard: React.FC = () => {
  const [username, setUsername] = useState('');
  const [greeting, setGreeting] = useState('Welcome');
  const [isLoading, setIsLoading] = useState(false);

  // Throttled greeting generation
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (username.trim()) {
        setIsLoading(true);
        const newGreeting = await generateGreeting(username);
        setGreeting(newGreeting);
        setIsLoading(false);
      } else {
        setGreeting('Welcome');
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [username]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 transition-all duration-500 hover:shadow-indigo-500/10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 transition-opacity duration-300">
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <i className="fa-solid fa-circle-notch animate-spin text-indigo-500 text-sm"></i>
              Thinking...
            </span>
          ) : (
            greeting
          )}
        </h1>
        <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Secure Access</p>
      </div>

      <div className="space-y-6">
        <div className="relative group">
          <label 
            htmlFor="username" 
            className="block text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-indigo-500"
          >
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 transition-colors group-focus-within:text-indigo-500">
              <i className="fa-solid fa-user-astronaut"></i>
            </div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={handleInputChange}
              className="block w-full pl-11 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-lg"
              placeholder="e.g. SatoshiNakamoto"
              autoComplete="off"
            />
          </div>
          <div className="mt-2 h-1 w-0 bg-indigo-500 transition-all duration-500 group-focus-within:w-full rounded-full opacity-50"></div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-slate-400 pt-4">
        <span>Premium Interface</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>System Online</span>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
