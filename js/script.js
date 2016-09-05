var arrName = [];

var i = 0;
while (i < 5) {
  var writeName=prompt('Введите имя:');
  console.log('i =', i);
  i++;
  var pushed = arrName.push(writeName);
}

console.log(arrName);

var writeNameuser=prompt( 'Введите имя пользователя:' );

console.log(writeNameuser);

for (var i = 0; i < arrName.length; i++) {

  console.log('arrName[i]', arrName[i]);

  if ( writeNameuser === arrName[i] ) {
    alert('Андрей, Вы успешно вошли))');
  } else {
    alert('Неверное Имя пользователя');
  }
}
