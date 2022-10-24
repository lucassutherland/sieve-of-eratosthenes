const generateNaturals = (max: number): number [] => {

    const array = [];
    for(let i = 2; i < max; i++) {
        array.push(i);
    }

    return array;
}

const sieve = (naturals: number []): number [] => {
    const max = naturals.length + 1;
    let primes = naturals;

    for(let base = 2; base < max; base++) {
        primes = primes.filter(int => {
            if (int % base === 0 && int !== base) {
                return false;
            } else {
                return true;
            }
        });
    }
    
    return primes;
}

export const primesUnder = (max: number): number [] => {
    return sieve(generateNaturals(max));
}
