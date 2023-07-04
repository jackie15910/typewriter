const typeWriter = (string) => {
  let timer = 0;
  const array = string.split("");
  for(let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(array[i]);
    }, timer);
    timer += 110;
  }
  
  // This timeout ensures that the newline character is printed after all characters in the array
  setTimeout(() => {
    process.stdout.write('\n');
  }, timer);
};

typeWriter("4311o th3r3 w0r1d");
