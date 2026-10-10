-- Database schema for the zodiac backend.
-- Run once in your Supabase project: Dashboard -> SQL Editor -> New query -> paste -> Run.
--
-- Only the Express backend talks to these tables, using the secret (service_role) key.
-- RLS is enabled with no policies and only service_role is granted access, so the
-- publishable/anon key can't read anything (including password hashes).

create table public.users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  hash text not null,
  salt text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.collabs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users (id) on delete cascade,
  artist text,
  bio text,
  design text,
  image_url text,
  info text,
  insta text,
  twitter text,
  youtube text,
  live boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index collabs_user_id_idx on public.collabs (user_id);

create table public.clothing (
  id uuid primary key default gen_random_uuid(),
  type text,
  color text,
  user_id uuid references public.users (id) on delete set null,
  collab_id uuid references public.collabs (id) on delete set null
);

create table public.posters (
  id uuid primary key default gen_random_uuid(),
  type text,
  size text,
  user_id uuid references public.users (id) on delete set null,
  collab_id uuid references public.collabs (id) on delete set null
);

create table public.images (
  id uuid primary key default gen_random_uuid(),
  name text,
  description text,
  image_url text not null
);

-- Keep updated_at current on every update (what Mongoose's `timestamps: true` did)
create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_updated_at before update on public.users
  for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.collabs
  for each row execute function public.set_updated_at();

-- Lock the tables down to the backend
alter table public.users enable row level security;
alter table public.collabs enable row level security;
alter table public.clothing enable row level security;
alter table public.posters enable row level security;
alter table public.images enable row level security;

-- New Supabase projects no longer grant table access automatically, so grant it to the backend's role
grant select, insert, update, delete
  on public.users, public.collabs, public.clothing, public.posters, public.images
  to service_role;

-- Public Storage bucket for uploaded images: anyone can view them by URL, only the backend can upload
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('images', 'images', true, 5242880, array['image/jpeg', 'image/png', 'image/gif', 'image/webp'])
on conflict (id) do nothing;
