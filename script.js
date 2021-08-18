let searchText1 = document.getElementById('searchText1');
let searchText2 = document.getElementById('searchText2');
document.getElementById("search").addEventListener('click', search);
let data;
function search(event) {
    event.preventDefault();
    const url = `https://api.schooldigger.com/v1.2/schools?st=${searchText2.value}&zip=${searchText1.value}&appID=6bcf25ea&appKey=8b6ea6dac0161c38433bebf496cf5960`;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            data = myJson;
            textt.innerHTML = "";
            for (i = 0; i < myJson.schoolList.length; i++) {
                if (myJson.schoolList[i].rankHistory){
                    const ranName = myJson.schoolList[i].schoolName;
                    const ranRat = myJson.schoolList[i].rankHistory[0].rank;
                    const outOf = myJson.schoolList[i].rankHistory[0].rankOf;
                    const ranStars = myJson.schoolList[i].rankHistory[0].rankStars;
                    const paragraph = document.createElement("p");
                    const text = document.createElement("ul");
                    const sName = document.createElement("li");
                    const sRat = document.createElement("li");
                    const sStars = document.createElement("li");
                    sName.innerText = ranName;
                    sRat.innerText = "Rank " + ranRat + " out of " + outOf;
                    sStars.innerText = ranStars + " stars";
                    text.appendChild(sName);
                    text.appendChild(sRat);
                    text.appendChild(sStars);
                    paragraph.appendChild(text);
                    document.getElementById("textt").appendChild(paragraph);
                }
            }
        })
}
