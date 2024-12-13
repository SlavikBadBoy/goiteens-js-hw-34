let count = 0;

const counterId = setInterval(() => {
  count++;
  console.log(`повідомлення ${count}`);

  if (count === 5) {
    clearInterval(counterId);
    console.log("зупинив інтервал");
  }
}, 1000);