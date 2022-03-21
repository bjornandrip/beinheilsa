function getTotalCalcium () {
    var totalCalcium = sessionStorage.getItem("totalCalcium");
    console.log("result script total cal ",totalCalcium )
    var calciumDisplay = document.getElementById("SvarGluggi");
    calciumDisplay.innerHTML =  "Þín kalk inntaka í dag var: " + totalCalcium + "mg"

    var neededCalc = sessionStorage.getItem("neededCalcium");
    var neededDisplay = document.getElementById("neededGluggi");
    neededDisplay.innerHTML = "Mælt er með að þú innbyrðir: " + neededCalc + "mg af kalki á dag"

    if (parseInt(totalCalcium) < parseInt(neededCalc)){
        document.getElementById("SvarGluggi").style.backgroundColor = 'rgb(253, 170, 170)';
        document.getElementById("results-tips").innerHTML = "Þetta Þýðir að þú ert mögulega ekki að innbyrða nógu mikið af kalki. Þú hefur kannski fengið eitthvað magn af kalki úr fæðu sem er ekki á listanum eð jafnvel d vítamín. Bæði þessi næringarefni eru mikilvæg fyrir beinin. Til að fá meira af D-vítamíni væri sniðugt að nýta vel sólina þegar hún lætur sýna sig eða t.d. fá sér lýsi daglega. Til þess að auka kalk magnið þitt gætiru prófað þessi ráð hér að neðan."
    }
    else{
        console.log("for i else")
        document.getElementById("SvarGluggi").style.backgroundColor = 'rgb(200, 225, 204)';
        document.getElementById("results-tips").innerHTML = "Þetta Þýðir að þú ert að innbyrða nóg af kalki sem er frábært! Nú er það bara að viðhalda því og einnig reyna að passa upp á að þú fáir nóg af D-vítamíni. Endilega fræddu þig um næringu og mataræði hér að neðan!"


    }
};


function changeAnsColor(){
    console.log(document.getElementById("SvarGluggi").style.backgroundColor)
    if (document.getElementById("SvarGluggi").style.backgroundColor === 'rgb(253, 170, 170)'){
        document.getElementById("SvarGluggi").style.backgroundColor = 'rgb(200, 225, 204)';
    }
    else{
        document.getElementById("SvarGluggi").style.backgroundColor = 'rgb(253, 170, 170)';
        console.log('else')
        console.log(document.getElementById("SvarGluggi").style.backgroundColor);
    }
    
}