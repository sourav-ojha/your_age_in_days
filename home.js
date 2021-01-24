var age;

function Click_me(){
     
    age = prompt("Enter your age in year");
    age_in_days = age * 365;
    document.getElementById('result').innerHTML = "Your are " +age_in_days + " days old";
    
}
function reset(){
    age = 0;
    document.getElementById('result').innerHTML = null;
    //document.getElementById('result').remove();
    

}