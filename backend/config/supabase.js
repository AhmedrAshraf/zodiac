const { createClient } = require('@supabase/supabase-js');

// Server-side client using the secret (service_role) key, so keep it out of the frontend.
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, {
  auth: { persistSession: false, autoRefreshToken: false }
});

module.exports = supabase;
