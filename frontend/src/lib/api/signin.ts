import { supabase } from "../supabase";

export const signin = async () => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  } catch (error) {
    console.error(error);
  }
};
