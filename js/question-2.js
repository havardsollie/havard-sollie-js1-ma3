const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f5e0b2bfaf504ea9841c264fbb05ef11";

const gamesContainer = document.querySelector(".games");

async function getData () {
    try {
        const response = await fetch(url);

        const data = await response.json();
    
        console.log(data.results);
    
        gamesContainer.innerHTML = "";
    
        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i]);
    
            if (i === 8) {
                break;
            }
    
            gamesContainer.innerHTML += `<div class="data"> 
                                            <h2> ${data.results[i].name}</h2>
                                            <b> Rating: ${data.results[i].rating}</b>
                                            <p> Tags: ${data.results[i].tags.length}</p>
                                        </div>`;
        }
        
    }

    catch (error) {
        console.log("An error occured while fetching data");
        gamesContainer.innerHTML = displayError("An error occured while fetching data"); 
    }
}

getData();

  

