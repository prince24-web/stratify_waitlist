"use client";

import { useState } from "react";
import { Brain, Eye, EyeOff, Loader2 } from "lucide-react";
import APIService from "@/services/api"; // ✅ adjust path based on your folder structure
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            if (isLogin) {
                // 🔑 Login
                const res = await APIService.auth.login(email, password);
                localStorage.setItem("token", res.session.access_token); // store token

                router.push("/userDash"); // ✅ redirect after login
            } else {
                // 🆕 Register
                if (password !== confirmPassword) {
                    throw new Error("Passwords do not match");
                }
                const res = await APIService.auth.register(
                    email,
                    password,
                    fullName
                );
                setIsLogin(true);
            }
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black flex items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto">
                {/* Branding */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Brain className="w-10 h-10 text-blue-500" />
                    </div>
                </div>

                {/* Glass Card */}
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {isLogin ? "Welcome back" : "Create your account"}
                        </h2>
                        <p className="text-slate-400">
                            {isLogin
                                ? "Sign in to continue your journey"
                                : "Join thousands of learners today"}
                        </p>
                    </div>

                    {/* Toggle */}
                    <div className="flex bg-white/10 backdrop-blur-md rounded-lg p-1 mb-6">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                                isLogin
                                    ? "bg-blue-500 text-white shadow-md"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                                !isLogin
                                    ? "bg-blue-500 text-white shadow-md"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name (Sign Up only) */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-lg bg-black/30 text-white border border-white/20 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        )}

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-black/30 text-white border border-white/20 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 pr-12 rounded-lg bg-black/30 text-white border border-white/20 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password (Sign Up only) */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        placeholder="Confirm your password"
                                        className="w-full px-4 py-3 pr-12 rounded-lg bg-black/30 text-white border border-white/20 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Error message */}
                        {error && (
                            <p className="text-red-400 text-sm text-center">
                                {error}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    {isLogin
                                        ? "Signing In..."
                                        : "Creating Account..."}
                                </>
                            ) : isLogin ? (
                                "Sign In"
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
