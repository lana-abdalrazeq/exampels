  // find even number
const arr=[6,8,9,3,13,16,20];
function evenNum(num){
    if(num %2==0){
        console.log(num)
    }
}
arr.forEach(evenNum);



// reverse the array
let arr2=[ 1,2,13,6,7,9,17];      
function reverse(arr){

for(let i in arr)
arr.splice(i,0,arr.pop());
return arr;

}
console.log(reverse(arr2))


// find the prime num 
function isPrime(num)
{
for(let i=2;i<num; i++ )
{

if (num % i==0) 
return false;

}
return num>1;

}















 // find the sum of odd num
let sum = 0;                           
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1)
    sum += i;
}
console.log(sum);


// sort the array
const num=[ 10,14,20,50];
num.sort((a,b )  =>    a -b) 
console.log(num);

// find sum of array elements
let array=[ 1,2,4,6,7,8];
let count=0;
for (let item of array){
    count+=item;
}
console.log(count);
