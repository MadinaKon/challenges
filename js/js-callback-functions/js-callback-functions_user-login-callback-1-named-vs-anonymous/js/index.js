console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!
handleUserLogin(showWelcomeMessage);

function showWelcomeMessage() {
  console.log("hello world!");
}

handleUserLogin(() => {
  console.log("hello world!");
});
