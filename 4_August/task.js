function submit(){
    let num=document.getElementById("input").value;
    let isEven="Even";
    let isPrime="Prime";
    if(num%2==0){
        isEven="Even";
        document.write("Number is Even");
    }
    else{
        isEven="Odd";
    }

    for(let i=2;i<num/2;i++){
        if(num%i==0){
            isPrime="Not a Prime";
            break;
        }
    }

    // document.getElementById("even_odd").innerHTML="Number is "+isEven;
    // document.getElementById("prime").innerHTML="Number is "+isPrime;
    document.write("Number is "+isEven+"<br>");
    document.write("Number is "+isPrime);
}