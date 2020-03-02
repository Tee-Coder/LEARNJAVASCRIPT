
for (i=0; i<101; i++)
{
    if(i%3 == 0)
    {
        console.log("frizz");
    }

    else if (i%5 == 0)
    {
        console.log("Buzz");
    }
    else{
        console.log (i);
    }

    if ((i%3 == 0) && (i%5 == 0))
    {
        console.log("FrizzBuzz");
    }
}

