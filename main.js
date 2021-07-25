//Let user know that we would like to reward them for learning about us
alert("Thank you for reading about us! We would like to give you a discount");

//declare arrays globally
let discountArray = ["10%", "25%", "50%", "80%"];
let expositionArray = ["1-5", "6-10","11-15", "16-20"]

console.log("Discounts are as follows:")
for(let i =0; i < discountArray.length; i++)
{
    console.log(`For rolls ${expositionArray[i]}, you get a ${discountArray[i]} discount.`)
}

console.log("If you roll a 20, you will get a second roll. If that second roll is also 20, then you get a free shirt of your choosing!");
//confirm the user would like to participate
if(confirm("Would you like to roll for a discount? You can view the page console for an explanation after your roll."))
{
    //run dice roll function
    DiscountAlg();
}

//hold's array and discount criteria
function DiscountAlg()
{
    //array for percentage discount won
    discountArray = ["10%", "25%", "50%", "80%"];

    //variable runs function to return int for the roll
    let roll = RandomD20();
    console.log(roll);

    //cases used for each tier of discount based on user roll
    //last case is for when the user rolls 20, it rolls to confirm. If 20 is rolled again, they get a free shirt
    let x = roll;
    switch(true)
    {
        case (x<=5):
            DiscountMessage(discountArray[0], roll);
            break;
        case (x >=6 && roll <11):
            DiscountMessage(discountArray[1], roll);
            break;
        case (x >=11 && roll <16):
            DiscountMessage(discountArray[2], roll);
            break;
        case (x >=16 && roll <20):
            DiscountMessage(discountArray[3], roll);
            break;
        case (x === 20):
            let roll2 = RandomD20();
            console.log(roll2);
            if(roll2 === 20)
            {
                alert("Congratulations! You got a critical hit, you win a free shirt!");
            }
            else
            {
                DiscountMessage(discountArray[3], roll);
            }
            break;
    }


}

//rolls a simulated 20 sided die and returns the number
function RandomD20()
{
    return Math.floor(Math.random() * 20) +1;
}

//outputs the winnings to the user
function DiscountMessage(discount, roll)
{
    alert(`Congratulations! You rolled a ${roll} for a ${discount} discount on a valid item!`);
}
