# JavaScript
#метод Гаусса
/////////////////////////////////////////////////
var size = prompt("Введите кол-во переменных");
//массив переменных (заменить)
var alph = "abcdefghijklmnopqrstuvwxyz";
var variable=[];
for(var i=0; i<size; i++){
variable[i] = alph.charAt(i);
}
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
} 
/////////////////////////////////////////////////
//массив коефициентов (или может ввод с клавиатуры)
function zapolnenie(){
	var arr=[];
	for(var i=0; i<size; i++){
  	arr[i]=[];
  	for(var j=0; j<=size; j++)
  	arr[i][j] = getRandomInt(1, 24);
	} 
  return arr;
}
var coef = zapolnenie();
//////////////////////////////////////////////
//зануление по Гауссу
var difr =[];
for(var i=0; i<size-1; i++){ 
  for(var j=i+1; j<size; j++){
    difr[j-1]=coef[j][i]/coef[i][i];
    for(var k=i; k<=size; k++)
    	coef[i+1][k]+=coef[i][k]*(-difr[j-1]);
  }
}
///////////////////////////////////////////////
//где-то тут ошибка 
var a=[];
a[0]=0;
var b=size-1;
var c;
for(var i=1; i<=size; i++){ 
  c=size-1;
  variable[size-i]=((coef[size-i][size]-a[i-1])/coef[size-i][size-i]).toString();
  if(i!=size){
  	a[i]=coef[b][c]*parseFloat(pr[c],10);
  	b--;
	// если тут i=0, то оно же не выполнится?
  	for(var repeat=0; repeat<(i-1); repeat++){ 
      c--;
      a[i]-=coef[b][c]*parseFloat(variable[c],10);
  	}
  }
}






