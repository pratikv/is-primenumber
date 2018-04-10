

function isPrime(n){
    let num = Number(n);
    if(num.toString() === "NaN")
        throw new Error("Not a number");
    if(num === 0 || num === 1 )
        return false;
    if(num === 2)
        return true;
    if(num % 2 === 0) // In case the number is even, just return true;
        return false;
    let primes = [2];// 2 is prime
    for(var i = 3; i <= num; i+=2){
        let j = 0;
        let isPrime = true;
        while(primes[j] * primes[j] <= i){
            if(i%primes[j] == 0 ){
                isPrime = false;
                break;
            }
            j++;
        }
        if(isPrime){
            primes.push(i);
            if(num !== i && num % i === 0 ){
                return false;
            }
        }
    }
    return true;
}

module.exports = isPrime;