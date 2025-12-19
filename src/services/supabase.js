import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vlbwkkwgchoxvjrnhojc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsYndra3dnY2hveHZqcm5ob2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNDEzMzUsImV4cCI6MjA3OTcxNzMzNX0.c1OiQIgQj43cG3n99I_0YaOtt_syICfH_e9Vkg7mowA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
