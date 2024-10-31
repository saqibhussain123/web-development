// if(5 == "5"){
//      document.write("ha sahi ha");
// }

// var number=prompt("enter a percentage");
// if(number>=80 & number<=100){
//     document.write("A+");
// }else if(number>=70 && number <80 ){
//     document.write("A");
// }else if(number>60&& number <70){
//     document.write('B');

// }else if(number >50 && number <60){
//     document.write("c");
// }else{
//     document.write("failed");
// }



//example 


var userinput=prompt("enter a name");
var arr=["karachi",'london','peshawer','islamabad','quatia'];

for(var i=0;i<arr.length;i++){
    if(userinput ==arr[i]){
        alert('city found');
        break;
    }else{
        alert('city not found');
    }
}