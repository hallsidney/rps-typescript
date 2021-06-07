// it('1 should equal 1', () => {
//     expect(1).toBe(1);
// });

const rps = require("../rps");

//Tests for RPS moves, in both orders
it('rock beats scissors', () =>{
    expect(rps("rock", "scissors")).toBe("rock");
});
it('rock beats scissors', () =>{
    expect(rps("scissors", "rock")).toBe("rock");
});

it('scissors best paper', () =>{
    expect(rps("scissors", "paper")).toBe("scissors");
});
it('scissors best paper', () =>{
    expect(rps("paper", "scissors")).toBe("scissors");
});

it('paper beats rock', () => {
    expect(rps("paper", "rock")).toBe("paper");
})
it('paper beats rock', () => {
    expect(rps("rock", "paper")).toBe("paper");
})


//Tests for Draws
it('both choose rock', () =>{
    expect(rps("rock", "rock")).toBe("draw");
})

it('both choose paper', () =>{
    expect(rps("paper", "paper")).toBe("draw");
})

it('both choose scissors', () =>{
    expect(rps("scissors'", "scissors'")).toBe("draw");
})

