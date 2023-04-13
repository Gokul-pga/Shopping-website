
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tqvcctdkuglzjwoyovdb.supabase.co'
const supabaseKey = "BSYo848CObCnPlq8mkLrab0qmmg7szj30q9hh+CIXiki+8gBUTiKuobyX3BSlWoYh8ugua8xalcvTXiGVxVgNA=="
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;