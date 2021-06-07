// console.log("Typescript is dooooppppeee");

const rps = (p1, p2) => {

    if(p1 === p2)
        return "draw"
    //Step2 Build conditions so that both tests pass
    let arr = [p1,p2]
    if(!arr.includes("paper")) //Same as rock and scissors
        return "rock";
    else if (arr.includes("scissors")) // implies paper and scissors
        return "scissors";
    else
        return "paper" // last option paper and rock

    //return "scissors" //Step 1

};


module.exports = rps;

//STEP 1: Make test pass in most simple way possible