// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hrputqcjsvohyeqjuddt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhycHV0cWNqc3ZvaHllcWp1ZGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2OTIxNjYsImV4cCI6MjA1NzI2ODE2Nn0.6qvFiFl526iWpWmB85qGnVUq8wWrvY4eqWlHI1jfB8Q";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);