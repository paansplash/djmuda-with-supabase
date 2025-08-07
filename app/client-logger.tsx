'use client';

import { useEffect } from 'react';

export default function ClientLogger() {
  useEffect(() => {
    console.log("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    console.log("SUPABASE_URL", process.env.SUPABASE_URL); // Won't be defined in browser
    console.log("SUPABASE_ANON_KEY", process.env.SUPABASE_ANON_KEY); // Won't be defined in browser
  }, []);

  return null;
}
