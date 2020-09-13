// *** declairing variables
let pizzaPrice = 80;

const vegetarianPrice = 100;
const hawaiianPrice = 110;
const pepperoniPrice = 115;
const margheritaPrice = 105;
const specialPrice = 120;

const pizzaVegImg = document.getElementById("veg");
const pizzaHawImg = document.getElementById("haw");
const pizzaPepImg = document.getElementById("pep");
const pizzaMarImg = document.getElementById("mar");
const pizzaSpeImg = document.getElementById("spe");

// *** Function 2 - Total Cost
const calculateTotalCost = (quantity, price) => {
  return quantity * price;
};

// *** Function 3 - Cooking Time
const calculateCookingTime = (time) => {
  if (time <= 2) {
    return 10;
  } else if (time >= 3 && time <= 5) {
    return 15;
  } else {
    return 20;
  }
};

// *** Function - Submit form

const handleSubmit = (event) => {
  event.preventDefault();
  let userName = document.forms.pizzaForm.userName.value;
  // makes first letter to uppercase and the rest of the mane to lowercase
  userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

  const pizzaType = document.forms.pizzaForm.elements.pizza.value;
  const orderQuantity = document.forms.pizzaForm.numberOfPizzas.value;

  if (validateForm(userName, orderQuantity, pizzaType) === true) {
    //pizza prices

    if (pizzaType === "Vegetarian Pizza") {
      pizzaPrice = vegetarianPrice;
    } else if (pizzaType === "Hawaiian Pizza") {
      pizzaPrice = hawaiianPrice;
    } else if (pizzaType === "Pepperoni Pizza") {
      pizzaPrice = pepperoniPrice;
    } else if (pizzaType === "Margherita Pizza") {
      pizzaPrice = margheritaPrice;
    } else {
      pizzaPrice = specialPrice;
    }

    const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
    const cookingTime = calculateCookingTime(orderQuantity);

    // 'ternary operator' (puts the 's for plural number of pizzas)
    const plural = orderQuantity > 1 ? "'s" : "";

    document.getElementById(
      "orderSummery"
    ).innerHTML = `Hello ${userName}! I'll get started on your ${orderQuantity} ${
      pizzaType + plural
    } right away. It will cost ${orderTotal} kr and will take ${cookingTime} minutes.`;

    // pizza display
    if (pizzaType === "Vegetarian Pizza") {
      pizzaVegImg.setAttribute("style", "display:block;");
    } else if (pizzaType === "Hawaiian Pizza") {
      pizzaHawImg.setAttribute("style", "display:block;");
    } else if (pizzaType === "Pepperoni Pizza") {
      pizzaPepImg.setAttribute("style", "display:block;");
    } else if (pizzaType === "Margherita Pizza") {
      pizzaMarImg.setAttribute("style", "display:block;");
    } else if (pizzaType === "Pizza Special") {
      pizzaSpeImg.setAttribute("style", "display:block;");
    }
  }
};

// validate form

function validateForm(userName, orderQuantity, pizzaType) {
  if (userName === "") {
    document.getElementById("error").innerHTML =
      "Oops! You have to type your username";
    return false;
  } else if (pizzaType === "") {
    document.getElementById("error").innerHTML = "Select a pizza!";
    return false;
  } else if (orderQuantity === "") {
    document.getElementById("error").innerHTML = "How many pizzas do you want?";
    return false;
  } else {
    document.getElementById("error").innerHTML = "";
    return true;
  }
}
