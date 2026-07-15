// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace these placeholders with your actual project keys from your Supabase Project Settings
const supabaseUrl = 'https://qjlxwvcnhyczncxkzuwp.supabase.co';
const supabaseAnonKey = 'sb_publishable_f9sIUa5todXab8wWGbislQ_awa4r2f2';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);