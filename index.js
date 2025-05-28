
  const modalPortfolio = document.getElementById("portfolio_modal");
  const openBtnPortfolio = document.getElementById("portfolio_card");
  const closeBtnPortfolio = document.querySelector(".close-btn");
  

  const modalKatarina = document.getElementById("katarina_modal");
  const openBtnKatarina = document.getElementById("katarina-card");
  const closeBtnKatarina = document.querySelector(".close-btn-kat");

  const modalDiscord = document.getElementById("discord_modal");
  const openBtnDiscord = document.getElementById("discord-card");
  const closeBtnDiscord = document.querySelector(".close-btn-discord");

   const modalPokemon = document.getElementById("pokemon_modal");
  const openBtnPokemon= document.getElementById("pokemon-card");
  const closeBtnPokemon = document.querySelector(".close-btn-pokemon");

  openBtnPortfolio.onclick = () => modalPortfolio.style.display = "block";
  closeBtnPortfolio.onclick = () => modalPortfolio.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modalPortfolio) modalPortfolio.style.display = "none";
  };

  
  openBtnKatarina.onclick = () => modalKatarina.style.display = "block";
  closeBtnKatarina.onclick = () => modalKatarina.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modalKatarina) modalKatarina.style.display = "none";
  };

  openBtnDiscord.onclick = () => modalDiscord.style.display = "block";
  closeBtnDiscord.onclick = () => modalDiscord.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modalDiscord) modalDiscord.style.display = "none";
  };

  openBtnPokemon.onclick = () => modalPokemon.style.display = "block";
  closeBtnPokemon.onclick = () => modalPokemon.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modalPokemon) modalPokemon.style.display = "none";
  };