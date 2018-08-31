const attributeNum = document.getElementById("attributeNum");
const aboutNum = document.getElementById("aboutNum");

// Creates Dynamic field for Attribute labels and values
attributeNum.addEventListener('keyup', function(e){
  if (attributeNum.value <3 || attributeNum.value>8){
    alert("Please select a value between 3-8");
  }
  else {
    let fields = attributeNum.value;
    console.log(fields)
    for (let i=0; i<fields; i++){
      // Creates label input field nodes for name
      const attributeLabel = document.createElement("label")
      attributeLabel.setAttribute("for", "Ability "+(i+1));
      attributeLabel.innerHTML = "Ability Name"+(i+1)+":";

      const attributeName = document.createElement("input")
      attributeName.type = "text";
      attributeName.className = "attrName";
      attributeName.name = "Ability "+(i+1);

      // Creates label input field nodes for value
      const valueLabel = document.createElement("label")
      valueLabel.setAttribute("for", "Value "+(i+1));
      valueLabel.innerHTML = "Value "+(i+1)+":";

      const valueName = document.createElement("input")
      valueName.type = "number";
      valueName.name = "Value "+(i+1);

      const attributeField = document.querySelector("#attributeField")
      attributeField.appendChild(attributeLabel);
      attributeField.appendChild(attributeName);
      attributeField.appendChild(valueLabel);
      attributeField.appendChild(valueName);
    }
  }
})

aboutNum.addEventListener('keyup', function(e){
  if (aboutNum.value < 0 || aboutNum.value > 7){
    alert("Please select a value between 0-7");
  }
  else {
    let fields = aboutNum.value;
    console.log(fields)
    for (let i=0; i<fields; i++){
      const aboutLabel = document.createElement("label")
      aboutLabel.setAttribute("for", "About "+(i+1));
      aboutLabel.innerHTML = "About "+(i+1)+":";
      const aboutName = document.createElement("input")
      aboutName.type = "text";
      aboutName.name = "About "+(i+1);
      document.querySelector("#aboutField").appendChild(aboutLabel);
      document.querySelector("#aboutField").appendChild(aboutName);
    }
  }
})