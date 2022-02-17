let banana1 = 15.678;
let banana2 = 123.965;
let banana3 = 90.2345;
let sumBanana1 = null;
let sumBanana2 = null;
let middle = null;
let discount = Math.ceil(Math.random() * (100 - 1) + 1);
let profit = null;

document.writeln("Price banana1 " + banana1 + "<br>" + "<br>", "Price banana2 " +  banana2 + "<br>" + "<br>", "Price banana3 " +  banana3 + "<br>"+ "<br>");

document.writeln("Очінь, очінь дорого " + Math.max(banana1, banana2, banana3) + "<br>"+ "<br>");
document.writeln("Очінь, очінь дешево " + Math.min(banana1, banana2, banana3) + "<br>" + "<br>");
sumBanana1 = banana1 + banana2 + banana3;
document.writeln("I know you want get sum all bananas " + sumBanana1 + "<br>" + "<br>");
sumBanana2 = Math.floor(banana1) + Math.floor(banana2) + Math.floor(banana3);
document.writeln("Sum without coin " + sumBanana2 + "<br>" + "<br>");
document.writeln("Sum round " + Math.round(sumBanana2/100)*100 + "<br>" + "<br>");
document.writeln("this sum is (false - neparne, true - parne) " + (Math.floor(sumBanana1)%2 == 0)  + "<br>" + "<br>");
document.writeln("You can get some many " + (500 - sumBanana1)  + "<br>" + "<br>");
middle = (banana1+banana2+banana3)/3;
document.writeln("Do you know that I can? Yes I can tell you average price " + middle.toFixed(2) + "<br>" + "<br>");
document.writeln("Today your discount is " + discount + "<br>" + "<br>");
profit = sumBanana2/2 - discount*sumBanana2/100;
document.writeln("I think your profit is " + profit);


document.writeln("<h3> Шаблонні рядки <h3>");

document.writeln(`Max price ${Math.max(banana1, banana2, banana3)} <br>
Min price: ${Math.min(banana1, banana2, banana3)} <br>
Sum: ${sumBanana1} <br>
Sum without coin: ${sumBanana2} <br>
Sum round: ${Math.round(sumBanana2/100)*100} <br>
Even number? ${(Math.floor(sumBanana1)%2 == 0)} <br>
Change: ${(500 - sumBanana1)} <br>
Average price: ${middle.toFixed(2)} <br>
Your discount: ${discount} <br>
Profit: ${profit}
`)


