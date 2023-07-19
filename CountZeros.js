function Counter(n) {  
    let count = 0 ;
    while (n >=10) {  
        count =count +Math.floor(n / 10)    
        n = n/10   
        
    }  
    return count;
}
    