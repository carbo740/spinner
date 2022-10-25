let circleAnimation = ['\r|   ', '\r/   ', '\r-   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let delay = 100;

for (let i = 0; i < circleAnimation.length; i++) {
  setTimeout(() => {
    process.stdout.write(circleAnimation[i]);
    if (i == circleAnimation.length - 1) {
      process.stdout.write("\n");
    }
  }, delay)
  delay += 200;
}