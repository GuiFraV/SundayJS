function linearCongruentialGenerator() {
    const a = 1664525;
    const c = 1013904223;
    const m = Math.pow(2, 32);  // 2^32

    let seed = new Date().getTime();

    seed = (a * seed + c) % m;

    // Ajuster la sortie pour qu'elle soit dans l'intervalle [1, 1000000]
    const random = ((seed / m) * 1000000) | 0 + 1;

    return random;
}

// Utilisation :
const random = linearCongruentialGenerator();
console.log(random); 