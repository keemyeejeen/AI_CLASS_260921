-- 이미 삽입된 조명/앞치마 상품에 image_url만 채워넣기
update public.products set image_url = 'img/조명.jpg' where name = '조명';
update public.products set image_url = 'img/앞치마.png' where name = '앞치마';
