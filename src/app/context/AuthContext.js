'use client';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signInAnonymously, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [guestLoading, setGuestLoading] = useState(false); // Guest login loading
  const [isLoginOpen, setIsLoginOpen] = useState(false); // ✅ State for login animation
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      console.error('Firebase auth not initialized');
      return;
    }
    console.log('Setting up auth listener');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user ? `User logged in: ${user.uid}` : 'No user');
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginAsGuest = async () => {
    if (!auth) {
      alert('Authentication service not available');
      return;
    }
    
    setGuestLoading(true);
    try {
      const userCredential = await signInAnonymously(auth);
      console.log('Guest login successful:', userCredential.user.uid);
      // Navigation will happen automatically via onAuthStateChanged
      setTimeout(() => {
        router.push('/dashboard');
      }, 100);
    } catch (error) {
      console.error("Guest login failed:", error.message);
      alert(`Login failed: ${error.message}`);
    } finally {
      setGuestLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, guestLoading, loginAsGuest, logout, isLoginOpen, setIsLoginOpen }}>
      {children}
    </AuthContext.Provider>
  );
}
