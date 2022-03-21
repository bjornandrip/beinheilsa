const express = require('express');

//Import a body parser module to be able to access the request body as json
const bodyParser = require('body-parser');
const hostname = '127.0.0.1'

//Use cors to avoid issues with testing on localhost
const cors = require('cors');

const app = express();

//Port environment variable already set up to run on Heroku
var port = process.env.PORT || 8000;
// var port = 8000

//Tell express to use the body parser module
app.use(bodyParser.json());

//Tell express to use cors -- enables CORS for this backend
app.use(cors());  

var products = [
    { id: '0', name: "Mjólk",unit: "100g", calcium: "114"},
    { id: '1', name: "Hleðsla (rauð)",unit: "100g", calcium: "175"},
    { id: '2', name: "Hleðsla (blá)",unit: "100g", calcium: "166"},
    { id: '3', name: "Hleðsla (gul)",unit: "100g", calcium: "166"},
    { id: '4', name: "Næring+",unit: "100g", calcium: "176"},
    { id: '5', name: "Grísk jógurt",unit: "100g", calcium: "101"},
    { id: '6', name: "Heimilis jógurt",unit: "100g", calcium: "97"},
    { id: '7', name: "Hreint Skyr", unit: "100g", calcium: "107"},
    { id: '8', name: "Rjómi",unit: "100g", calcium: "68"},
    { id: '9', name: "Súrmjólk",unit: "100g", calcium: "114"},
    { id: '10', name: "Sýrður rjómi",unit: "100g", calcium: "93"},
    { id: '11', name: "Sojabaunir",unit: "100g", calcium: "225"},
    { id: '12', name: "Nýrnabaunir",unit: "100g", calcium: "79"},
    { id: '13', name: "Kjúklingabaunir",unit: "100g", calcium: "105"},
    { id: '14', name: "Linsur",unit: "100g", calcium: "19"},
    { id: '15', name: "Ruccola",unit: "100g", calcium: "160"},
    { id: '16', name: "Kale",unit: "100g", calcium: "136"},
    { id: '17', name: "Spinat",unit: "100g", calcium: "120"},
    { id: '18', name: "Rauðkál",unit: "100g", calcium: "33"},
    { id: '19', name: "Broccoli",unit: "100g", calcium: "33"},
    { id: '17', name: "Gulrót",unit: "100g", calcium: "26"},
    { id: '17', name: "Blómkál",unit: "100g", calcium: "23"},
    { id: '17', name: "Rauðrófa",unit: "100g", calcium: "22"},
];

var category = ["Baunir","Grænmeti"]

sendList = [products,category]

app.get('/products', (req, res) => {
    //returns product list
    return res.status(200).json(sendList);
});



app.post('/products/results', (req, res) => {
    //calculates the total calcium
    var quantityList = req.body.quantityList
    console.log("Listin", req.body.quantityList)
    console.log("thelength",quantityList.length)
    var total = 0;
    for (let i=0;i<quantityList.length;i++) {
        let qtID = quantityList[i].id
        console.log("id á quantity: ", qtID)
        
        index = products.findIndex(x => x.id === qtID)
        console.log("index á products: ", index)
        total += parseInt(quantityList[i].quantity) * parseInt(products[index].calcium)
    
}
    console.log("Total:",total)
    return res.status(200).json(total);

    
});



app.listen(port, () => {
    console.log('Event app listening...');
});
app.use('*', (req, res) => {
    res.status(405).send('Operation not supported.');
});