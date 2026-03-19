const gamesContainer = document.getElementById('gamesContainer');

// Top 100 games
const gamesList = [
  "The Last of Us Part II","God of War","Cyberpunk 2077","Red Dead Redemption 2","Horizon Forbidden West",
  "Elden Ring","Minecraft","Fortnite","Apex Legends","Call of Duty: Modern Warfare","Call of Duty: Warzone",
  "FIFA 23","FIFA 24","NBA 2K24","Grand Theft Auto V","Grand Theft Auto IV","Assassin's Creed Valhalla",
  "Assassin's Creed Odyssey","The Witcher 3: Wild Hunt","Ghost of Tsushima","Resident Evil Village",
  "Resident Evil 2 Remake","Resident Evil 4 Remake","Super Mario Odyssey","Super Mario 3D World",
  "Zelda: Breath of the Wild","Zelda: Tears of the Kingdom","Animal Crossing: New Horizons","Splatoon 3",
  "Mario Kart 8 Deluxe","Dark Souls III","Dark Souls Remastered","Sekiro: Shadows Die Twice","Bloodborne",
  "Cuphead","Hollow Knight","Ori and the Will of the Wisps","Ori and the Blind Forest","Among Us",
  "Valorant","League of Legends","Dota 2","Counter-Strike: Global Offensive","Team Fortress 2",
  "Overwatch 2","Starfield","Diablo IV","Path of Exile","Monster Hunter Rise","Monster Hunter World",
  "Fortnite: Chapter 4","PUBG: Battlegrounds","Warframe","Rocket League","Fall Guys","Dead by Daylight",
  "Back 4 Blood","Left 4 Dead 2","Cuphead: DLC","Final Fantasy XVI","Final Fantasy VII Remake","Persona 5 Royal",
  "Dragon Age: Inquisition","Mass Effect Legendary Edition","The Sims 4","Civilization VI","Age of Empires IV",
  "Star Wars Jedi: Survivor","Star Wars Battlefront II","Halo Infinite","Minecraft Dungeons","Terraria",
  "The Elder Scrolls V: Skyrim","Fallout 4","Fallout 76","Borderlands 3","Borderlands 2","Saints Row (2022)",
  "Tony Hawk’s Pro Skater 1+2","Psychonauts 2","It Takes Two","Little Nightmares II","Control",
  "Alan Wake Remastered","F1 23","Gran Turismo 7","Forza Horizon 5","Forza Motorsport","Dead Space Remake",
  "The Stanley Parable","Cuphead: The Delicious Last Course","Ghostrunner","Hitman 3","Mafia: Definitive Edition",
  "Watch Dogs: Legion","Far Cry 6","Far Cry 5","Saints Row IV","Inside","Limbo"
];

// Add cards with staggered animation
gamesList.forEach((gameName, index) => {
    const card = document.createElement('div');
    card.classList.add('game-card');
    card.style.animationDelay = `${index * 0.05}s`; // stagger animation
    card.innerHTML = `
        <h3>${gameName}</h3>
        <button onclick="goToDetails('${gameName}.html')">SHOW NOW</button>
        <button onclick="buyNow('${gameName}')">BUY NOW</button>
    `;
    gamesContainer.appendChild(card);
});

// Functions
function goToDetails(page) {
    alert(`This would open ${page} page (not created yet).`);
    // window.location.href = page; // Uncomment when pages exist
}

function buyNow(gameName) {
    alert(`Thank you for choosing ${gameName}! Our team will contact you shortly to complete your purchase.`);
}
