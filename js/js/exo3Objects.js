class CustomString extends String {
  split(separator) {
    const resultWithoutSeparator = super.split(separator);
    // Copie du tableau resultWithoutSeparator avec le spread operator
    const resultWithSeparator = [...resultWithoutSeparator];
    for(let i = 0; i < resultWithoutSeparator.length - 1; i++) {
      resultWithSeparator[i] += separator;
    }
    return [
      resultWithoutSeparator,
      resultWithSeparator
    ]
  }
}

const hello = new CustomString("Hello World");
const result = hello.split("o");
console.log(`result `, result);