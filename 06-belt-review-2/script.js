// long way
let projectVotes = document.querySelector('#projectVotes');
let catVotes = document.querySelector('#catVotes');

console.log(projectVotes);
console.log(catVotes);

function removeFromDOM(element) {
  element.remove();
}

// long way
function upVoteProjects() {
  projectVotes.innerText++;
}

function upVoteCat() {
  catVotes.innerText++;
}

// short way
function upVote(id) {
  let voteSpan = document.querySelector(id);
  voteSpan.innerText++;
}

function alertMessage() {
  let searchInput = document.querySelector('#search');
  alert('Searching for ' + searchInput.value);
}

function discordJoin() {
  setTimeout(discordAlert, 3000);
}

function discordAlert() {
  alert('Joining discord server...');
}

function stackAlert() {
  let stack = document.querySelector('#stack');
  alert('You are in ' + stack.value);
}

function changePic() {
  let projectWeek = document.querySelector('#project-week');
  projectWeek.src = '/images/cat-2.jpg';
}
