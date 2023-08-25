


function validateForm(){
    document.getElementById("bmsg").style.display="none"
    document.getElementById("emsg").style.display="none"
    document.getElementById("pmsg").style.display="none"

    let email=document.getElementById('email1').value
    let pass=document.getElementById('pass1').value
    


    
   
    if(email !== "abhishek.d@sankeysolutions.com" && pass !== "1234")
    {
        document.getElementById("pmsg").style.display="block"
        document.getElementById("emsg").style.display="block"
        
        

    }
    else if(email !== "abhishek.d@sankeysolutions.com" && pass == "1234")
    {
        document.getElementById("emsg").style.display="block"
        
        
    }

    else if(email == "abhishek.d@sankeysolutions.com" && pass !== "1234")
    {
        document.getElementById("pmsg").style.display="block"
        return;
    }
    else
    {
        window.open('index1.html');
    }

    

    
}

