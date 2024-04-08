let id = "";

function create_info(obj) {
    const info = document.querySelector("#infoContainer");
    let array = Object.keys(obj.breeds[0]);
    console.log(info)
    

    let newArr = array.map(e => {
        console.log(e)
        e = e.replaceAll('_', ' ')
        console.log(e)   
        return e;
    });
    
    
    for (i=0; i<array.length; i++) {
        const newInfo = document.createElement("p");
        newInfo.textContent = `${newArr[i]}: ${obj.breeds[0][array[i]]}`;
        info.appendChild(newInfo);
    }
    for (i=0; i<Object.keys(obj.breeds[0].weight).length; i++) {
        let id = Object.keys(obj.breeds[0].weight)[i];
        const newInfo = document.createElement("p");
        newInfo.textContent = `${Object.keys(obj.breeds[0].weight)[i]}: ${obj.breeds[0].weight[id]}`;
        info.appendChild(newInfo);
    }
function getText() {
    const searchText = document.querySelector("#searchText");
    id = searchText.textContent;
}
}
function runProgram() { 
    let link = "";
    const searchButton = document.querySelector("#searchButton");
    // searchButton.addEventListener("click", getText)
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY"
      });
      
    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };

    fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            const obj = JSON.parse(result);
            console.log(obj[0]);
            console.log(obj[0].breeds);
            console.log("THIS WAS THE RESULT");
            create_info(obj[0]);
            const img = document.querySelector("#imgContainer");
            newImg = document.createElement("img");
            newImg.src = obj[0].url;
            newImg.height = obj[0].height/3;
            newImg.width = obj[0].width/3;
            img.appendChild(newImg);
            return result;
        })
        .catch((error) => {
            console.log('error', error);
        });
        

    
    
}

document.addEventListener('DOMContentLoaded', runProgram);
