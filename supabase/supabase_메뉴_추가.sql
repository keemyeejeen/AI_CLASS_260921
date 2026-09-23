-- Shop 섹션에 상품 5개 추가 (가상 데이터)
insert into public.products (name, description, price, image_url, display_order)
values
  ('다이어리', '매일의 습관을 기록하는 미니멀 위클리 다이어리', 15000, null, 4),
  ('캔들', '은은한 우드향이 퍼지는 소이 캔들', 22000, null, 5),
  ('텀블러', '하루의 리듬을 담은 보온보냉 텀블러', 28000, null, 6),
  ('에코백', '가볍게 매일 드는 데일리 에코백', 19000, null, 7),
  ('파우치', '작은 습관을 담는 다용도 파우치', 16000, null, 8);
