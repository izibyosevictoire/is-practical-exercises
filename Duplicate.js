
const array = ['one', 1, 2, 'one', 'three', 2];

array.reduce((n,num) => {
  console.log(
   num,n,
    )
    n.includes(num),
    
    n.includes(num) ? n : [n, num];
//   );

  return n.includes(num) ? n : [n, num];
},
 []); 
