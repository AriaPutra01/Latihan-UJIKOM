import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { loginUser } from "@/store/thunks/authThunk";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (field) => {
    setLoading(true);
    dispatch(
      loginUser({
        field,
        onSuccess: (res) => {
          toast.success(res.message || "Login success");
          navigate("/home");
        },
        onError: (error) => {
          toast.error(error?.message || "Login failed");
        },
      })
    ).finally(() => setLoading(false));
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6 p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-white">Login</h2>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="w-full mt-1 p-3 text-white  rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            className="w-full mt-1 p-3 text-white  rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <hr className="w-1/4 border-gray-500" />
          <span>or</span>
          <hr className="w-1/4 border-gray-500" />
        </div>

        {/* Register Link */}
        <p className="text-center text-white">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
