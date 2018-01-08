const Blockchain = require('./chain.js');
const Block = require('./block.js');

let scratchChain = new Blockchain();

const currentDate = new Date();

scratchChain.addNewBlock(new Block(1, currentDate, { greatestRapperOfAllTime: "Biggie Smalls" }));
scratchChain.addNewBlock(new Block(2, currentDate, { favoriteRapperOfAllTime: "Andre 3000" }));

console.log(JSON.stringify(scratchChain, null, 4));