"use client";

import { useAuth } from '@/app/context/AuthContext';

export default function Dashboard() {
    const { user, loginAsGuest, guestLoading } = useAuth();

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8">
                <div className="max-w-md mx-auto text-center bg-white/10 backdrop-blur-md rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Please sign in to access your dashboard
                    </p>
                    <button
                        onClick={loginAsGuest}
                        disabled={guestLoading}
                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        {guestLoading ? '🔄 Signing in...' : 'Continue as Guest'}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Welcome back{user.email ? `, ${user.email.split('@')[0]}` : ''}! 
                        {user.isAnonymous && ' (Guest User)'}
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Total Expenses</h3>
                        <p className="text-3xl font-bold text-blue-500">$0.00</p>
                        <p className="text-sm text-gray-500 mt-1">Coming Soon</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Active Groups</h3>
                        <p className="text-3xl font-bold text-green-500">0</p>
                        <p className="text-sm text-gray-500 mt-1">Coming Soon</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Pending Settlements</h3>
                        <p className="text-3xl font-bold text-orange-500">$0.00</p>
                        <p className="text-sm text-gray-500 mt-1">Coming Soon</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-left px-4 py-3 rounded-lg transition-colors">
                                <div className="font-medium">Add New Expense</div>
                                <div className="text-sm text-gray-400">Track a new expense</div>
                            </button>
                            <button className="w-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-left px-4 py-3 rounded-lg transition-colors">
                                <div className="font-medium">Create Group</div>
                                <div className="text-sm text-gray-400">Start splitting with friends</div>
                            </button>
                            <button className="w-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-left px-4 py-3 rounded-lg transition-colors">
                                <div className="font-medium">Settle Up</div>
                                <div className="text-sm text-gray-400">Pay or request money</div>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                        <div className="text-center py-8">
                            <div className="text-4xl mb-3">📊</div>
                            <p className="text-gray-500">No activity yet</p>
                            <p className="text-sm text-gray-600 mt-2">
                                Your expense history will appear here
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature Preview */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-lg p-6 border border-blue-500/20">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-3">🚧 Coming Soon</h3>
                        <p className="text-gray-300 mb-4">
                            Full expense splitting functionality is currently in development
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Group Management</span>
                            <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">Real-time Splitting</span>
                            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Payment Integration</span>
                            <span className="px-3 py-1 bg-orange-500/20 rounded-full text-sm">Expense Analytics</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
