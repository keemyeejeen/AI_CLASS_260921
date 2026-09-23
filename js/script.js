// 모바일 메뉴 열고 닫기
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// 메뉴 클릭 시 모바일 메뉴 닫기
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

// 푸터에 현재 연도 표시
document.getElementById("year").textContent = new Date().getFullYear();

// Supabase products 테이블에서 상품 목록 불러와 렌더링
async function loadProducts() {
  const productList = document.getElementById("productList");

  const { data: products, error } = await supabaseClient
    .from("products")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("상품을 불러오지 못했습니다:", error.message);
    productList.innerHTML = "<p>상품을 불러오는 중 문제가 발생했습니다.</p>";
    return;
  }

  productList.innerHTML = products
    .map(function (product) {
      const image = product.image_url
        ? '<img class="product-image" src="' + product.image_url + '" alt="' + product.name + '" />'
        : '<div class="product-image"></div>';

      return (
        '<div class="product-card">' +
        image +
        "<h3>" + product.name + "</h3>" +
        '<p class="desc">' + (product.description || "") + "</p>" +
        '<p class="price">' + product.price.toLocaleString() + "원</p>" +
        "</div>"
      );
    })
    .join("");
}

loadProducts();
