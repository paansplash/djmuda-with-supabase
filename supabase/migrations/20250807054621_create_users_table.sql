create table users (
    id bigint primary key generated always as identity,
    username text,
    email text,
    name text,
    password text,
    created_at timestamptz default now()
);