const obj=require('./logger');
console.log("----------------------Module-1----------------------------");
obj.logName('Subhadipa Banerjee');
obj.logWelcome();
console.log("Valid Calculation:->"+obj.logUrl);

const obj1=require('./util/helper');
console.log("----------------------Module-2----------------------------");
obj1.logDate();
obj1.logMonth();
obj1.logBatch();

const obj2=require('../validator/formatter');
console.log("----------------------Module-3----------------------------");
console.log("trim function is used->");
obj2.logSpace();
obj2.logLower();
obj2.logUpper();
/*console.log("--------------------Underscore---------------------------------------")
const Externalobj=require('underscore');//External module download from npmjs.com
console.log(Externalobj.first(["Apple","Orange","Melon"]));
console.log(Externalobj.first(["Apple","Orange","Melon"], 2));
console.log(Externalobj.last([1,2,3,4,5]));
console.log(Externalobj.rest(["Mon","Tue","Wed","Thur","Fri"],3));*/
console.log("--------------------lodash---------------------------------------")
const Externalobj1=require('lodash');
/*chunk */
const month=["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log(Externalobj1.chunk(month,3));
/*tail */
let oddNum = []
for(i=1;i<=2*10;i++)
    {
     if(i%2!=0)
     	{
             oddNum.push(i);
         }
     
    }
//let oddNum = [1, 2, 3, 4, 5, 6, 7]
  
let newArray = Externalobj1.tail(oddNum);
console.log(newArray);
/*Union */
const arr1=[1,2,3,4,5];
const arr2=[2,3,4,5,6];
const arr3=[3,4,5,6,7];
const arr4=[4,5,6,7,8];
const arr5=[5,6,7,8,9];
console.log(Externalobj1.union(arr1,arr2,arr3,arr4,arr5));


/*fromPairs */
let arr = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
  
let convertedToObject =Externalobj1.fromPairs(arr);
  
console.log(convertedToObject);