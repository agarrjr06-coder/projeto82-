import { supabase } from '../lib/supabase.js';

export async function getCurrentUser() {
  if (!supabase) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.warn('Não foi possível recuperar a sessão:', error.message);
    return null;
  }

  return data.user ?? null;
}

export function observeAuthChanges(callback) {
  if (!supabase) return () => {};

  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null);
  });

  return () => data.subscription.unsubscribe();
}
