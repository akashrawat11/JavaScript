const menu = [
  {
    'recipe': 'Beetroot is jam-packed with nutrients and vitamins, as well as plenty of disease-preventing properties. Here we bring you an easy recipe of making beetroot amla juice at home.',
    'name': 'Beetroot-Amla Juice',
    'price': '$10',
    'image': 'https://c.ndtvimg.com/2022-03/46nu68po_beetroor_240x180_08_March_22.jpg',
    'tag': 'Breakfast'
  },
  {
    'recipe': 'Chia pudding is my easy breakfast option on busy mornings. You will love this chia pudding made with coconut milk and coconut sugar. Top with your favorite seasonal fruits and nuts and enjoy it.',
    'name': 'Chia Pudding',
    'price': '$10',
    'image': 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/chia-pudding.jpg',
    'tag': 'Lunch'
  },
  {
    'recipe': 'Oats porridge recipe with step by step pics quick oats porridge made with quick-cooking oats or rolled oats. This is an easy, low-fat porridge made in just 6 minutes.',
    'name': 'Oats Porridge',
    'price': '$10',
    'image': 'https://www.vegrecipesofindia.com/wp-content/uploads/2015/05/oats-porridge-recipe-quick.jpg',
    'tag': 'Dinner'
  },
  {
    'recipe': 'This eggless banana pancake recipe is super quick and easy to make with wholesome ingredients. You can feel good about serving these healthy vegan banana pancakes to the kids, and they’re so tasty that everyone will enjoy them as a fun breakfast or snack.',
    'name': 'Eggless Banana Pancakes',
    'price': '$10',
    'image': 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/eggless-banana-pancake.jpg',
    'tag': 'Shakes'
  },
  {
    'recipe': 'This overnight oats recipe is quick, simple, and delicious dish made by soaking quick-cooking oats or rolled oats with milk, water, or yogurt overnight in the fridge. Then later topped with fruits or nuts and served for breakfast as a healthy dish for busy mornings. This dish is like having a dessert for breakfast. ',
    'name': 'Overnight Oats',
    'price': '$10',
    'image': 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/06/overnight-oats.jpg',
    'tag': 'Dinner'
  },
  {
    'recipe': 'Eggless pancakes recipe with step by step pics. It is possible to make the best pancakes which are fluffy, light and soft and yet made with whole wheat flour and without eggs.',
    'name': 'Eggless Pancakes',
    'price': '$10',
    'image': 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/01/eggless-pancake-recipe.jpg',
    'tag': 'Dinner'
  }
]

const recipiesContainer = document.querySelector('.recipe-container');

function createElement(tag){
  deleteElement();
  menu.forEach(element => {
  if(element.tag == tag || tag == 'All'){
    const recipe = document.createElement('div');
    const container = document.createElement('div');
    const imageContainer = document.createElement('div');
    const namePriceContainer = document.createElement('div');
    const name = document.createElement('div');
    const price = document.createElement('div');
    const content = document.createElement('div');
    const image = document.createElement('img');
    recipe.classList.add('recipe');
    container.classList.add('container');
    content.classList.add('content');
    imageContainer.classList.add('image-container');
    namePriceContainer.classList.add('np-container');
    name.classList.add('name');
    price.classList.add('price');

    recipe.appendChild(imageContainer);
    recipe.appendChild(container);
    container.appendChild(namePriceContainer);
    container.appendChild(content);
    imageContainer.appendChild(image);
    namePriceContainer.appendChild(name);
    namePriceContainer.appendChild(price);
    recipiesContainer.appendChild(recipe);

    name.innerHTML = element.name;
    price.innerHTML = element.price;
    content.innerHTML = element.recipe;
    image.src = element.image;
  }
  });
}

createElement();

function deleteElement(){
  const delRecipies = document.querySelectorAll('.recipe');
  delRecipies.forEach(element => {
    element.parentNode.removeChild(element);
  })
}

const buttons = document.querySelectorAll('a');

buttons.forEach(element=>{
  element.addEventListener('click', ()=>{
    createElement(element.innerHTML);
    console.log(element.innerHTML);
  })
})