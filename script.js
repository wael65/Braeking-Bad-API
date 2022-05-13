alert("start");

/*
fetch("https://www.breakingbadapi.com/api/")
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
    })
*/

const api = "https://www.breakingbadapi.com/api/characters";

async function getData(){
    try{
        const res = await fetch(api)
        const data = await res.json()
        printData(data)
    }catch(e){
       console.log("error", e.message)
    }

}

function printData(data){
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")

    header.innerHTML += 
        `<select class= "form-control" onChange= getChar(this.value)>
            <option>Please Select</option>
            ${data.map(character =>  `<option>${character.name}</option>`)}
                
        </select>`
}

async function getChar(name){
    if ( name != "Please Select"){
        const res = await fetch(`${api}?name=${name}`)
        const data = await res.json()

        content.innerHTML = `
           <h2>${data[0].name} (${data[0].nickname})</h2>
           <h4>${data[0].portrayed}</h4>
           <img src = "${data[0].img} " width = "250"/>
        `
   }else{
        console.log("error")
   }
}

getData()

/*
async function getData(){
        const res = await fetch(api)
        const data = await res.json()

    const v = object.values(data).map(m => m) 
    consol.log(v)   
*/
/*
    object.values(data)
    object.keys(data)
    object.entries(data)
*/