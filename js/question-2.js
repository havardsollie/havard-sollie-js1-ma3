const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f5e0b2bfaf504ea9841c264fbb05ef11";

const gamesContainer = document.querySelector(".games");

async function getData () {
    try {
        const response = await fetch(url);

        const results = await response.json();
    
        console.log(results.results);
    
        gamesContainer.innerHTML = "";
    
        for (let i = 0; i < results.results.length; i++) {
            console.log(results.results[i]);
    
            if (i === 8) {
                break;
            }
    
            gamesContainer.innerHTML += `<div class="data"> 
                                            <h2> ${results.results[i].name}</h2>
                                            <b> Rating: ${results.results[i].rating}</b>
                                            <p> Tags: ${results.results[i].tags.length}</p>
                                        </div>`;
    
        }
    }

    catch (error) {
        console.log("An error occured while fetching data");
        gamesContainer.innerHTML = displayError("An error occured while fetching data"); 
    }
}

getData();

  

