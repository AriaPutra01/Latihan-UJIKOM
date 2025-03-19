import React from "react";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 p-8 rounded-2xl">
        <h2 className="text-center text-2xl font-semibold text-white">
          Register
        </h2>

        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 p-3 text-white rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 p-3 text-white rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full mt-1 p-3 text-white rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button className="w-full p-3 bg-primary text-white rounded-lg hover:bg-primary transition">
          Register
        </button>

        <div className="flex items-center justify-center gap-2 text-primary">
          <hr className="w-1/4 border-white" />
          <span>or</span>
          <hr className="w-1/4 border-white" />
        </div>

        <p className="text-center text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
