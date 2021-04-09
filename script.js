const API_URL = 'https://api.github.com/search/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getUser('tiffany-m');

async function getUser(user) {
  const res = await fetch(API_URL + user);
  const data = await res.json();

  createCard(data);
}

function createCard(user) {
  const cardData = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}">
      </div>
      <div class="user-info">
        <h1>${user.name}</h1>
        <ul>
          <li>${user.followers_url}</li>
          <li>${user.starred_url}</li>
          <li>${user.repos_url}</li>
        </ul>
      </div>
    </div>
  `;

  main.innerHTML = cardData;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;

  if (user && user !== '') {
    getUser(user);
    search.value = '';
  }
});


