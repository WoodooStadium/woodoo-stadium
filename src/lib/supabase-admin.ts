import { createClient } from "@supabase/supabase-js";
import type { Database } from "./supabase-types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be defined.");
}

export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceRoleKey);
