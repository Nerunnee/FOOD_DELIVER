"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/services/auth/sign-in";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const credentials = {
      email,
      password,
    };

    try {
      const data = await signIn(credentials);

      if (data) {
        router.push("/menu");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-1/2 flex flex-col gap-6">
      <Link href="/auth/signUp">
        <div className="w-9 h-9 border border-gray-300 flex justify-center items-center rounded-sm">
          <ChevronLeft size={14} />
        </div>
      </Link>

      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Log in</p>
        <p className="text-gray-500">Log in to enjoy your favorite dishes.</p>
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

      <Button onClick={onSubmit} className="w-104">
        Sign In
      </Button>

      <Link href="/auth/signUp">
        <p className="text-gray-500 flex gap-3 justify-center">
          Don’t have an account? <span className="text-blue-500">Sign up</span>
        </p>
      </Link>
    </div>
  );
}
