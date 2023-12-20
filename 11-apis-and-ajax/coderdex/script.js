/* 
  PSEUDOCODE:

  1. username is entered
  2. get username (value of the text input)
  3. when form is submitted make a get request to github api using username
  4. parse json response, cherry pick necessary info
  5. inject info into new card
  6. render card onto page
*/

let usernameInput = document.querySelector('#username');
let cardContainer = document.querySelector('#card-container');

function createCoderCard(data) {
  return `
<div class="card glass light" id="${data.id}">
  <img
    src="${data.avatar_url}"
    alt="${data.login}"
    class="card-image" />
  <div class="card-body">
    <div class="flex flex-start mb">
      <div class="flex-1">
        <h2 class="coder-name">${data.name}</h2>
        <a href="${data.url}" target="_blank">
          Github Profile</a
        >
      </div>
    </div>
    <p><strong>Location: </strong>${data.location}</p>
    <p><strong>Repositories: </strong>${data.public_repos}</p>
    <p><strong>Followers: </strong>${data.followers}</p>
  </div>
  <div class="card-footer flex flex-end">
    <button class="btn btn-danger" onclick="hide('${data.id}')">DELETE</button>
  </div>
</div>
  `;
}

// async/await
async function requestAPI(event) {
  event.preventDefault();

  let username = usernameInput.value;
  let response = await fetch(`https://api.github.com/users/${username}`);
  console.log(response);
  let data = await response.json();
  console.log(data);

  usernameInput.value = '';

  let coderCard = createCoderCard(data);

  cardContainer.innerHTML += coderCard;
}

function hide(id) {
  let element = document.getElementById(id);
  element.remove();
}
