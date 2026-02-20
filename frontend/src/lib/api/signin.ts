import { supabase } from "../supabase";

export const signin = async () => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://hire-me-sigma.vercel.app/auth/callback",
      },
    });
  } catch (error) {
    console.error(error);
  }
};
