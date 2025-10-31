import { createClient } from '@supabase/supabase-js'

// Get these from your Supabase dashboard
const SUPABASE_URL = 'https://hyljuxrqlxsneajrzlee.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5bGp1eHJxbHhzbmVhanJ6bGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MjkzMjYsImV4cCI6MjA3NzQwNTMyNn0.p3mETPLcbhgakeko3DA6wJHU_F6X6yCtnWZ74_rse-8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
