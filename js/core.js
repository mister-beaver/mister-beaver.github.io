"use strict";


const version = 6;


let data = {
    name: "Example",
    description: "This is just some data.",
    values: {
        visible: true,
        qty: 5,
        price: 4.49,
    },
};


function save() {
    console.log("saving data");
    
    let json = JSON.stringify(data);
    let payload = encodeURI(json);
    let cookieStr = "data=" + payload;
    
    console.log(cookieStr);
    
    document.cookie = cookieStr;
}

function load() {
    console.log("loading data");
    
    let cookieStr = document.cookie;
    console.log(cookieStr);
    let encodedJson = cookieStr.split("=")[1];
    console.log(encodedJson);
    let decodedJson = decodeURI(cookieStr);
    console.log(decodedJson);
    let readData = JSON.parse(decodedJson);
    
    console.log(readData);
    
    $("#output").text(JSON.stringify(readData));
}


$(function() {
    console.log("ver " + version);
    $("#ver").text(version);
    $("#input").text(JSON.stringify(data));
});

