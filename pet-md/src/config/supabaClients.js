import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   import.meta.env.VITE_SOURCE_SUPABASE_URL,
//   import.meta.env.VITE_API_KEY
// );

// export default supabase;



const supabaseUrl ='https://xobbmqtuxogbnqjxbzof.supabase.co'
const supabaseKey =import.meta.env.VITE_API_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)



