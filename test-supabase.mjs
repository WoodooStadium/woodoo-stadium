import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(l => l.includes('='))
    .map(l => [l.split('=')[0], l.split('=').slice(1).join('=')])
);

console.log('URL:', env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Key starts with:', env.SUPABASE_SERVICE_ROLE_KEY?.substring(0, 20));

const client = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data, error } = await client.from('blog_posts').select('*').limit(1);
console.log('data:', data);
console.log('error:', JSON.stringify(error));