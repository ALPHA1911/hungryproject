// cart js section veg part 1

const product = [
    {
      id: 1,
      image: '/MainPage/images/dal.jpg',
      title: 'Full-Rice',
      type: 'Veg',
      price: 40,
    },
    {
      id: 2,
      image: '/MainPage/images/dal.jpg',
      title: 'Half-Rice',
      type: 'Veg',
      price: 80,
    },
    {
      id: 3,
      image: '/MainPage/images/dal.jpg',
      title: 'Dal',
      type: 'Veg',
      price: 100,
    },
    {
      id: 4,
      image: '/MainPage/images/dal.jpg',
      title: 'Vaja',
      type: 'Veg',
      price: 10,
    },
    {
      id: 5,
      image: '/MainPage/images/dal.jpg',
      title: 'Dal',
      type: 'Veg',
      price: 40,
    },
    {
      id: 6,
      image: '/MainPage/images/dal.jpg',
      title: 'Dal',
      type: 'Veg',
      price: 80,
    },
    {
      id: 7,
      image: '/MainPage/images/dal.jpg',
      title: 'Dal',
      type: 'Veg',
      price: 100,
    },
    {
      id: 8,
      image: '/MainPage/images/dal.jpg',
      title: 'Dal',
      type: 'Veg',
      price: 20,
    },
    {
      id: 9,
      image: '/MainPage/images/dal.jpg',
      title: 'love',
      type: 'Non-Veg',
      price: 20,
    },
    {
      id: 10,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Non-Veg',
      price: 20,
    },
    {
      id: 11,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Non-Veg',
      price: 40,
    },
    {
      id: 12,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Non-Veg',
      price: 80,
    },
    {
      id: 13,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Non-Veg',
      price: 100,
    },
    {
      id: 14,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Non-Veg',
      price: 20,
    },
    {
      id: 15,
      image: './MainPage//MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Non-Veg',
      price: 40,
    },
    {
      id: 16,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Non-Veg',
      price: 80,
    },
    {
      id: 17,
      image: '/MainPage/images/dal.jpg',
      title: 'Mistidoi',
      type: 'Dessert',
      price: 100,
    },
    {
      id: 18,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Dessert',
      price: 20,
    },
    {
      id: 19,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Dessert',
      price: 20,
    },
    {
      id: 20,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Dessert',
      price: 20,
    },
    {
      id: 21,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Dessert',
      price: 40,
    },
    {
      id: 22,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Dessert',
      price: 80,
    },
    {
      id: 23,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Dessert',
      price: 100,
    },
    {
      id: 24,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Dessert',
      price: 20,
    },
    {
      id: 25,
      image: '/MainPage/images/dal.jpg',
      title: 'Veg-Thali',
      type: 'Thali',
      price: 40,
    },
    {
      id: 26,
      image: '/MainPage/images/dal.jpg',
      title: 'Chiken-thali',
      type: 'Thali',
      price: 80,
    },
    {
      id: 27,
      image: '/MainPage/images/dal.jpg',
      title: 'Fish-thali',
      type: 'Thali',
      price: 100,
    },
    {
      id: 28,
      image: '/MainPage/images/dal.jpg',
      title: 'Biriany',
      type: 'Thali',
      price: 120,
    },
    {
      id: 29,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Thali',
      price: 20,
    },
    {
      id: 30,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Thali',
      price: 20,
    },
    {
      id: 31,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Thali',
      price: 20,
    },
    {
      id: 32,
      image: '/MainPage/images/dal.jpg',
      title: 'rice',
      type: 'Thali',
      price: 20,
    },
  
  ];


  
var cart = [];

function addtocart(a) {
  cart.push({ ...product[a] });
  displaycart();
}

const bedr = [1,3,4,5,6,7,8,9];
let productIdsToShow = [];

productIdsToShow = bedr;


function displaycart() {
  
  const productsToShow = product.filter((item) => productIdsToShow.includes(item.id));

  document.getElementById("orderDetails").innerHTML = productsToShow
    .map((item) => {
      var { image, title, price, type } = item;
      return `
        <div class="ordercase">
          <a href="#" class="ordercase-img">
            <img alt="dal" width="70" class="showcase-img" src=${image}>
          </a>
          <div class="ordercase-content">
            <a href="#">
              <h4 class="ordercase-title">${title}</h4>
            </a>
            <a href="#" class="ordercase-category">${type}</a>
            <div class="ordercase-pb">
              <p class="ordercase-p">₹${price}.00</p>
            </div>
          </div>
        </div>`;
    })
    .join("");
}

// Example usage:
addtocart();
