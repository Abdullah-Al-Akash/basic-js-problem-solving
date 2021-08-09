/*------------------------------------
-------------Assignment Start--------- 
--------------------------------------*/

/* 
        Problem No-1 Start
        Seer To Mon
*/
function seerToMon(seer) {
        if (seer < 0) {
                //Error Message when input negative
                return 'Please Enter a Positive value';
        }
        else if (typeof seer != 'number') {
                //Error Message when Input without Number
                return 'Please Enter a Number';
        }
        else {
                const mon = seer / 40; //As 40 Seer = 1 Mon
                return mon;
        }
}

//Problem No-1 End

/* 
        Problem No-2 Start
        Total Sales
*/
function totalSales(shirt, pant, shoes) {
        //declare product per price
        const shirtPrice = 100;
        const pantPrice = 200;
        const shoesPrice = 500;

        /* 
                check error when input will be negative or float number,
                As product quantity can not be float number
        */
        if (shirt < 0 || pant < 0 || shoes < 0 || shirt % 1 != 0 || pant % 1 != 0 || shoes % 1 != 0) {
                return 'Please Enter Positive Integer Quantity';
        }

        //check error when any input value will not be number
        else if (typeof shirt != 'number' || typeof pant != 'number' || typeof shoes != 'number') {
                return 'Please Enter Quantity';
        }

        else {
                //Multiply product quantity with product price
                const totalShirtPrice = shirtPrice * shirt;
                const totalPantryPrice = pantPrice * pant;
                const totalShoesPrice = shoesPrice * shoes;

                //Sum of total product total price
                const totalPrice = totalShirtPrice + totalPantryPrice + totalShoesPrice;
                return totalPrice;
        }
}

//Problem No-2 End

/*
        Problem No-3 Start
        Delivery Cost
*/
function deliveryCost(quantity) {
        //Declare product delivery charge 
        const first100ProductCharge = 100;
        const second100ProductCharge = 80;
        const thirdRestProductCharge = 50;
        /* 
                check error when input will be negative or float number,
                As product quantity can not be float number
        */
        if (quantity < 0 || quantity % 1 != 0) {
                return 'Please Enter a Positive Integer Quantity';
        }

        //check error when input will not be number
        else if (typeof quantity != 'number') {
                return 'Please Enter a Valid Number';
        }

        //condition for first 100 product
        else if (quantity <= 100) {
                const deliveryCharge = quantity * first100ProductCharge;
                return deliveryCharge;
        }

        //condition for 200 product
        else if (quantity <= 200) {
                const first100ProductCost = 100 * first100ProductCharge;
                const restProduct = quantity - 100;
                const second100ProductCost = restProduct * second100ProductCharge;
                const totalCost = first100ProductCost + second100ProductCost;//sum of total cost
                return totalCost;
        }

        //condition for 200+ product
        else {
                const first100ProductCost = 100 * first100ProductCharge;
                const second100ProductCost = 100 * second100ProductCharge;
                const restProduct = quantity - 200;
                const restProductCost = restProduct * thirdRestProductCharge;
                const totalCost = first100ProductCost + second100ProductCost + restProductCost;//sum of total cost
                return totalCost;
        }
}

//Problem No-3 End

/*
        Problem No-4 Start
        Perfect Friend
*/

const friends = ['Asmaan', 'Jamaan', 'Kamaaan', 'akash', 'bkash', 'hotash'];//Array of friends

function perfectFriend(array) {

        //Check error if input value will not be array
        if (typeof array != 'object') {
                return 'Please Enter an Array!';
        };

        //Loop for check all element from array
        for (i = 0; i < array.length; i++) {
                //Declare a string
                let bestFriend = '';

                //Condition for check 5letters element from array
                if (array[i].length == 5) {
                        bestFriend = array[i];
                        return bestFriend;
                }
        };

        //Error Message If will not find any 5 character's element from array
        return 'There are no best friends!';
}

console.log(perfectFriend(friends))
//Problem No-4 End
/*------------------------------------
-------------Thank You----------------
--------------------------------------*/