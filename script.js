const API_URL = 'https://api.github.com/search/users?q=';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getUser();

async function getUser(userName) {
  const res = await fetch(API_URL + userName);
  const body = await res.json();
  const user = body.items[0];

  const followersRes = await fetch(user.followers_url);
  const followersBody = await followersRes.json();
  const followerCount = followersBody.length;

  const reposRes = await fetch(user.repos_url);
  const reposBody = await reposRes.json();
  const reposCount = reposBody.length

  console.log(reposCount)

  createCard(user);

  function createCard(user) {
    const cardData = `
    <div class="card">
      <div class="avatar">
        <img src="${user.avatar_url}">
      </div>
      <div class="user-info">
        <h1>User: ${user.login}</h1>
        <ul class="bullets">
          <li><strong>Followers Count:</strong> ${followerCount}</li>
          <li><strong>Repos Count:</strong> ${reposCount}</li>
            <h3>Example Repos:</h3>
              <ul class="bullets">
                <li>-  ${reposBody[0].name}</li>
                <li>-  ${reposBody[1].name}</li>
                <li>-  ${reposBody[2].name}</li>
              </ul>
        </ul>
      </div>
    </div>
  `;

    main.innerHTML = cardData;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;

  if (user && user !== '') {
    getUser(user);
    search.value = '';
  }
});


