import React, { useState } from 'react';
import { UserAccount } from '../types';
import { setCurrentUser } from '../utils/orderStorage';
import { VeyraconLogo } from './VeyraconLogo';
import { X, Lock, Mail, User, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserAccount) => void;
  initialMode?: 'login' | 'signup' | 'admin';
}

// Secret Owner Passcode strictly for the website owner
// Only someone who knows this secret code will be permitted to access the Owner Dashboard
const OWNER_SECURITY_CODE = 'VEYRA-7788-OWNER';
const OWNER_EMAIL = 'veyraconwebstudio@gmail.com';

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'admin'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ownerSecurityCode, setOwnerSecurityCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'admin') {
      // Owner / Admin authentication requires BOTH the owner email AND the secret owner security code
      const enteredEmail = email.toLowerCase().trim();
      const enteredCode = ownerSecurityCode.trim();

      if (enteredEmail !== OWNER_EMAIL) {
        setError('Unauthorized email. Only the studio owner email can access this portal.');
        return;
      }

      if (enteredCode !== OWNER_SECURITY_CODE) {
        setError('Incorrect Owner Security Code. Access denied.');
        return;
      }

      const adminUser: UserAccount = {
        id: 'admin-veyracon',
        fullName: 'Studio Owner',
        email: OWNER_EMAIL,
        role: 'admin',
        createdAt: new Date().toISOString(),
      };
      setCurrentUser(adminUser);
      onLoginSuccess(adminUser);
      onClose();
      return;
    }

    if (mode === 'signup') {
      if (!fullName.trim() || !email.trim() || !password.trim()) {
        setError('Please fill in all fields.');
        return;
      }
      const newUser: UserAccount = {
        id: `user-${Date.now()}`,
        fullName: fullName.trim(),
        email: email.trim(),
        role: 'user',
        createdAt: new Date().toISOString(),
      };
      setCurrentUser(newUser);
      onLoginSuccess(newUser);
      onClose();
      return;
    }

    // Standard user login
    if (!email.trim() || !password.trim()) {
      setError('Please provide your email and password.');
      return;
    }

    // If an owner attempts to sign in via the user tab without the code, warn them
    if (email.toLowerCase().trim() === OWNER_EMAIL) {
      setMode('admin');
      setError('Owner accounts must authenticate with the Owner Security Code.');
      return;
    }

    const regularUser: UserAccount = {
      id: `user-${Date.now()}`,
      fullName: email.split('@')[0] || 'Client',
      email: email.trim(),
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    setCurrentUser(regularUser);
    onLoginSuccess(regularUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#111216] border border-[#232530] rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#A8A8AD] hover:text-white hover:bg-[#1F2128] transition-colors"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="flex justify-center mb-2">
            <VeyraconLogo size="sm" />
          </div>
          <h3 className="text-xl font-bold font-heading text-[#F5F4F0]">
            {mode === 'admin'
              ? 'Owner / Admin Portal'
              : mode === 'signup'
              ? 'Create Client Account'
              : 'Client Sign In'}
          </h3>
          <p className="text-xs text-[#A8A8AD]">
            {mode === 'admin'
              ? 'Log in to manage incoming orders and client requests.'
              : mode === 'signup'
              ? 'Create an account to track your website orders and briefs.'
              : 'Sign in to review your current website orders and progress.'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-[#0B0B0D] rounded-xl border border-[#1E2028] mb-6 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError('');
            }}
            className={`py-2 rounded-lg transition-colors cursor-pointer ${
              mode === 'login'
                ? 'bg-[#1E202A] text-[#F5F4F0] shadow-sm'
                : 'text-[#8E909D] hover:text-[#F5F4F0]'
            }`}
          >
            User Login
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setError('');
            }}
            className={`py-2 rounded-lg transition-colors cursor-pointer ${
              mode === 'signup'
                ? 'bg-[#1E202A] text-[#F5F4F0] shadow-sm'
                : 'text-[#8E909D] hover:text-[#F5F4F0]'
            }`}
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('admin');
              setError('');
            }}
            className={`py-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              mode === 'admin'
                ? 'bg-[#C8A96B] text-[#0B0B0D] shadow-sm'
                : 'text-[#E2C27D] hover:text-[#F5F4F0]'
            }`}
          >
            <Shield className="w-3 h-3" />
            Owner
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-950/50 border border-red-800/60 text-xs text-red-200">
              {error}
            </div>
          )}

          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#F5F4F0] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C8A96B]" />
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alexander Vance"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-2.5 text-sm text-[#F5F4F0] placeholder-[#555763] focus:outline-none"
              />
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#F5F4F0] flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C8A96B]" />
              {mode === 'admin' ? 'Owner Email Address' : 'Email Address'}
            </label>
            <input
              type="email"
              required
              placeholder={mode === 'admin' ? 'veyraconwebstudio@gmail.com' : 'you@example.com'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-2.5 text-sm text-[#F5F4F0] placeholder-[#555763] focus:outline-none"
            />
          </div>

          {mode === 'admin' ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#E2C27D] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C8A96B]" />
                  Confidential Owner Security Code
                </label>
              </div>
              <input
                type="password"
                required
                placeholder="Enter secret owner access code"
                value={ownerSecurityCode}
                onChange={(e) => setOwnerSecurityCode(e.target.value)}
                className="w-full bg-[#16171E] border border-[#C8A96B]/50 focus:border-[#C8A96B] rounded-xl px-4 py-2.5 text-sm text-[#F5F4F0] placeholder-[#666877] focus:outline-none tracking-wider"
              />
              <p className="text-[11px] text-[#8E909D]">
                Restricted access: Only the official studio owner holding the designated security code can unlock this panel.
              </p>
            </div>
          ) : (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#F5F4F0] flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#C8A96B]" />
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-2.5 text-sm text-[#F5F4F0] placeholder-[#555763] focus:outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            {mode === 'admin' ? 'Verify Code & Enter Dashboard' : mode === 'signup' ? 'Create Account' : 'Sign In'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default AuthModal;
