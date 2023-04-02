function fibonacci(n, result = [0, 1]) {
  if (result.length >= n) {
    return result.slice(0, n);
  } else {
    result.push(result.at(-1) + result.at(-2));
    return fibonacci(n, result);
  }
}

console.log(fibonacci(8));
