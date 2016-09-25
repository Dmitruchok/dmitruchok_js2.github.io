var arrName = [];

var i = 0;
while ( i < 5 ) {
  var writeName=prompt( 'Введите имя:' );
  i++;
  arrName.push( writeName );
}

var writeNameuser = prompt( 'Введите имя пользователя:' );
var resultUserLog = false;

for ( var j = 0; j < arrName.length; j++ ) {

  if ( writeNameuser == arrName[j] ) {
    resultUserLog = true;
    break;
  }
}

resultUserLog ? alert( writeNameuser + ' , вы успешно вошли))' ) : alert( 'Неверное Имя пользователя' );
