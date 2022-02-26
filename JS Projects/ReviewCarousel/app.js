const reviews = [
  {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison",
    "image": 'https://tse2.mm.bing.net/th?id=OIP.fRTEAbQn1ri4jk4VLWL7MAHaEK&pid=Api&P=0&w=281&h=158'
  },
  {
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra",
    "image":"https://tse3.mm.bing.net/th?id=OIP.Y8RJLJBsGpzVAGDUzr6szAHaKX&pid=Api&P=0&w=112&h=158"
  },
  {
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln",
    "image": "https://tse4.mm.bing.net/th?id=OIP.U_oyhzEn08cYo26gRzBI6gHaEd&pid=Api&P=0&w=262&h=157"
  },
  {
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe",
    "image": "https://tse1.mm.bing.net/th?id=OIP.rVkYUFrslgG8c_ZxvLIn2wHaGL&pid=Api&P=0&w=189&h=158"
  },
  {
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer",
    "image": "https://tse2.explicit.bing.net/th?id=OIP.76qgKVeEHuXc_GROBMAsxwHaD_&pid=Api&P=0&w=293&h=158"
  },
  {
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu",
    "image": "https://tse2.mm.bing.net/th?id=OIP.VcvXBVeQUY0wrUhI1x9vFgHaGL&pid=Api&P=0&w=190&h=158"
  },
  {
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg",
    "image":"https://tse4.mm.bing.net/th?id=OIP.ZC6giKjKA0vXKpTvvKbk3QHaE8&pid=Api&P=0&w=238&h=158"
  },
  {
    "text": "Well begun is half done.",
    "author": "Aristotle",
    "image": "https://tse3.mm.bing.net/th?id=OIP.1sbfnVDzHZ_RDRrjEPmUdAHaE1&pid=Api&P=0&w=243&h=159"
  },
  {
    "text": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra",
    "image": "https://tse2.mm.bing.net/th?id=OIP.-1w_xLkzG5eU5uaZs43eFwHaEm&pid=Api&P=0&w=255&h=158"
  },
  {
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster",
    "image": 'https://tse3.mm.bing.net/th?id=OIP.mpl7Zayjk2DM_qyIDF0AbwHaE8&pid=Api&P=0&w=229&h=152'
  },
  {
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha",
    "image":"https://tse1.mm.bing.net/th?id=OIP.4-k4XjnIl-mFAsvGJhll6AHaEK&pid=Api&P=0&w=272&h=153"
  },
  {
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer",
    "image": "https://tse1.mm.bing.net/th?id=OIP.pG5z0sdWGocCS05dKjUv3gHaGL&pid=Api&P=0&w=183&h=152"
  },
  {
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch",
    "image": "https://tse1.mm.bing.net/th?id=OIP.IahXOsuBrAHoj-Lu19eDIAHaLI&pid=Api&P=0&w=125&h=189"
  },
  {
    "text": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark",
    "image":"https://tse2.mm.bing.net/th?id=OIP.9imYfkNO6b1iJK3AWO7lXgHaGL&pid=Api&P=0&w=228&h=190"
  },
  {
    "text": "You'll see it when you believe it.",
    "author": "Wayne Dyer",
    "image": "https://tse4.mm.bing.net/th?id=OIP.n0A5JWYGmjv8ozcS-Pv9CQHaEd&pid=Api&P=0&w=316&h=190"
  }]

const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const review = document.querySelector('.review');
const author = document.querySelector('.author');
const image = document.querySelector('img');
let index = 0;

function changeReview(){
    review.innerHTML = reviews[index].text;
    author.innerHTML = reviews[index].author;
    image.src = reviews[index].image;
}

changeReview();
leftBtn.addEventListener('click', ()=>{
    index -= 1;
    index = Math.max(index, 0);
    window.
    changeReview();
})
rightBtn.addEventListener('click', ()=>{
    index += 1;
    index = Math.min(index, reviews.length-1);
    changeReview();
})