const menu = [
  {
    id: 1,
    title: 'eggs benedict',
    category: 'breakfast',
    price: 15,
    img: './images/eggs_benedict.jpg',
    desc:
      'Creamy eggs topped with spring mix greens, fresh sprouts, and tomatoes.',
  },
  {
    id: 2,
    title: 'granola',
    category: 'breakfast',
    price: 7,
    img: './images/granola.jpg',
    desc:
      'Bowl of whole grain granola served with fresh cream and blueberries.',
  },
  {
    id: 3,
    title: 'fried egg',
    category: 'breakfast',
    price: 10,
    img: './images/fried_egg.jpg',
    desc:
      'Two eggs sunny side up served with side of sausage, crumpet, and tomato, spinach, and mushrooms.',
  },
  {
    id: 4,
    title: 'pancakes',
    category: 'breakfast',
    price: 13,
    img: './images/pancakes.jpg',
    desc:
      'Buttermilk pancakes topped with berries and nuts, served with a dolop of fresh cream.',
  },
  {
    id: 5,
    title: 'grilled kalamari sandwich',
    category: 'lunch',
    price: 15,
    img: './images/grilled_cheese.jpg',
    desc:
      'Grilled fresh-caught Kalamari with bacon, cabbage, and onions on grilled toast.',
  },
  {
    id: 6,
    title: 'roasted root veggies',
    category: 'lunch',
    price: 9,
    img: './images/roasted_veggies.jpg',
    desc:
      'Mixed root vegatables and peppers, roasted and mildly spiced. Served with tzatziki sauce.',
  },
  {
    id: 7,
    title: 'sesame tuna bowl',
    category: 'lunch',
    price: 17,
    img: './images/tuna_bowl.jpg',
    desc:
      'Fresh-caught Ahi tuna rolled in sesame seeds, served with cucumber, seaweed, avocado, and chives.',
  },
  {
    id: 8,
    title: 'classic burger',
    category: 'lunch',
    price: 11,
    img: './images/burger.jpg',
    desc:
      'Old fashioned burger smothered in swiss cheese, served with pickles and sweet potato fries.',
  },
  {
    id: 9,
    title: 'coffee',
    category: 'drinks',
    price: 4,
    img: './images/coffee.jpg',
    desc: 'Locally roasted, organic and shade grown. Coffee is life.',
  },
  {
    id: 10,
    title: 'lemonade',
    category: 'drinks',
    price: 6,
    img: './images/lemonade.jpg',
    desc:
      'Classic homemade lemonade served in an ice cold mason jar. Strawberry and Pineapple also available.',
  },
  {
    id: 11,
    title: 'fruit shake',
    category: 'drinks',
    price: 10,
    img: './images/shake.jpg',
    desc:
      'Awesome mix of organic fruits, yogurt, and shaved ice. Your choice of strawberry, guava, mango, orange, or pineapple.',
  },
  {
    id: 12,
    title: 'margarita',
    category: 'drinks',
    price: 12,
    img: './images/margarita.jpg',
    desc:
      'Delicious and potent basil margarita. Our house special recipe. Served with or without salt.',
  },
];

const sectionBody = document.querySelector('.section-body');
const btnContainer = document.querySelector('.btn-container');

/* display menu items */
const displayMenuItems = (menuItems) => {
  let mappedMenu = menuItems.map((item) => {
    return `<article class="menu-item grid-2 ${item.category}">
    <img src=${item.img} alt="menu-item" class="menu-photo" />
    <div class="menu-item-content">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="menu-item-text">${item.desc}</p>
    </div>
  </article>`;
  });
  mappedMenu = mappedMenu.join('');
  sectionBody.innerHTML = mappedMenu;
};

/*  dynamically create and display filter buttons */
const displayMenuButtons = () => {
  const categories = menu.reduce(
    (acc, cur) => {
      !acc.includes(cur.category) && acc.push(cur.category);
      return acc;
    },
    ['all']
  );
  const categoryButtons = categories
    .map((category) => {
      return `<button class="btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join('');

  btnContainer.innerHTML = categoryButtons;

  /* filter menu items */
  const filterButtons = btnContainer.querySelectorAll('.btn');
  filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const filteredMenu = menu.filter((item) => item.category === category);
      category === 'all'
        ? displayMenuItems(menu)
        : displayMenuItems(filteredMenu);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});
