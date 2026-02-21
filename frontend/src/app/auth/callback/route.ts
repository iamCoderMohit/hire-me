import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import api from "@/lib/axios";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/signin`);
  }

  const response = NextResponse.redirect(`${origin}/dashboard`);
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          response.cookies.set({ name, value, ...options });
        },
        remove(name, options) {
          response.cookies.set({ name, value: "", ...options });
        },
      },
    },
  );

  await supabase.auth.exchangeCodeForSession(code);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    await fetch("https://your-backend.onrender.com/auth/sync-user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
  }

  return response;
}
