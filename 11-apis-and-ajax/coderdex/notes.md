```html
<div class="card glass light" id="abc123">
  <img
    src="[${data.avatar_url}](https://avatars.githubusercontent.com/u/44825108?v=4)"
    alt="narcisolobo"
    class="card-image" />
  <div class="card-body">
    <div class="flex flex-start mb">
      <div class="flex-1">
        <h2 class="coder-name">Narciso Lobo</h2>
        <a href="https://github.com/narcisolobo" target="_blank">
          Github Profile</a
        >
      </div>
    </div>
    <p><strong>Location: </strong>Chicago</p>
    <p><strong>Repositories: </strong>191</p>
    <p><strong>Followers: </strong>122</p>
  </div>
  <div class="card-footer flex flex-end">
    <button class="btn btn-danger" onclick="hide('abc123')">DELETE</button>
  </div>
</div>
```

```js
let username = '';
let usernameInput = document.querySelector('#username');
let cardContainer = document.querySelector('#card-container');

function getUsername(element) {
  username = element.value;
}

function getElement(id) {
  return document.getElementById(id);
}

function hide(id) {
  getElement(id).remove();
}

// request url: https://api.github.com/users/narcisolobo
// async/await

function createCoderCard(data) {
  let coderCard;

  return coderCard;
}

async function requestAPI(event) {
  event.preventDefault();
  const response = await fetch(`https://api.github.com/users/${username}`);
  usernameInput.value = '';
  const data = await response.json();
  cardContainer.innerHTML += createCoderCard(data);
}

```