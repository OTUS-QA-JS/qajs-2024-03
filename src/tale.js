function kolobok(name){
    // if (name == "Лиса"){
    //     return ("Меня съли!" );    
    // } else {
    //     return ("Я от "+name+" ушел!" );
    // }
    switch(name) {
        case 'Лиса':  // if (x === 'value1')
        return ("Меня съли!" ); 
        break;
      
        case 'Дедушки':  // if (x === 'value2')
        return ("Я от "+name+" ушел!" );
        break;

        case 'Зайца':  // if (x === 'value2')
        return ("Я от "+name+" ушел!" );
        break;
      
        default:
        alert( "Нет таких значений" );
        break;
      }    
    
}

console.log(kolobok("Дедушки"));
console.log(kolobok("Зайца"));
console.log(kolobok("Лиса"));



function newYear(name){
    return (`${name}! ${name}! ${name}!`);
}

console.log(newYear("Дед Мороз"));
console.log(newYear("Снегурочка"));