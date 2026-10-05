import { supabase } from '../lib/supabase.js';

function requireSupabase() {
  if (!supabase) {
    throw new Error('Supabase ainda não configurado.');
  }
}

export async function signIn(email, password) {
  requireSupabase();
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signUp({ name, email, password }) {
  requireSupabase();
  return supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });
}

export async function signOut() {
  requireSupabase();
  return supabase.auth.signOut();
}

export async function requestPasswordReset(email) {
  requireSupabase();
  return supabase.auth.resetPasswordForEmail(email);
}
