//Calculadora de Partidas Rankeadas
//Após Cálculo do Score, estes são os Heróis e seus respectivos Scores poderão ser alterados
let SuperMario = "Super Mário"
let Batman = "Batman"
let Aquaman = "Aquaman"
let LanternaVerde = "Lanterna Verde"
let HomemAranha = "Homem Aranha"
let Thor = "Thor"
let CapitaoAmerica = "Capitão América"

console.log("O Herói é o " + SuperMario)

ScoreHerois(200, 191)
function ScoreHerois (vitorias, derrotas){
    let scoreVitorias= vitorias - derrotas
    let nivel
    nivel = "Ferro"
    SuperMario = "Super Mário"
    console.log ("O Score é de: " + scoreVitorias + " Pontos")
    if (scoreVitorias <= 10) {
        console.log("O herói " + SuperMario + " está no nível " + nivel) 
    } else if (scoreVitorias > 10 && scoreVitorias <= 20){
         nivel = "Bronze"
         console.log("O herói " + SuperMario + " está no nível " + nivel) 
    } else if (scoreVitorias >= 21 && scoreVitorias <= 50){
            nivel = "Prata"
            console.log("O herói " + SuperMario + " está no nível " + nivel) 
    } else if (scoreVitorias >= 11 && scoreVitorias <= 80){
                nivel = "Ouro"
                console.log("O herói " + SuperMario + " está no nível " + nivel) 
    } else if (scoreVitorias >= 81 && scoreVitorias <= 90){
                    nivel = "Diamante"
                    console.log("O herói " + SuperMario + " está no nível " + nivel) 
    }else if (scoreVitorias >= 91 && scoreVitorias <= 100){
                        nivel = "Lendário"
                        console.log("O herói " + SuperMario + " está no nível " + nivel) 
    } if (scoreVitorias >= 101){
                            nivel = "Imortal"
                            console.log("O herói " + SuperMario + " está no nível " + nivel) 
                            
   }
}

console.log("O Herói é o " + Batman)  

ScoreHerois1(200, 189)
function ScoreHerois1 (vitorias, derrotas){
    let scoreVitorias= vitorias - derrotas
    let nivel
    nivel = "Ferro"
    Batman = "Batman"
    console.log ("O Score é de: " + scoreVitorias + " Pontos")
    if (scoreVitorias <= 10) {
        console.log("O herói " + Batman + " está no nível " + nivel) 
    } else if (scoreVitorias > 10 && scoreVitorias <= 20){
         nivel = "Bronze"
         console.log("O herói " + Batman + " está no nível " + nivel) 
    } else if (scoreVitorias >= 21 && scoreVitorias <= 50){
            nivel = "Prata"
            console.log("O herói " + Batman + " está no nível " + nivel) 
    } else if (scoreVitorias >= 11 && scoreVitorias <= 80){
                nivel = "Ouro"
                console.log("O herói " + Batman + " está no nível " + nivel) 
    } else if (scoreVitorias >= 81 && scoreVitorias <= 90){
                    nivel = "Diamante"
                    console.log("O herói " + Batman+ " está no nível " + nivel) 
    }else if (scoreVitorias >= 91 && scoreVitorias <= 100){
                        nivel = "Lendário"
                        console.log("O herói " + Batman + " está no nível " + nivel) 
    } if (scoreVitorias >= 101){
                            nivel = "Imortal"
                            console.log("O herói " + Batman + " está no nível " + nivel) 
   }
}

console.log ("O Herói é o " + Aquaman)

ScoreHerois2 (200, 152)
function ScoreHerois2 (vitorias, derrotas){
    let scoreVitorias= vitorias - derrotas
    let nivel
    nivel = "Ferro"
    let Aquaman = "Aquaman"
    console.log ("O Score é de: " + scoreVitorias + " Pontos")
    if (scoreVitorias <= 10) {
        console.log("O herói " + Aquaman + " está no nível " + nivel) 
    } else if (scoreVitorias > 10 && scoreVitorias <= 20){
         nivel = "Bronze"
         console.log("O herói " + Aquaman + " está no nível " + nivel) 
    } else if (scoreVitorias >= 21 && scoreVitorias <= 50){
            nivel = "Prata"
            console.log("O herói " + Aquaman + " está no nível " + nivel) 
    } else if (scoreVitorias >= 11 && scoreVitorias <= 80){
                nivel = "Ouro"
                console.log("O herói " + Aquaman + " está no nível " + nivel) 
    } else if (scoreVitorias >= 81 && scoreVitorias <= 90){
                    nivel = "Diamante"
                    console.log("O herói " + Aquaman + " está no nível " + nivel) 
    }else if (scoreVitorias >= 91 && scoreVitorias <= 100){
                        nivel = "Lendário"
                        console.log("O herói " + Aquaman + " está no nível " + nivel) 
    } if (scoreVitorias >= 101){
                            nivel = "Imortal"
                            console.log("O herói " + Aquaman + " está no nível " + nivel) 
                            
   }
}

console.log ("O Herói é o " + LanternaVerde)

ScoreHerois3 (200, 140)
function ScoreHerois3 (vitorias, derrotas){
    let scoreVitorias= vitorias - derrotas
    let nivel
    nivel = "Ferro"
    let LanternaVerde = "Lanterna Verde"
    console.log ("O Score é de: " + scoreVitorias + " Pontos")
    if (scoreVitorias <= 10) {
        console.log("O herói " + LanternaVerde + " está no nível " + nivel) 
    } else if (scoreVitorias > 10 && scoreVitorias <= 20){
         nivel = "Bronze"
         console.log("O herói " + LanternaVerde+ " está no nível " + nivel) 
    } else if (scoreVitorias >= 21 && scoreVitorias <= 50){
            nivel = "Prata"
            console.log("O herói " + LanternaVerde + " está no nível " + nivel) 
    } else if (scoreVitorias >= 11 && scoreVitorias <= 80){
                nivel = "Ouro"
                console.log("O herói " + LanternaVerde + " está no nível " + nivel) 
    } else if (scoreVitorias >= 81 && scoreVitorias <= 90){
                    nivel = "Diamante"
                    console.log("O herói " + LanternaVerde + " está no nível " + nivel) 
    }else if (scoreVitorias >= 91 && scoreVitorias <= 100){
                        nivel = "Lendário"
                        console.log("O herói " + LanternaVerde + " está no nível " + nivel) 
    } if (scoreVitorias >= 101){
                            nivel = "Imortal"
                            console.log("O herói " + LanternaVerde + " está no nível " + nivel) 
   }
}
console.log("O Herói é o " + HomemAranha)

ScoreHerois4 (200, 110)
function ScoreHerois4 (vitorias, derrotas){
    let scoreVitorias= vitorias - derrotas
    let nivel
    nivel = "Ferro"
    let HomemAranha = "Homem Aranha"
    console.log ("O Score é de: " + scoreVitorias + " Pontos")
    if (scoreVitorias <= 10) {
        console.log("O herói " + HomemAranha + " está no nível " + nivel) 
    } else if (scoreVitorias > 10 && scoreVitorias <= 20){
         nivel = "Bronze"
         console.log("O herói " + HomemAranha + " está no nível " + nivel) 
    } else if (scoreVitorias >= 21 && scoreVitorias <= 50){
            nivel = "Prata"
            console.log("O herói " + HomemAranha + " está no nível " + nivel) 
    } else if (scoreVitorias >= 11 && scoreVitorias <= 80){
                nivel = "Ouro"
                console.log("O herói " + HomemAranha + " está no nível " + nivel) 
    } else if (scoreVitorias >= 81 && scoreVitorias <= 90){
                    nivel = "Diamante"
                    console.log("O herói " + HomemAranha + " está no nível " + nivel) 
    }else if (scoreVitorias >= 91 && scoreVitorias <= 100){
                        nivel = "Lendário"
                        console.log("O herói " + HomemAranha + " está no nível " + nivel) 
    } if (scoreVitorias >= 101){
                            nivel = "Imortal"
                            console.log("O herói " + HomemAranha + " está no nível " + nivel) 
   }
}

console.log("O Herói é o " + Thor)

ScoreHerois5 (200, 101)
function ScoreHerois5 (vitorias, derrotas){
    let scoreVitorias= vitorias - derrotas
    let nivel
    nivel = "Ferro"
    let Thor = "Thor"
    console.log ("O Score é de: " + scoreVitorias + " Pontos")
    if (scoreVitorias <= 10) {
        console.log("O herói " + Thor + " está no nível " + nivel) 
    } else if (scoreVitorias > 10 && scoreVitorias <= 20){
         nivel = "Bronze"
         console.log("O herói " + Thor + " está no nível " + nivel) 
    } else if (scoreVitorias >= 21 && scoreVitorias <= 50){
            nivel = "Prata"
            console.log("O herói " + Thor + " está no nível " + nivel) 
    } else if (scoreVitorias >= 11 && scoreVitorias <= 80){
                nivel = "Ouro"
                console.log("O herói " + Thor + " está no nível " + nivel) 
    } else if (scoreVitorias >= 81 && scoreVitorias <= 90){
                    nivel = "Diamante"
                    console.log("O herói " + Thor + " está no nível " + nivel) 
    }else if (scoreVitorias >= 91 && scoreVitorias <= 100){
                        nivel = "Lendário"
                        console.log("O herói " + Thor + " está no nível " + nivel) 
    } if (scoreVitorias >= 101){
                            nivel = "Imortal"
                            console.log("O herói " + Thor + " está no nível " + nivel) 
   }
}

console.log("O Herói é o " + CapitaoAmerica)

ScoreHerois6 (200, 50)
function ScoreHerois6 (vitorias, derrotas){
    let scoreVitorias= vitorias - derrotas
    let nivel
    nivel = "Ferro"
    let CapitaoAmerica = "Capitão América"
    console.log ("O Score é de: " + scoreVitorias + " Pontos")
    if (scoreVitorias <= 10) {
        console.log("O herói " + CapitaoAmerica + " está no nível " + nivel) 
    } else if (scoreVitorias > 10 && scoreVitorias <= 20){
         nivel = "Bronze"
         console.log("O herói " + CapitaoAmerica + " está no nível " + nivel) 
    } else if (scoreVitorias >= 21 && scoreVitorias <= 50){
            nivel = "Prata"
            console.log("O herói " + CapitaoAmerica + " está no nível " + nivel) 
    } else if (scoreVitorias >= 11 && scoreVitorias <= 80){
                nivel = "Ouro"
                console.log("O herói " + CapitaoAmerica + " está no nível " + nivel) 
    } else if (scoreVitorias >= 81 && scoreVitorias <= 90){
                    nivel = "Diamante"
                    console.log("O herói " + CapitaoAmerica + " está no nível " + nivel) 
    }else if (scoreVitorias >= 91 && scoreVitorias <= 100){
                        nivel = "Lendário"
                        console.log("O herói " + CapitaoAmerica + " está no nível " + nivel) 
    } if (scoreVitorias >= 101){
                            nivel = "Imortal"
                            console.log("O herói " + CapitaoAmerica + " está no nível " + nivel) 
   }
}
//Utilizei Heróis para exemplificar os diferentes níveis, e caso queiram alterar
// o número de resultado (Vitorias - Derrotas), os níveis também serão alterados 