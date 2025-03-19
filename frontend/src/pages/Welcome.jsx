import React from "react";
import { Link } from "react-router";

export default function Welcome() {
  return (
    <div className="bg-background min-h-screen w-full flex justify-center items-center">
      <section className="text-white text-center grid grid-cols-1 place-items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Todo List</h1>
        <p className="max-w-[50%] text-md mb-8">
          Please login to your account or create new account to continue
        </p>
        <div className="w-full flex gap-4">
          <Link className="w-full" to={"/login"}>
            <button className="w-full cursor-pointer bg-primary py-2 px-4 rounded-[8px]">
              LOGIN
            </button>
          </Link>
          <Link className="w-full" to={"/register"}>
            <button className="w-full cursor-pointer bg-transparent border border-primary py-2 px-4 rounded-[8px]">
              CREATE ACCOUNT
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
