// task1
let arr=[1,2,2,4,4,6,6]
let uarr=[]
let dup=false
for(i=0;i<=arr.length-1;i++){
    dup=false
    for(j=0;j<=uarr.length-1;j++){
if(arr[i]==uarr[j]){
   dup=true
   console.log(arr[i]+" is duplicte")
   break;
}

}
if(!dup) {
    uarr.push(arr[i])
}
}

// task2
let arr2=[1,2,4,5,8,9]

for(i=1;i<=10;i++){
let found=false
    for(j=0;j<=arr2.length-1;j++){
if(i==arr2[j]){
    found=true
 break;

}

}
if(!found){
    console.log(i)
}
}
// task3
let arr3=["sai","charan","ravikumarramkrishna","sairamcharan", ]
gre=arr3[0]
for(i=1;i<arr3.length;i++){
    if(arr3[i].length >gre.length){
      gre=arr3[i]
    }

}
console.log(gre)