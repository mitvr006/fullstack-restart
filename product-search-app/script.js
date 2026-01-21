const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");

const products = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Pineapple",
  "Papaya"
];

function showProducts(list) {
  productList.innerHTML = "";

  if (list.length === 0) {
    productList.innerHTML = "<li>No result found</li>";
    return;
  }

  list.forEach(function (item) {
    const li = document.createElement("li");
    li.innerText = item;
    productList.appendChild(li);
  });
}

searchInput.addEventListener("keyup", function () {
  const searchText = searchInput.value.toLowerCase();

  if (searchText === "") {
    showProducts(products);
    return;
  }

  const filteredProducts = products.filter(function (item) {
    return item.toLowerCase().includes(searchText);
  });

  showProducts(filteredProducts);
});

showProducts(products);

