const form = document.getElementById("form");

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(confirm("A Gyanús Baka egy buzi?")){
        alert("Igen, tudtuk, hogy ő egy buzi!");
    }
    else{
        alert("Tévedsz, mert ő egy buzi!");
    }
});