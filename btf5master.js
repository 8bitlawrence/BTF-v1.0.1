let walnuts = 0;
let money = 200;


window.onload = function () {
  var name = prompt('Enter a username:');
  document.getElementById('Welcome').innerHTML = 'Hello, ' + name;
  document.getElementById('Moneydisplay').innerHTML = 'Money: $' + money;
  document.getElementById('Walnutdisplay').innerHTML = 'Walnuts: ' + walnuts; 
};

function walnutshoppurchased() {
  if (money < 100) {
    alert('Not enough money');
  } else {
    money -= 100;
    document.getElementById('Moneydisplay').innerHTML = 'Money: $' + money; 

    
    setInterval(walnutshopmoney, 2000);
  }
}

function walnutshopmoney() {
  money += 5; 
  document.getElementById('Moneydisplay').innerHTML =  'Money: $' + money;
}

function walnutfarmpurchased() {

  if(money < 100) {
    alert('Not enough money');}

  else {
    money -= 100;
    document.getElementById('Walnutdisplay').innerHTML = 'Walnuts: ' + walnuts; 

    
    setInterval(walnutfarmwalnuts, 2000);
    }
  

}

function walnutfarmwalnuts() {
  walnuts += 5;
  document.getElementById('Walnutdisplay').innerHTML = 'Walnuts: ' + walnuts;
}
