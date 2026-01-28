
-- Create Leads Table
create table public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  project_type text not null,
  message text,
  status text default 'new'
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Create policy to allow public inserts (since it's a contact form)
create policy "Allow public inserts"
  on public.leads
  for insert
  with check (true);

-- Create policy to allow reading only by authenticated staff (if you have auth)
-- For now, maybe just service role can read, which is default for 'no public read policy'
