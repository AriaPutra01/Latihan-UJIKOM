import React from "react";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 p-8 rounded-2xl">
        <h2 className="text-center text-2xl font-semibold text-white">Login</h2>

        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            defaultValue="ariasaptr134@gmail.com"
            className="w-full mt-1 p-3 text-white rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            defaultValue="••••••••••••••"
            className="w-full mt-1 p-3 text-white rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button className="w-full p-3 bg-primary text-white rounded-lg hover:bg-primary transition">
          Login
        </button>

        <div className="flex items-center justify-center gap-2 text-gray-500">
          <hr className="w-1/4 border-white" />
          <span>or</span>
          <hr className="w-1/4 border-white" />
        </div>

        <p className="text-center text-white">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
