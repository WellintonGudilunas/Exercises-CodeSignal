function solution(n) {
    if(n === 1 ) return 1;
    return (n**2 + (n-1)**2 );
}


console.log(solution(3));