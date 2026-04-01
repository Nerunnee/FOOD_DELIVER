"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/services/auth/sign-up";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const credentials = {
      email,
      password,
    };

    await signUp(credentials);
  };
  return (
    <div className="mt-1/2 flex flex-col gap-6">
      <Link href="/">
        <div className="w-9 h-9 border border-gray-300 flex justify-center items-center rounded-sm">
          <ChevronLeft size={14} />
        </div>
      </Link>

      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Create your account</p>
        <p className="text-gray-500">
          Sign up to explore your favorite dishes.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-104"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <Link href="/">
        <Button onClick={onSubmit} className="w-104">
          Sign Up
        </Button>
      </Link>

      <Link href="/">
        <p className="text-gray-500 flex gap-3 justify-center">
          Already have an account? <span className="text-blue-500">Log in</span>
        </p>
      </Link>
    </div>
  );
}
