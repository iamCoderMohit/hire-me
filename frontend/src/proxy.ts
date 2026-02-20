import { createServerClient } from "@supabase/ssr"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function proxy(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
        set(name, value, options) {
          response.cookies.set({ name, value, ...options })
        },
        remove(name, options) {
          response.cookies.set({ name, value: "", ...options })
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log(user)

  // If no user and trying to access dashboard
  if (!user && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/signin", request.url))
  }
  if (!user && request.nextUrl.pathname.startsWith("/jobs")) {
    return NextResponse.redirect(new URL("/signin", request.url))
  }
  if (!user && request.nextUrl.pathname.startsWith("/github")) {
    return NextResponse.redirect(new URL("/signin", request.url))
  }

  return response
}

export const config = {
  matcher: ["/dashboard/:path*", "/jobs/:path*"],
}