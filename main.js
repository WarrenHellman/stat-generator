const attributeNum = document.getElementById("attributeNum");

// Creates Dynamic field for Attribute labels
attributeNum.addEventListener('keyup', function(e){
  if (attributeNum.value <3 || attributeNum.value>8){
    alert("Please select a value between 3-8")
  }
  else {
    let fields = attributeNum.value;
    console.log(fields)
    for (let i=0; i<fields; i++){
      const attributeLabel = document.createElement("label")
      attributeLabel.setAttribute("for", "Ability "+(i+1));
      attributeLabel.innerHTML = "Ability "+(i+1)+":";
      const attributeName = document.createElement("input")
      attributeName.type = "text";
      attributeName.name = "Ability "+(i+1);
      document.querySelector("#attributeField").appendChild(attributeLabel);
      document.querySelector("#attributeField").appendChild(attributeName);
    }
  }
   
})