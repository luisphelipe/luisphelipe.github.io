const serverList = [
  "https://receipe-reciepe-recipe-app.herokuapp.com/",
  "https://rails-graphql-todo.herokuapp.com/",
  "https://luisphelipe-express-todo.herokuapp.com/",
  "https://arcane-island-39787.herokuapp.com/"
];

console.log(
  "beep boop Starting the wake up process... this can take up to a minute."
);

serverList.forEach(serverUrl => {
  fetch(serverUrl).then(() => {
    console.log(`Sucessfuly awaked ${serverUrl}.`);
  });
});

console.log(
  "All servers are awake, better user experience is ensured yet again! :)"
);
