'use client';
import { useAuth } from '@/app/context/AuthContext';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginAsGuest, isLoginOpen, guestLoading } = useAuth();
  const [loading, setLoading] = useState(false); // 🔥 Tracks Firebase loading state
  const [message, setMessage] = useState(''); // 🔥 Stores welcome message
  const [showMessage, setShowMessage] = useState(false); // 🔥 Controls message visibility

  // Handle Sign Up
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setMessage(`Welcome, ${user.email.split('@')[0]}!`); // 🔥 Set welcome message
      setShowMessage(true);
      setTimeout(() => (window.location.href = '/dashboard'), 2000); // 🔥 Redirect after 2s
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setMessage(`Welcome back, ${user.email.split('@')[0]}!`); // 🔥 Set welcome back message
      setShowMessage(true);
      setTimeout(() => (window.location.href = '/dashboard'), 2000); // 🔥 Redirect after 2s
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-8 py-20 bg-transparent">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to SplitExpense!</h1>
          <p className="text-xl">Effortlessly manage and split your expenses.</p>
        </div>

        {/* ✅ Animated Login Box - Animation is UNCHANGED */}
        <motion.div
          initial={{ scale: 1 }}
          animate={isLoginOpen ? { scale: 1.1 } : { scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="login-container p-8"
        >
          {/* 🔥 Show Success Message Instead of Form */}
          {showMessage ? (
            <h2 className="text-2xl font-semibold text-center">{message}</h2>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-center">Let&apos;s Get Started</h2>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading} // 🔥 Disable while loading
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading} // 🔥 Disable while loading
                />
                
                {/* 🔥 Show Loading or Buttons */}
                {loading ? (
                  <div className="text-center">
                    <span className="animate-spin text-blue-500">🔄</span>
                  </div>
                ) : (
                  <>
                    <button
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                      onClick={handleSignup}
                    >
                      Sign Up
                    </button>
                    <button
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
                      onClick={handleLogin}
                    >
                      Log In
                    </button>
                    <div className="text-center mt-4">
                      <button
                        className="w-full bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 rounded transition-colors"
                        onClick={loginAsGuest}
                        disabled={guestLoading || loading}
                      >
                        {guestLoading ? '🔄 Signing in...' : 'Use as Guest'}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
