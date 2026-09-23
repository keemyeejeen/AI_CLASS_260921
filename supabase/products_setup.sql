-- 1. products 테이블 생성 (Shop 섹션 상품 목록)
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price integer not null,
  image_url text,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- 2. 기존 Shop 섹션 상품 3개 삽입
insert into public.products (name, description, price, image_url, display_order)
values
  ('컵', '물결 모양의 투명 찻잔', 18000, 'img/컵.jpg', 1),
  ('조명', '3D프린팅으로 제작한 조명 겸 책받이', 24000, 'img/조명.jpg', 2),
  ('앞치마', '귀여운 토끼가 그려진 방수 앞치마', 32000, 'img/앞치마.png', 3);

-- 3. RLS 활성화 + 누구나 조회(SELECT)는 가능하도록 정책 추가
alter table public.products enable row level security;

create policy "Public read access"
  on public.products
  for select
  to anon
  using (true);
