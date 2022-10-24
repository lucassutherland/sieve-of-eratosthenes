import { primesUnder } from "./src/sieve";

const max = 100;
const primes = primesUnder(max);

console.log(`there are ${primes.length} primes under ${max}:`);
for(let i = 0; i < primes.length; i++) {
    console.log(primes[i]);
}