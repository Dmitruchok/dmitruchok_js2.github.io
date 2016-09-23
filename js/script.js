var arrName = [];

var i = 0;
while (i < 5) {
  var writeName=prompt('Введите имя:');
  console.log('i =', i);
  i++;
  var pushed = arrName.push(writeName);
}

console.log(arrName);

var writeNameuser = prompt( 'Введите имя пользователя:' );

console.log(writeNameuser);
if (!writeNameuser) {
  alert('Прервать верификацию');
}
  else if (writeNameuser === arrName[0]) {
  alert('Андрей, Вы успешно вошли))');
} else if (writeNameuser === arrName[1]) {
  alert('Андрей, Вы успешно вошли))');
} else if (writeNameuser === arrName[2]) {
  alert('Андрей, Вы успешно вошли))');
} else if (writeNameuser === arrName[3]) {
  alert('Андрей, Вы успешно вошли))');
} else if (writeNameuser === arrName[3]) {
  alert('Андрей, Вы успешно вошли))');
} else {
  alert('Неверное Имя пользователя');
}

/*for (var j = 0; j < arrName.length; j++) {
  console.log('arrName[i]', arrName[j]);

if ( writeNameuser === arrName[j] ) {
  alert('Андрей, Вы успешно вошли))');
  break;
} else {
  alert('Неверное Имя пользователя');
}
}*/
