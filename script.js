//adding a new recommendation
function addRecommendation(){
    //get new recommendation
    let recommendation = document.getElementById("new-recommendation");
    //if the user has left a recommendation display a pop up
    if (recommendation.value != null && recommendation.value.trim() != ""){
        console.log("New recommendation added");
        showPopup(true);
        //create new recommendation element with the new message
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = "\"" + recommendation.value + "\"";
        document.getElementById("my-recommendations").appendChild(element);
        var popUp = document.getElementById("popup1")
        popUp.style.display = "block";
        popUp.style.display = "flex";
        popUp.style.justifyContent = "center";
        
        //reset the text area
        recommendation.value = "";
    }
}
function showPopup(bool){
    if (bool){
        document.getElementById("popup").style.visibility = 'visible'
    }
    else{
        document.getElementById("popup").style.visibility = 'hidden'
    }

}