// ..https://github.com/Muktar2298/Assignment/blob/main/assignment.js


//---Problem-1--//

function kilometerToMeter(kilo){
    var meter;
    if(kilo > 0){
        meter = kilo * 1000;   //..1 kilometer  equal to 1000 meter..//
    }
    else{
        meter  = "Enter the right Input";
    }
    return meter;  //..Return kilometer to Meter..//
}

// console.log(kilometerToMeter(10));


//---Problem-2--//

function budgetCalculator(watch,phone,laptop){

    var watchBudget,phoneBudget,laptopBudget,totalBudget;

    if( watch > 0 && phone > 0 && laptop > 0){
        watchBudget = watch * 50;     //..Per watch price is 50 tk...//
        phoneBudget = phone * 100;    //..Per Phone price is 50 tk...//
        laptopBudget = laptop * 500;  //..Per laptop price is 50 tk...//
        totalBudget = watchBudget + phoneBudget + laptopBudget;  //..Total budget..//
    }
    else{
        totalBudget = "Enter the right Input";
    }
    return totalBudget; //..Return budgetCalculator..//
}
// console.log(budgetCalculator(10,10,10));


//---Problem-3--//

function hotelCost(days){
    var totalCost,price,remaindays;

    if(days > 0 && days <= 10 ){
         totalCost = days * 100;          //..From First 10 days cost is 100 per Per Night ..//
    }
    else if( days > 10 && days <= 20){
         price = 10 * 100;
         remaindays = days - 10;
         totalCost = price + (remaindays * 80);      //..From (11-20) days cost is 80 Per Night..//
    }
    else if(days > 20){
        price = (10 * 100) + ( 10 * 80);
        remaindays = days - 20;
        totalCost = price + (remaindays * 50);       //..From (21 to infinite) days cost is 50 Per Night ..//
    }
    else{
        totalCost = "Enter the right Input"; 
    }
    
    return totalCost; //..Return hotel cost..//
}
// console.log(hotelCost(22));



//---Problem-4--//

function megaFriend(array) {
    var largestElement = "";
    array.forEach(function (word) {

      if(word.length > largestElement.length) {
        largestElement = word;
      }
    });

    return largestElement; //..Return megaFriend..//
  }
  
// console.log(megaFriend(["Nishat","Hasan","Muktar", "Sijan", "Saiful", "Rubel", "Sarkar", "Masud", "Nishat Hasan Muktar"]));