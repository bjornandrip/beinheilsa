//The URL to which we will send the request
const url = 'http://localhost:8000/products';

function getAllProducts() {

    // console.log("BLESSAÐURRRRRR")
    //Perform a GET request to the url
    axios.get(url)
        .then(function (response) {
            // console.log("Success: ", response.data);
            console.log(response.data)
            var products = response.data[0];
            var category = response.data[1];
            console.log("The Products:", products)
            //When successful, print the received data

            

            var j = 0;
            for(let i = 0; i < products.length; i++){
                var row = document.createElement("div");
                row.setAttribute("class","flokkur3");

                var name = document.createElement("div");
                name.setAttribute("class","texti-fæða");
                name.innerText = products[i].name

                var unit = document.createElement("div")
                unit.setAttribute("class","texti-einingar")
                unit.innerText = products[i].unit

                var inputDiv = document.createElement("div");
                inputDiv.setAttribute("class","svarbox")

                var input = document.createElement("select")
                input.setAttribute("class","select-option")
                input.id = products[i].id

                
                document.getElementById('mjolkur-flokkur').appendChild(row);
                row.appendChild(name);
                row.appendChild(inputDiv);
                row.appendChild(unit);
                inputDiv.appendChild(input);

                for(let i = 0; i < 16;i++){
                    let option = document.createElement("option");
                    option.value = i
                    option.innerHTML = i
                    input.appendChild(option);

                };
                if(i==10 || i ==14){
                    var row = document.createElement("div");
                    row.setAttribute("class","flokkur");
                    row.innerText = category[j]
                    document.getElementById('mjolkur-flokkur').appendChild(row);
                    j++;
                }

            };


        })
        .catch(function (error) {
            //When unsuccessful, print the error.
            console.log(error);
        });
}
function checkSexAge(){
    var sexMale = document.getElementById("karl").checked;
    var sexFemale = document.getElementById("kona").checked;
    if (sexFemale == false && sexMale == false){
        alert("Vinsamlegast haka í kyn")
        return "exit"
    }
    
    var age = parseInt(document.getElementById("age").value);
    console.log(age)
    if (age < 0 || Number.isNaN(age)){
        alert("Vinsamlegast velja réttan aldur")
        return "exit"
    }

    let neededCalc = 0
    if (1 <= age && age <=3){
        neededCalc = 700
    }
    else if ((4 <= age && age <=8) || (19 <= age && age <= 50)){
        neededCalc = 1000
    }
    else if (9 <= age && age <=18){
        neededCalc = 1300
    }
    else if (51 <= age && age <=70){
        if (sexMale){
            neededCalc = 1000
        }
        else{
            neededCalc = 1200
        } 
    }
    else{
        neededCalc = 1200
    }
    return neededCalc
}

function changeQuantity(){
    var changelList = []

    for  (let i = 0; i<11; i++){
    var quantity = document.getElementById(String(i)).value;
    console.log(quantity)
    changelList.push({"id":String(i),"quantity":quantity})
    }
    return changelList
}

function getTotal(){
    var totalUrl = url + "/" + "results"

    var quantityList = changeQuantity();
    var neededCalc = checkSexAge();
    if (neededCalc == "exit"){
        return
    }
    
    axios.post(totalUrl,{quantityList: quantityList})
    .then(function (response) {
        sessionStorage.setItem("totalCalcium", response.data);
        sessionStorage.setItem("neededCalcium", neededCalc);
        window.location.href = "../results/index.html"

    })
    .catch(function (error) {
        //When unsuccessful, print the error.
        console.log(error);
    });
    
}

