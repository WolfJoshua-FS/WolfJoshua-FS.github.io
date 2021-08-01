//declare arrays globally
let discountArray = ["10%", "25%", "50%", "80%"];
let expositionArray = ["1-5", "6-10","11-15", "16-20"]
let message = document.querySelector("h4");
let testCheckBox = document.getElementById("critCheck").checked = false;
let checkBoxEvent = document.getElementById("critCheck").onclick = checkBox;

alert("Thanks for checking us out, see the bottom of the page for a reward!");

//Roll Die On Button Press
let buttonPress = document.getElementById('rollDie').onclick = DiscountAlg;

//When email is submitted
let submit = document.getElementById("submitEmail").onclick = EmailDiscount;

//hold's array and discount criteria
function DiscountAlg()
{
    if (message.style.color === "red")
    {
        message.style.color = "white";
    }
    //variable runs function to return int for the roll
    let roll = RandomD20();

    //cases used for each tier of discount based on user roll
    //last case is for when the user rolls 20, it rolls to confirm. If 20 is rolled again, they get a free shirt
    let x = roll;
    if (testCheckBox)
    {
        message.style.color = "red";
        message.innerHTML = "Congratulations! You got a critical hit, you win a free shirt!";
    }else if(!testCheckBox){
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

                if(roll2 === 20)
                {
                    message.style.color = "red";
                    message.innerHTML = "Congratulations! You got a critical hit, you win a free shirt!";
                }
                else
                {
                    DiscountMessage(discountArray[3], roll);
                }
                break;
        }
    }

}

//rolls a simulated 20 sided die and returns the number
function RandomD20()
{
    return Math.floor(Math.random() * 20) +1;
}

//outputs the winnings to the user
function DiscountMessage(d, r)
{
    message.innerHTML = `Congratulations! You rolled a ${r} for a ${d} discount on a valid item!`;
    document.getElementById("winnings").style.visibility = 'visible';
    document.getElementById("rollDie").style.visibility = 'hidden';
    document.getElementById("claimDiscount").style.display = 'block';
}

function checkBox()
{
    if (testCheckBox === false)
    {
        testCheckBox = true;
    }else
    {
        testCheckBox = false;
    }
}

function EmailDiscount()
{
    let input = document.getElementById("userEmail").value;
    if (input === "")
    {
        message.innerHTML = "Please enter your email!";
    }else
    {
        document.getElementById("claimDiscount").style.display = 'none';
        message.innerHTML = `Thank you! Your discount code has been sent to your provided email at ${input}.`;
    }
}