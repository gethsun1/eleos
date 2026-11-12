import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(url && publishableKey);
export const supabase = isSupabaseConfigured ? createClient(url!, publishableKey!, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
}) : null;

export type Review = { id: string; display_name: string | null; rating: number; review_text: string | null; created_at: string; status: 'pending'|'approved'|'rejected' };
export type Enquiry = { id: string; name: string; email: string; phone: string | null; category: string; message: string; created_at: string; status: 'new'|'reviewed'|'closed' };
export type ReviewSummary = { average_rating: number; review_count: number };
