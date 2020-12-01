const dict_chuck = ['\"Chuck Norris a réussi à trouver la page 404.\"', '\"Chuck Norris peut cultiver un champ magnétique.\"', '\"Chuck Norris ne se mouille pas, c\'est l\'eau qui se Chuck Norris.\"', '\"Le dernier a avoir serré la main à Chuck Norris c\'est Jamel Debbouze.\"', '\"Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.\"', '\"Quand la tartine de Chuck Norris tombe, la confiture change de côté.\"', '\"Quand la tartine de Chuck Norris tombe, la confiture change de côté.\"', '\"Lorsque Chuck Norris fait l\'amour à sa femme, la voisine jouit aussi.\"', '\"Chuck Norris ne prends jamais de laxatif; personne ne fait chier Chuck Norris !\"', '\"À son mariage, Chuck Norris avait Oncle Ben\'s en personne pour lui jeter du riz.\"'];


	
function alea() {
  const r = Math.floor(256*Math.random());
  const g = Math.floor(256*Math.random());
  const b = Math.floor(256*Math.random());
  document.getElementById("color").style.background = "rgba(" + r + "," + g + "," + b + ",1)";
  document.getElementById("colorsecond").style.background = "rgba(" + r + "," + g + "," + b + ",1)";
  document.getElementById("colorfont").style.color = "rgba(" + r + "," + g + "," + b + ",1)";
  document.getElementById("colorfontsecond").style.color = "rgba(" + r + "," + g + "," + b + ",1)";


} alea() ;


function Quote(event) {
    alea();
    h1.textContent = [dict_chuck[Math.floor(Math.random() * dict_chuck.length)]];
}

const h1 = document.querySelector("h1");

document.addEventListener("click", Quote);