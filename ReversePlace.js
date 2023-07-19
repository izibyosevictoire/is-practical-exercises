const Reverse =(str)=>{
    return str.split(' ').reduce((acc,curr)=>{
        acc.push(curr.split('').reverse().join(''));
        
        return acc;
        
    },[]).join(' ');
}