const generate_naturals = (max: number): number[] => {

     const array = [];
    for(let i = 2; i < max; i++) {
        array.push(i);
    }

    return array;
}
