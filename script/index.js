

// var url = "https://asia-southeast2-rational-logic-308203.cloudfunctions.net/model-caller-py"
// function predictData(){
//     document.getElementById('predict').innerHTML = symptomIndex.toString();
//     for (let a = 0; a < 132; a++){
//         sendData[a] = 0;
//     }
//     symptomIndex.forEach(e => {
//         sendData[e] = 1;
//     });
//     const jsonData = {
//         symptoms : [sendData.toString()]
//     }
//     const Param = {
//         mode : 'no-cors',
//         headers : {
//             "content-type" : "application/json; charset=UTF-8"
//         }, 
//         body : jsonData,
//         method : "POST"
//     }
//     fetch(url, Param).then(d =>{return d.json()})
//     .then(res => console.log(res))
//     .then(error => console.log(error))
// }