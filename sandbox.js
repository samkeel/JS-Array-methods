const scores = [10, 30, 15, 25, 50, 40, 5];

// Filter - non-destructive method
const filteredScores = scores.filter((score) => {
    return score > 20;
});

console.log(filteredScores);

const users = [
    { name: 'Bill', premium: true },
    { name: 'David', premium: false },
    { name: 'Marry', premium: true },
    { name: 'Jane', premium: false }
];

const premiumUsers = users.filter(user => {
    return user.premium;
});

console.log(premiumUsers);

// Map method - non-destructive
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price / 2);

console.log(salePrices);

const products = [
    { name: 'gold star', price: 20 },
    { name: 'green mushroom', price: 40 },
    { name: 'fire plant', price: 30 },
    { name: 'crown', price: 10 },
    { name: 'blue yoshi', price: 50 }
];

const saleProducts = products.map((product) => {
    if (product.price > 30) {
        return { name: product.name, price: product.price / 2 };
    } else {
        return product;
    }
});

console.log(saleProducts);

// Reduce method - returns a single value/object
const result = scores.reduce((acc, curr) => {
    if (curr > 20) {
        acc++;
    }
    return acc;
}, 0);

console.log(result);

const playerScores = [
    { player: 'Mario', score: 50 },
    { player: 'Luigi', score: 30 },
    { player: 'Yoshi', score: 70 },
    { player: 'Mario', score: 60 }
];

const marioTotal = playerScores.reduce((acc, curr) => {
    if (curr.player === 'Mario') {
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal);

// Find method - returns first value that returns true
const firstHighScore = scores.find(score => score > 20);
console.log(firstHighScore);

// Sort - playerScores by score
// (long method)
playerScores.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    } else if (b.score > a.score) {
        return 1;
    } else {
        return 0;
    }
});
console.log(playerScores);
// shortened
playerScores.sort((a, b) => a.score - b.score);
console.log(reverseScores);

