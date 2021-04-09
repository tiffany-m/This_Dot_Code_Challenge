const API_URL = 'https://api.github.com/search/users?q=';

const form = document.getElementById('form');
const search = document.getElementById('search');

getUsers(API_URL);

async function getUsers(url) {
  const res = await fetch(url);  //response, fetch returns a promise
  const data = await res.json();  //gives us actual data response

  console.log(data.results);
}

form.addEventListener('submit', (e) => { //listen for submit, event object
  e.preventDefault(); // so doesn't submit to page

  const searchTerm = search.value;

  if (searchTerm && searchTeam !== '') { //if searchTerm exists and is not equal to nothing
    getUsers(API_URL + searchTerm); //adds searchTerm to end of URL

    search.value = '' //clear search value
  } else {
    window.location.reload() //page reloads if nothing added to search
  }
});
