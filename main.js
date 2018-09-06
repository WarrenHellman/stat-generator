
const attributeNum = document.getElementById("attributeNum");
const aboutNum = document.getElementById("aboutNum");

// Creates Dynamic field for Attribute labels and values
attributeNum.addEventListener('keyup', function(e){
  if (attributeNum.value <3 || attributeNum.value>8){
    alert("Please select a value between 3-8");
  }
  else {
    let fields = attributeNum.value;
    const attributeField = document.querySelector("#attributeField")
    
    if(attributeField.children.length){
      while (attributeField.firstChild){
        attributeField.removeChild(attributeField.firstChild)
      }
    }
    for (let i=0; i<fields; i++){
      // Creates label input field nodes for name
      const attributeLabel = document.createElement("label")
      attributeLabel.setAttribute("for", "Ability "+(i+1));
      attributeLabel.innerHTML = "Ability Name "+(i+1)+":";

      const attributeName = document.createElement("input")
      attributeName.type = "text";
      attributeName.className = "attrName form-control";
      attributeName.name = "Ability "+(i+1);

      // Creates label input field nodes for value
      const valueLabel = document.createElement("label")
      valueLabel.setAttribute("for", "Value "+(i+1));
      valueLabel.innerHTML = "Value "+(i+1)+":";

      const valueName = document.createElement("input")
      valueName.type = "number";
      valueName.className = "attrValue form-control";
      valueName.name = "Value "+(i+1);

      const breaks = document.createElement("br");
      attributeField.appendChild(attributeLabel);
      attributeField.appendChild(attributeName);
      attributeField.appendChild(valueLabel);
      attributeField.appendChild(valueName);
      attributeField.appendChild(breaks);
      attributeField.appendChild(breaks);
    }
  }
})

// Creates Dynamic field for about values
aboutNum.addEventListener('keyup', function(e){
  if (aboutNum.value < 0 || aboutNum.value > 7){
    alert("Please select a value between 0-7");
  }
  else {
    let fields = aboutNum.value;
    let aboutField = document.querySelector("#aboutField");
    
    //removes previous elements
    if(aboutField.children.length){
      while (aboutField.firstChild){
        aboutField.removeChild(aboutField.firstChild)
      }
    }
    //builds new elements
    for (let i=0; i<fields; i++){
      const aboutLabel = document.createElement("label")
      aboutLabel.setAttribute("for", "About "+(i+1));
      aboutLabel.innerHTML = "About "+(i+1)+":";

      const aboutName = document.createElement("input")
      aboutName.type = "text";
      aboutName.name = "About "+(i+1);
      aboutName.className = "wideInput form-control";

      const breaks = document.createElement("br");
      
      aboutField.appendChild(aboutLabel);
      aboutField.appendChild(aboutName);
      aboutField.appendChild(breaks);
      aboutField.appendChild(breaks);
    }
  }
})

let create = document.getElementById("create");

create.addEventListener('click', generateForm);

function generateForm(){
  //adds Title Text
  let titleValue = document.getElementById("titleName").value;
  let title = document.getElementById("title");
  title.innerHTML = titleValue;

  //Adds subtitle text
  let subtitleValue = document.getElementById("subtitleName").value;
  let subtitle = document.getElementById("subtitle");
  subtitle.innerHTML = subtitleValue;

  //Adds about text
  let aboutField = document.getElementById('aboutField').children;
  let aboutLines = document.getElementById("aboutLines");
  for (let i= 0; i<aboutField.length; i++){
    if (aboutField[i].value){
      let li = document.createElement("li");
      li.innerHTML = aboutField[i].value;
      aboutLines.appendChild(li);
    }
  }
  let displayPic = document.getElementById("profilePic");
  displayPic.style.display = "inline";
  let filePath = document.getElementById("fileinput");

  console.log(filePath.value)
  generateChartData();
}

function generateChartData() {
  let chartData ={}
  // let num = document.querySelector("#attributeNum").value;
  // chartData.num = num;

  let labelArr = [];
  let labels = document.querySelectorAll(".attrName");
  for (let i = 0; i<labels.length; i++) {
    labelArr.push(labels[i].value)
  }
  chartData.labels = labelArr;

  let valueArr = [];
  let values = document.querySelectorAll(".attrValue");
  for (let i = 0; i<values.length; i++) {
    valueArr.push(values[i].value)
  }
  chartData.values = valueArr;
  buildChart(chartData)
}