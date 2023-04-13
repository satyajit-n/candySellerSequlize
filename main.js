const btn = document.querySelector(".btn");
const myForm = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const delButton = document.querySelector(".btn:hover");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  let myObj = {
    name: name,
    description: description,
    price: price,
    quantity: quantity,
  };

  const parentEle = document.getElementById("lisOfItems");
  const childEle = document.createElement("li");
  const buyOneEle = document.createElement("input");
  const buyTwoEle = document.createElement("input");
  const buyThreeEle = document.createElement("input");

  childEle.className = "li";
  buyOneEle.type = "button";
  buyOneEle.value = "Buy 1";
  buyTwoEle.type = "button";
  buyTwoEle.value = "Buy 2";
  buyThreeEle.type = "button";
  buyThreeEle.value = "Buy 3";
  buyOneEle.className = "btn";

  axios
    .post("http://localhost:3000/candy/add-candy", myObj)
    .then((res) => {
      console.log(res);
      showCandyDetails(res.data.newCandyDetails);
      window.location.reload();
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4>Something Went wrong<h4/>";
      console.log(err);
    });
}

function showCandyDetails(candy) {
  const parentEle = document.getElementById("lisOfItems");
  const childEle = document.createElement("li");
  const buyOneEle = document.createElement("input");
  const buyTwoEle = document.createElement("input");
  const buyThreeEle = document.createElement("input");

  childEle.className = "li";
  buyOneEle.type = "button";
  buyOneEle.value = "Buy 1";
  buyTwoEle.type = "button";
  buyTwoEle.value = "Buy 2";
  buyThreeEle.type = "button";
  buyThreeEle.value = "Buy 3";
  buyOneEle.className = "btn-outline-dark";
  buyTwoEle.className = "btn-outline-dark";
  buyThreeEle.className = "btn-outline-dark";

  childEle.textContent =
    candy.name +
    "   ---   " +
    candy.description +
    "   ---   " +
    candy.price +
    "   ---   " +
    candy.quantity +
    "   ---   ";

  parentEle.appendChild(childEle);
  childEle.appendChild(buyOneEle);
  childEle.appendChild(buyTwoEle);
  childEle.appendChild(buyThreeEle);
}

function showCandyOnLoad(candy) {
  const parentEle = document.getElementById("lisOfItems");
  const childEle = document.createElement("li");
  const buyOneEle = document.createElement("input");
  const buyTwoEle = document.createElement("input");
  const buyThreeEle = document.createElement("input");

  childEle.className = "li";
  buyOneEle.type = "button";
  buyOneEle.value = "Buy 1";
  buyTwoEle.type = "button";
  buyTwoEle.value = "Buy 2";
  buyThreeEle.type = "button";
  buyThreeEle.value = "Buy 3";
  buyOneEle.className = "btn-outline-dark";
  buyTwoEle.className = "btn-outline-dark";
  buyThreeEle.className = "btn-outline-dark";

  childEle.textContent =
    candy.name +
    "   ---   " +
    candy.description +
    "   ---   " +
    candy.price +
    "   ---   " +
    candy.quantity +
    "   ---   ";

  parentEle.appendChild(childEle);
  childEle.appendChild(buyOneEle);
  childEle.appendChild(buyTwoEle);
  childEle.appendChild(buyThreeEle);

  buyOneEle.onclick = () => {
    newQuat = candy.quantity - 1;
    // console.log(newQuat);
    var temp = {
      name: candy.name,
      description: candy.description,
      price: candy.price,
      quantity: `${newQuat}`,
    };
    axios
      .put(`http://localhost:3000/candy/update-candy-by-one/${candy.id}`, temp)
      .then((res) => window.location.reload());
  };

  buyTwoEle.onclick = () => {
    newQuat = candy.quantity - 2;
    var temp = {
      name: candy.name,
      description: candy.description,
      price: candy.price,
      quantity: `${newQuat}`,
    };
    axios
      .put(`http://localhost:3000/candy/update-candy-by-two/${candy.id}`, temp)
      .then((res) => window.location.reload());
  };

  buyThreeEle.onclick = () => {
    newQuat = candy.quantity - 3;
    var temp = {
      name: candy.name,
      description: candy.description,
      price: candy.price,
      quantity: `${newQuat}`,
    };
    axios
      .put(
        `http://localhost:3000/candy/update-candy-by-three/${candy.id}`,
        temp
      )
      .then((res) => window.location.reload());
  };
}

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  axios
    .get("http://localhost:3000/candy/get-candy")
    .then((res) => {
      for (var i = 0; i < res.data.allCandy.length; i++) {
        console.log(res);
        showCandyOnLoad(res.data.allCandy[i]);
      }
    })
    .catch((res) => {
      console.log(res);
    });
});
