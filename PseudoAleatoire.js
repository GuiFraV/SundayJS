function linearCongruentialGenerator(){
    const a = 1664525;
    const c = 10139004223;
    const m = Math.pow(2, 32)

    let seed = new Date().getTime();

    seed = ( a * seed + c)% m;

    const random = ((seed/ m) * 1000000) | 0 + 1;

    return random;
}

const random = linearCongruentialGenerator();
console.log(random)