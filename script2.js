async function get(){
    try{
        var cc=document.getElementById("main").value;
        console.log(cc);
        var res=await fetch(`http://api.worldbank.org/v2/country/${cc}?format=json`);
        var res1=await res.json();
        console.log(res1);
    
    }
    catch(error)
        {
            console.log("Please enter correct code");
        }
    }