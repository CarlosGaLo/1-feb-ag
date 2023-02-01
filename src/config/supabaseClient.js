import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kngzpwhrdcrnzyssiptp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuZ3pwd2hyZGNybnp5c3NpcHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4OTU0NjgsImV4cCI6MTk4OTQ3MTQ2OH0.t_oHcc3-FgFxCwurggvJFQyZfE1yooSSZQO4rmrdO_A";
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;