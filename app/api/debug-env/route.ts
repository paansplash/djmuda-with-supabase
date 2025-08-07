// app/api/debug-env/route.ts
export async function GET() {
    return new Response(
      JSON.stringify({
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }