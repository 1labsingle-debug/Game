// =========================================
// CANVAS
// =========================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();


// =========================================
// CONFIGURAÇÃO DO MUNDO
// =========================================

const CHUNK_SIZE = 8;

const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;

const RENDER_RADIUS = 3;


// =========================================
// JOGADOR
// =========================================

const player = {
    worldX: 0,
    worldY: 0,

    speed: 0.08,

    defaultSpeed: 0.08,

    radius: 0.45
};


// =========================================
// PONTOS DE INTERESSE
// =========================================

const worldPointsOfInterests = [

    // =====================================
    // 🛹 ÁREA CENTRAL
    // =====================================

    {
        name: "Praça Sk8",
        x: 0,
        y: 0,
        color: "#2ec4b6",
        type: "skate"
    },

    {
        name: "Vestiário",
        x: 3,
        y: 3,
        color: "#e71d36",
        type: "custom"
    },

    {
        name: "Pista de Treino",
        x: -4,
        y: 2,
        color: "#06d6a0",
        type: "training"
    },

    {
        name: "Ranking",
        x: 2,
        y: -3,
        color: "#ffd166",
        type: "ranking"
    },

    {
        name: "Desafios",
        x: -3,
        y: -3,
        color: "#ff9f1c",
        type: "challenge"
    },


    // =====================================
    // 🎪 EVENTOS
    // =====================================

    {
        name: "Área de Eventos",
        x: 8,
        y: -8,
        color: "#ff9f1c",
        type: "events"
    },

    {
        name: "Arena de Campeonatos",
        x: 12,
        y: -10,
        color: "#f72585",
        type: "championship"
    },

    {
        name: "Pista Profissional",
        x: 8,
        y: 8,
        color: "#8338ec",
        type: "skatePro"
    },

    {
        name: "Mega Rampa",
        x: 12,
        y: 7,
        color: "#ef476f",
        type: "megaRamp"
    },


    // =====================================
    // 🏪 CENTRO COMERCIAL
    // =====================================

    {
        name: "Centro Comercial",
        x: -10,
        y: -5,
        color: "#a06cd5",
        type: "shops"
    },

    {
        name: "Padaria",
        x: -13,
        y: -5,
        color: "#f4a261",
        type: "bakery"
    },

    {
        name: "Mercado",
        x: -10,
        y: -9,
        color: "#90be6d",
        type: "market"
    },

    {
        name: "Lanchonete",
        x: -7,
        y: -7,
        color: "#e63946",
        type: "food"
    },

    {
        name: "Loja de Skate",
        x: -14,
        y: -9,
        color: "#00b4d8",
        type: "skateShop"
    },

    {
        name: "Loja de Roupas",
        x: -7,
        y: -11,
        color: "#ff70a6",
        type: "clothes"
    },


    // =====================================
    // 🏍️ VEÍCULOS
    // =====================================

    {
        name: "Oficina Mecânica",
        x: 18,
        y: 2,
        color: "#ffb703",
        type: "garage"
    },

    {
        name: "Oficina de Motos",
        x: 21,
        y: 5,
        color: "#fb8500",
        type: "motoGarage"
    },

    {
        name: "Posto de Gasolina",
        x: 17,
        y: -3,
        color: "#06d6a0",
        type: "gas"
    },

    {
        name: "Ferro-Velho",
        x: 25,
        y: 4,
        color: "#6c757d",
        type: "junkyard"
    },

    {
        name: "Estacionamento",
        x: 15,
        y: 7,
        color: "#495057",
        type: "parking"
    },


    // =====================================
    // 🏥 SERVIÇOS
    // =====================================

    {
        name: "Hospital Central",
        x: -15,
        y: 8,
        color: "#ff4d4d",
        type: "hospital"
    },

    {
        name: "Delegacia",
        x: -18,
        y: 12,
        color: "#118ab2",
        type: "police"
    },

    {
        name: "Sede ADM",
        x: 0,
        y: 15,
        color: "#00bbf9",
        type: "adm"
    },

    {
        name: "Recepção",
        x: 3,
        y: 16,
        color: "#48cae4",
        type: "reception"
    },

    {
        name: "SAC / Suporte",
        x: -3,
        y: 17,
        color: "#577590",
        type: "support"
    },


    // =====================================
    // 🎮 LAZER
    // =====================================

    {
        name: "Cassino / Arcade",
        x: 15,
        y: -15,
        color: "#f72585",
        type: "arcade"
    },

    {
        name: "Área de Minigames",
        x: 11,
        y: -17,
        color: "#7209b7",
        type: "minigames"
    },

    {
        name: "Banco - Jogos com Amigos",
        x: -2,
        y: 4,
        color: "#8d6e63",
        type: "benchGames"
    },

    {
        name: "Banco - Chat Social",
        x: 2,
        y: 5,
        color: "#795548",
        type: "social"
    },


    // =====================================
    // 🌳 NATUREZA
    // =====================================

    {
        name: "Parque Central",
        x: -18,
        y: -2,
        color: "#2a9d8f",
        type: "park"
    },

    {
        name: "Bosque",
        x: -23,
        y: -5,
        color: "#386641",
        type: "forest"
    },

    {
        name: "Lago",
        x: -25,
        y: 0,
        color: "#00b4d8",
        type: "lake"
    },

    {
        name: "Praça Infantil",
        x: -20,
        y: 4,
        color: "#ffd166",
        type: "playground"
    },


    // =====================================
    // 🏘️ BAIRROS
    // =====================================

    {
        name: "Bairro Residencial",
        x: -10,
        y: 12,
        color: "#8ecae6",
        type: "residential"
    },

    {
        name: "Bairro Antigo",
        x: -18,
        y: 18,
        color: "#bc6c25",
        type: "oldTown"
    },

    {
        name: "Área Industrial",
        x: 22,
        y: -5,
        color: "#6c757d",
        type: "industrial"
    },


    // =====================================
    // ⚡ ECONOMIA
    // =====================================

    {
        name: "Thrnd Hub",
        x: 6,
        y: -12,
        color: "#f7931a",
        type: "thrnd"
    },

    {
        name: "Recompensas",
        x: 3,
        y: -14,
        color: "#ffca3a",
        type: "rewards"
    },

    {
        name: "QR Point",
        x: 9,
        y: -13,
        color: "#ffffff",
        type: "qrcode"
    },

    {
        name: "B.A.Byte",
        x: -2,
        y: 12,
        color: "#00f5d4",
        type: "babyte"
    },


    // =====================================
    // 🌉 CONEXÕES
    // =====================================

    {
        name: "Ponte Norte",
        x: 30,
        y: -18,
        color: "#adb5bd",
        type: "bridge"
    },

    {
        name: "Portal Cidade da Praia",
        x: 35,
        y: -20,
        color: "#00bbf9",
        type: "portal"
    },

    {
        name: "Estrada Sul",
        x: 5,
        y: 30,
        color: "#495057",
        type: "roadExit"
    },

    {
        name: "Portal Zona Futura",
        x: -30,
        y: 25,
        color: "#9b5de5",
        type: "future"
    }
];


// =========================================
// CÂMERA ISOMÉTRICA
// =========================================

function worldToScreen(worldX, worldY) {

    const relativeX = worldX - player.worldX;
    const relativeY = worldY - player.worldY;

    return {

        x:
            canvas.width / 2 +
            (relativeX - relativeY) *
            (TILE_WIDTH / 2),

        y:
            canvas.height / 2 +
            (relativeX + relativeY) *
            (TILE_HEIGHT / 2)
    };
}


// =========================================
// DESENHAR TILE
// =========================================

function drawTile(worldX, worldY) {

    const position =
        worldToScreen(worldX, worldY);


    if (
        position.x < -TILE_WIDTH ||
        position.x > canvas.width + TILE_WIDTH ||
        position.y < -TILE_HEIGHT ||
        position.y > canvas.height + TILE_HEIGHT
    ) {
        return;
    }


    ctx.beginPath();

    ctx.moveTo(
        position.x,
        position.y
    );

    ctx.lineTo(
        position.x + TILE_WIDTH / 2,
        position.y + TILE_HEIGHT / 2
    );

    ctx.lineTo(
        position.x,
        position.y + TILE_HEIGHT
    );

    ctx.lineTo(
        position.x - TILE_WIDTH / 2,
        position.y + TILE_HEIGHT / 2
    );

    ctx.closePath();


    // Cor base do terreno
    ctx.fillStyle = "#16252a";

    ctx.fill();


    // Grade discreta
    ctx.strokeStyle =
        "rgba(102, 252, 241, 0.08)";

    ctx.lineWidth = 1;

    ctx.stroke();
}


// =========================================
// DESENHAR CHUNK
// =========================================

function drawChunk(chunkX, chunkY) {

    const startTileX =
        chunkX * CHUNK_SIZE;

    const startTileY =
        chunkY * CHUNK_SIZE;


    for (
        let x = 0;
        x < CHUNK_SIZE;
        x++
    ) {

        for (
            let y = 0;
            y < CHUNK_SIZE;
            y++
        ) {

            drawTile(
                startTileX + x,
                startTileY + y
            );

        }

    }

}


// =========================================
// DESENHAR POI
// =========================================

function drawPOI(point) {

    const position =
        worldToScreen(
            point.x,
            point.y
        );


    if (
        position.x < -100 ||
        position.x > canvas.width + 100 ||
        position.y < -100 ||
        position.y > canvas.height + 100
    ) {
        return;
    }


    // Marcador
    ctx.fillStyle = point.color;

    ctx.beginPath();

    ctx.moveTo(
        position.x,
        position.y - 15
    );

    ctx.lineTo(
        position.x + 20,
        position.y
    );

    ctx.lineTo(
        position.x,
        position.y + 15
    );

    ctx.lineTo(
        position.x - 20,
        position.y
    );

    ctx.closePath();

    ctx.fill();


    // Texto
    ctx.fillStyle = "#ffffff";

    ctx.font = "10px Segoe UI";

    ctx.textAlign = "center";

    ctx.fillText(
        point.name,
        position.x,
        position.y - 24
    );
}


// =========================================
// DESENHAR JOGADOR
// =========================================

function drawPlayer() {

    const centerX =
        canvas.width / 2;

    const centerY =
        canvas.height / 2;


    ctx.fillStyle = "#66fcf1";

    ctx.beginPath();

    ctx.arc(
        centerX,
        centerY,
        9,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.strokeStyle = "#ffffff";

    ctx.lineWidth = 2;

    ctx.stroke();


    // Indicador de direção
    ctx.fillStyle = "#0b0c10";

    ctx.beginPath();

    ctx.arc(
        centerX,
        centerY - 2,
        2,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


// =========================================
// LOOP DE RENDERIZAÇÃO
// =========================================

function renderScene() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // Fundo
    ctx.fillStyle = "#0b1518";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    const currentChunkX =
        Math.floor(
            player.worldX / CHUNK_SIZE
        );

    const currentChunkY =
        Math.floor(
            player.worldY / CHUNK_SIZE
        );


    // Desenhar chunks
    for (
        let chunkX =
            currentChunkX - RENDER_RADIUS;

        chunkX <=
            currentChunkX + RENDER_RADIUS;

        chunkX++
    ) {

        for (
            let chunkY =
                currentChunkY - RENDER_RADIUS;

            chunkY <=
                currentChunkY + RENDER_RADIUS;

            chunkY++
        ) {

            drawChunk(
                chunkX,
                chunkY
            );

        }

    }


    // Desenhar POIs
    worldPointsOfInterests.forEach(
        drawPOI
    );


    // Jogador
    drawPlayer();


    // HUD
    document.getElementById(
        "coordsDisplay"
    ).textContent =
        `${Math.round(player.worldX)}, ${Math.round(player.worldY)}`;


    requestAnimationFrame(
        renderScene
    );
}


// =========================================
// JOYSTICK
// =========================================

const joyZone =
    document.getElementById(
        "joystick-zone"
    );

const joyStick =
    document.getElementById(
        "joystick-stick"
    );


let isDragging = false;

let joyVector = {
    x: 0,
    y: 0
};


function handleMove(clientX, clientY) {

    const rect =
        joyZone.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;

    const centerY =
        rect.top +
        rect.height / 2;


    const deltaX =
        clientX - centerX;

    const deltaY =
        clientY - centerY;


    const maxDistance = 35;


    const distance =
        Math.min(
            Math.hypot(
                deltaX,
                deltaY
            ),
            maxDistance
        );


    const angle =
        Math.atan2(
            deltaY,
            deltaX
        );


    const moveX =
        Math.cos(angle) *
        distance;

    const moveY =
        Math.sin(angle) *
        distance;


    joyStick.style.transform =
        `translate(${moveX}px, ${moveY}px)`;


    joyVector.x =
        moveX / maxDistance;

    joyVector.y =
        moveY / maxDistance;
}


joyZone.addEventListener(
    "pointerdown",
    event => {

        isDragging = true;

        joyZone.setPointerCapture(
            event.pointerId
        );

        handleMove(
            event.clientX,
            event.clientY
        );

    }
);


joyZone.addEventListener(
    "pointermove",
    event => {

        if (!isDragging) return;

        handleMove(
            event.clientX,
            event.clientY
        );

    }
);


joyZone.addEventListener(
    "pointerup",
    stopJoystick
);


joyZone.addEventListener(
    "pointercancel",
    stopJoystick
);


function stopJoystick() {

    isDragging = false;


    joyStick.style.transform =
        "translate(0px, 0px)";


    joyVector = {
        x: 0,
        y: 0
    };
}


// =========================================
// MOVIMENTAÇÃO
// =========================================

function updatePlayer() {

    if (
        joyVector.x !== 0 ||
        joyVector.y !== 0
    ) {

        // Converte o joystick da tela
        // para os eixos do mundo isométrico

        player.worldX +=
            (joyVector.x + joyVector.y) *
            player.speed;


        player.worldY +=
            (joyVector.y - joyVector.x) *
            player.speed;
    }


    requestAnimationFrame(
        updatePlayer
    );
}


// =========================================
// INTERAÇÃO
// =========================================

function interact() {

    let nearest = null;

    let minDistance = 2.2;


    worldPointsOfInterests.forEach(point => {

        const distance =
            Math.hypot(
                player.worldX - point.x,
                player.worldY - point.y
            );


        if (distance < minDistance) {

            minDistance = distance;

            nearest = point;

        }

    });


    if (!nearest) {

        openModal(
            "Exploração",
            "Nenhum ponto de interesse próximo. Explore a cidade!"
        );

        return;
    }


    const messages = {

        skate:
            "🛹 Você entrou na Praça Sk8.",

        custom:
            "👕 Abra o sistema de personalização.",

        training:
            "🎯 Área ideal para praticar suas manobras.",

        ranking:
            "🏆 Consulte os melhores jogadores.",

        challenge:
            "🔥 Novos desafios estão disponíveis.",

        events:
            "🎪 Confira os eventos ativos.",

        championship:
            "🏆 Área destinada aos campeonatos.",

        skatePro:
            "🛹 Pista profissional desbloqueada.",

        megaRamp:
            "🔥 Prepare-se para a Mega Rampa!",

        shops:
            "🏪 Bem-vindo ao Centro Comercial.",

        bakery:
            "🥖 Você entrou na Padaria.",

        market:
            "🛒 Você entrou no Mercado.",

        food:
            "🍔 Hora de recuperar energia.",

        skateShop:
            "🛹 Loja especializada em skate.",

        clothes:
            "👕 Personalize seu estilo.",

        garage:
            "🔧 Oficina Mecânica.",

        motoGarage:
            "🏍️ Oficina especializada em motos.",

        gas:
            "⛽ Posto de Gasolina.",

        junkyard:
            "🔩 Peças antigas podem ser encontradas aqui.",

        parking:
            "🅿️ Área de estacionamento.",

        hospital:
            "🏥 Você recuperou sua energia.",

        police:
            "🚔 Delegacia da cidade.",

        adm:
            "🏢 Sede Administrativa.",

        reception:
            "📋 Bem-vindo à recepção.",

        support:
            "🎧 Central de atendimento.",

        arcade:
            "🎮 Cassino e Arcade.",

        minigames:
            "🎲 Área de minigames.",

        benchGames:
            "♟️ Sente-se e jogue com seus amigos.",

        social:
            "💬 Área social.",

        park:
            "🌳 Parque Central.",

        forest:
            "🌲 Você está entrando no Bosque.",

        lake:
            "🌊 Lago da cidade.",

        playground:
            "🛝 Praça Infantil.",

        residential:
            "🏘️ Bairro Residencial.",

        oldTown:
            "🏚️ Bairro Antigo.",

        industrial:
            "🏭 Área Industrial.",

        thrnd:
            "⚡ Thrnd Hub: atividades e recompensas.",

        rewards:
            "🎁 Veja suas recompensas.",

        qrcode:
            "📷 Abra o leitor de QR Code.",

        babyte:
            "🤖 B.A.Byte está disponível.",

        bridge:
            "🌉 Esta ponte conecta novas regiões.",

        portal:
            "🌀 Portal para Cidade da Praia.",

        roadExit:
            "🛣️ Estrada para uma nova região.",

        future:
            "🚧 Esta área será expandida futuramente."
    };


    openModal(
        nearest.name,
        messages[nearest.type] ||
        `Interagindo com ${nearest.name}.`
    );
}


// =========================================
// ITEM
// =========================================

function useItem() {

    openModal(
        "Inventário",
        "Você usou o item selecionado."
    );
}


// =========================================
// SPRINT
// =========================================

let sprintTimeout = null;


function sprint() {

    player.speed =
        player.defaultSpeed * 2;


    clearTimeout(
        sprintTimeout
    );


    sprintTimeout =
        setTimeout(
            () => {

                player.speed =
                    player.defaultSpeed;

            },
            2000
        );
}


// =========================================
// SMARTPHONE
// =========================================

function togglePhone() {

    document
        .getElementById("smartphone")
        .classList
        .toggle("active");
}


function openApp(appName) {

    openModal(
        appName,
        `Você abriu <b>${appName}</b> no smartphone.`
    );
}


// =========================================
// MODAL
// =========================================

function openModal(title, text) {

    document
        .getElementById("modalTitle")
        .textContent =
        title;


    document
        .getElementById("modalBody")
        .innerHTML =
        `<p>${text}</p>`;


    document
        .getElementById("modal")
        .style.display =
        "block";
}


function closeModal() {

    document
        .getElementById("modal")
        .style.display =
        "none";
}


// =========================================
// EVENTOS DOS BOTÕES
// =========================================

document
    .getElementById("interactButton")
    .addEventListener(
        "click",
        interact
    );


document
    .getElementById("itemButton")
    .addEventListener(
        "click",
        useItem
    );


document
    .getElementById("sprintButton")
    .addEventListener(
        "click",
        sprint
    );


document
    .getElementById("phoneButton")
    .addEventListener(
        "click",
        togglePhone
    );


document
    .getElementById("closeModalButton")
    .addEventListener(
        "click",
        closeModal
    );


document
    .querySelectorAll(".app-icon")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openApp(
                    button.dataset.app
                );

            }
        );

    });


// =========================================
// INICIAR JOGO
// =========================================

updatePlayer();

renderScene();
