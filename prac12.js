const a = 4569;

const prime = (a) => {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return 0;
    }
  }
  return 1;
};

console.log(prime(a));
