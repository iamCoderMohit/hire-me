"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import api from "@/lib/axios";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const handleLogin = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        await api.get("/auth/sync-user");
        router.push("/dashboard");
      }
    };

    handleLogin();
  }, []);

  return <p className="text-white">Signing you in...</p>;
}
