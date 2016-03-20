// var readline = require('readline');
// var rl = readline.createInterface
// ({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question
// (">>:Enter a number of variables: ", function(answer) 
// {
//    console.log(answer);
//    rl.close();
// });

var size = prompt("Enter a number of variables");
var variable=[];
for(var i=0; i<size; i++){
	variable[i] = ["x"+i];
}

function getMatrix(){
	var arr=[];
	for(var i=0; i<size; i++){
  	arr[i]=[];
  	for(var j=0; j<=size; j++)
  	arr[i][j] = Math.floor(Math.random()*20)+1;
	} 
 
  for(var i=0; i<size-1; i++){  
  for(var j=i+1; j<size; j++){
  for(var k=i; k<=size; k++){
      arr[j][k]+=(arr[i][k]*(-arr[j][i]/arr[i][i]));
    }}}
  return arr;
}
var coef = getMatrix();
debugger;



var a=[];
a[0]=0;
var row=size-1;
var column;
for(var i=1; i<=size; i++){ 
  column=size-1;
  variable[size-i]=((coef[size-i][size]-a[i-1])/coef[size-i][size-i]).toString();
  if(i!=size){
  	a[i]=coef[row][column]*parseFloat(variable[column],10);
  	row--;
  	for(var repeat=0; repeat<(i-1); repeat++){ 
      column--;
      a[i]-=coef[row][column]*parseFloat(variable[column],10);
  	}}}
    alert(variable[2]);
debugger;


