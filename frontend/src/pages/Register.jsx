import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { registerUser } from "@/store/thunks/authThunk";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (field) => {
    dispatch(
      registerUser({
        field,
        onSuccess: (res) => {
          toast.success(res.message || "Register success");
          navigate("/login");
        },
        onError: (error) => {
          toast.error(error?.message || "Register failed");
        },
      })
    );
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
        className="w-full max-w-md space-y-2 p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-white">
          Register
        </h2>

        <div>
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter your name"
            className="w-full mt-1 p-3 text-white rounded-lg border border-white  focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.name && (
            <p className="text-[red] text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 p-3 text-white rounded-lg border border-white  focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && (
            <p className="text-[red] text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 p-3 text-white rounded-lg border border-white  focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.password && (
            <p className="text-[red] text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm your password"
            className="w-full mt-1 p-3 text-white rounded-lg border border-white  focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.confirmPassword && (
            <p className="text-[red] text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button className="w-full p-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
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
      </form>
    </div>
  );
}
