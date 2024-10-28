document.querySelector('#getFighter').addEventListener('click', getRandomFighterAndInfo);

// API keys
const sportsDbApiKey = '3';  // SportsDB API Key
const unsplashApiKey = 'i97TJC_uw2UVQ-E6AkXAXxdbUrf54UNzaJsfZZJzFzc';  // Unsplash API Key

// Function to get random MMA fighter from SportsDB and then fetch their image from Unsplash
function getRandomFighterAndInfo() {
    const fighterName = ''; // Initialize the fighterName (will be defined later)
    const sportsDbUrl = `https://www.thesportsdb.com/api/v1/json/${sportsDbApiKey}/searchplayers.php?p=${encodeURIComponent(fighterName)}`;
   // const sportsDbUrl = `https://www.thesportsdb.com/api/v1/json/${sportsDbApiKey}/searchplayers.php?s=MMA${encodeURIComponent(fighterName)}`;
    console.log(sportsDbUrl);

    // Fetch a random MMA fighter from the SportsDB API
    fetch(sportsDbUrl)
        .then(response => response.json())
        .then(data => {
            console.log('SportsDB Data:', data);

            if (!data.player || data.player.length === 0) {
                console.error('No fighter found.');
                return;
            }

            // Select a random fighter from the list (if available)
            const randomIndex = Math.floor(Math.random() * data.player.length);
            const randomFighter = data.player[randomIndex];
            const fighterName = randomFighter.strDescriptionEN;
            const fighterStats = randomFighter.strPosition;
            const fighterTeam = randomFighter.strSport;
            const fighterImage = randomFighter.strCutout;

            


        //  Display basic fighter info from SportsDB
          // document.querySelector('#fighterName').innerText = ` ${fighterName}`;
            document.querySelector('#fighterStats').innerText = `Position: ${fighterStats}`;
            document.querySelector('#fighterDescription').innerText = ` ${fighterName}`;
            document.querySelector('#fighterTeam').innerText = `Sport: ${fighterTeam}`;
            document.querySelector('#fighterImage').src = fighterImage;
            
            // Use the fighter's name to fetch their image from Unsplash API (or any other image API)

           const unsplashUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent}&client_id=${unsplashApiKey}`;

           //const unsplashUrl = `https://api.unsplash.com/search/photos`;
          document.querySelector('#fighterImage').src = unsplashUrl;


            return fetch(unsplashUrl);
        })
        .then(response => response.json())
        .then(imageData => {
            console.log('Unsplash Data:', );

            if (!imageData.urls || !imageData.urls.small) {
                console.error('No image found.');
                return;
            }

            // Display the fighter's image from Unsplash
            document.querySelector('#fighterImage').src = imageUrl;



            
        })
        .catch(error => {
            console.error('Error fetching fighter data:', error);
        });
}







/*
// API keys
const sportsDbApiKey = 'WqJ5ngzDkuvbB7FL5fBB67QtLbdJo2H8jhGNHF4m';  // The Sports DB API Key
const sportRadarApiKey = 'WqJ5ngzDkuvbB7FL5fBB67QtLbdJo2H8jhGNHF4m';  // Sportradar API Key */

// https://fightingtomatoes.com/UFC-data-endpoint.php?api_key=1e71f5f2c091df6dbc319d4baf041da960420d10&year=Any&event=Any&fighter=Any

