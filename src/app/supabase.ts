import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
const supabase = createClient<Database>(
  supabaseUrl, supabaseKey,
  {
    db: {
      schema: "public",
    },
    auth: {
      // storage: AsyncStorage,
      // autoRefreshToken: true,
      persistSession: false,
      // detectSessionInUrl: true,
    }
  });

export default supabase;    