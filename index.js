/**
 * ==============================================================================
 * SISTEMA DE CHATBOT NSFW / ADULTO EXPANDIDO - DISCORD BOT
 * ==============================================================================
 */

const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

// Archivo de memoria persistente
const ARCHIVO_MEMORIA = './memoria_hot_bot.json';

// Base de datos inicial masiva con muchísimas más frases hot, directas y sin censura
let cerebro = {
    vocabulario: [
        "tengo tantas ganas de tener sexo ahora mismo",
        "quiero mostrarles las tetas a todos por aqui",
        "estoy bien mojada pensando en travesuras",
        "quien se ofrece para pasar una noche salvaje",
        "necesito sentir algo caliente y duro dentro",
        "me gustaria quitarme la ropa camara en vivo",
        "estoy caliente todo el dia pensando en sexo",
        "alguien para hablar cochino y pasar al siguiente nivel",
        "muero por que me hagan el amor rico",
        "tengo unas ganas locas de chupar y follar rico",
        "me duele lo apretada que estoy de tanta necesidad",
        "quien me acompaña a la cama a pecar un rato",
        "estoy buscando a alguien que me de duro contra la pared",
        "me encanta sentir fluidos y terminar exhausta",
        "tengo las bragas mojadas solo de pensar cochinadas",
        "alguien activo para mandarnos fotos hot al dm",
        "necesito una buena poronga que me haga gritar",
        "me pones bien loca cuando hablas asi de sucio",
        "quiero que me quiten la ropa a tirones",
        "estoy solita en casa y con unas ganas tremenda",
        "quien quiere venir a hacerme temblar las piernas",
        "me fascina la carne fresca y con ganas de follar",
        "estoy anhelando una buena corrida adentro",
        "juguemos a ver quien aguanta mas sin venirse",
        "me encanta gemir duro mientras me dominan",
        "tengo el cuerpo pidiendo a gritos una mamada",
        "vengan a hacerme de todo sin piedad",
        "estoy bien encendida y nadie me apaga",
        "me duele de lo hondo que quiero que me den",
        "alguien con buen tamaño para romperme la cama",
        "quien se anima a una sesion de nsfw extremo",
        "estoy pensando en hacerme la dormida y que entren",
        "me encanta sentir el calorcito de un buen miembro",
        "tengo la piel erizada de solo imaginar tocamientos",
        "alguien para jugar a cumplir fantasias prohibidas",
        "me vuelve loca que me muerdan los labios y el cuello",
        "quiero sentarme encima y no soltar en toda la noche",
        "estoy buscando dueño que me use a su antojo",
        "me chupa la vida entera que me tomen por la fuerza",
        "tengo los pezones durisimos y nadie que los mame",
        "quien quiere venir a vaciarse aqui mismo",
        "me fascina el sexo sucio sin tabues ni rodeos",
        "estoy dispuesta a hacer cualquier locura por placer",
        "me moja tanto que me hablen asqueroso al oido",
        "quiero que me azotes las nalgas hasta dejarlas rojas",
        "alguien libre para pecar rico en el chat privado",
        "tengo unas ansias locas de tragar leche tibia",
        "me pongo perrísima cuando me acarician ahi abajo",
        "quien me hace el favor de quitarme estas ganas",
        "estoy tremenda y con la argolla latiendo de deseo",
        "me vuelve loca que me agarren del pelo con fuerza",
        "quiero sentir cada embestida bien hondo",
        "alguien con suficiente aguante para darle duro",
        "tengo el coño empapado y pidiendo guerra",
        "me encanta que me penetren sin previo aviso",
        "quien se apunta para una orgia mental intensa",
        "estoy buscando verga gorda y jugosa",
        "me fascina chupar hasta dejar sin una gota",
        "quiero acabar chorreando y sin poder caminar",
        "alguien listo para una buena sesión de vicio",
        "tengo unas ganas incontrolables de pecado",
        "me pone cachonda sentir la respiracion cerca",
        "quien me da una buena revolcada hoy",
        "estoy hirviendo de puro deseo reprimido",
        "me encanta que me toquen sin pedir permiso",
        "quiero una corrida en toda la cara bien caliente",
        "alguien con ganas de follar rico y sin apuro",
        "tengo el cuerpo pidiendo polla a gritos",
        "me vuelve loca el olor a sudor y sexo",
        "quien me lleva a la cama a darme lo mio",
        "estoy bien suelta y dispuesta a todo",
        "me fascina sentir como me abren las piernas",
        "quiero gemidos altos y golpes en la cama",
        "alguien para fundirnos en un abrazo cochino",
        "tengo unas ganas locas de morder almohadas",
        "me pone caliente pensar en ti desnudo",
        "quien se viene a estrenar este colchón",
        "estoy tremenda de ganas de sentirte dentro",
        "me encanta el sexo salvaje y sin censura",
        "quiero que me llenes de besos y de leche",
        "alguien con hambre de follar rico",
        "tengo el deseo a flor de piel y bien mojado",
        "me fascina que me dominen en la cama",
        "quiero una buena mamada hasta perder el conocimiento",
        "alguien disponible para pecar sin mirar atras",
        "tengo unas ansias locas de pecado nocturno",
        "me pone perra sentir la piel contra la mia",
        "quien me quita las ganas a punta de polvos",
        "estoy que me chupo los dedos de la tentacion",
        "me encanta que me toquen justo donde mas me gusta",
        "quiero acabar temblando y sin fuerzas",
        "alguien listo para una noche de desenfreno",
        "tengo el cuerpo entero pidiendo roce",
        "me vuelve loca la fricción y el calor",
        "quien se anota para una maraton de sexo",
        "estoy bien encendida esperando accion",
        "me fascina saborear un buen miembro",
        "quiero sentir cada latido muy adentro",
        "alguien con ganas de quemar las sábanas",
        "tengo unas ganas inmensas de follar rico",
        "me pone cachonda imaginarte sin ropa",
        "quien me hace temblar las piernas hoy",
        "estoy hirviendo de pura necesidad carnnal",
        "me encanta que me exploren sin apuro",
        "quiero una buena poronga que me haga alucinar",
        "alguien libre para pasarlo bien cochino",
        "tengo las bragas hechas un desastre",
        "me fascina el roce de la piel desnuda",
        "quiero acabar empapada de ti",
        "alguien con ganas de vaciarse rico",
        "tengo unas ganas locas de morder y chupar",
        "me pone perra la idea de pecar contigo"
    ],
    conexiones: {}
};

// Cargar memoria previa si existe en el disco
function cargarMemoria() {
    if (fs.existsSync(ARCHIVO_MEMORIA)) {
        try {
            const dataRaw = fs.readFileSync(ARCHIVO_MEMORIA, 'utf8');
            const parsed = JSON.parse(dataRaw);
            if (parsed.vocabulario && Array.isArray(parsed.vocabulario)) {
                cerebro.vocabulario = parsed.vocabulario;
            }
            if (parsed.conexiones && typeof parsed.conexiones === 'object') {
                cerebro.conexiones = parsed.conexiones;
            }
        } catch (error) {
            console.error("Error al cargar la memoria:", error.message);
        }
    } else {
        guardarMemoria();
    }
}

function guardarMemoria() {
    try {
        fs.writeFileSync(ARCHIVO_MEMORIA, JSON.stringify(cerebro, null, 2));
    } catch (error) {
        console.error("Error al guardar la memoria:", error.message);
    }
}

// Limpiar texto de signos formales pero conservar palabras
function limpiarTexto(texto) {
    if (!texto) return "";
    return texto
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?¡!""''«»]/g, '')
        .trim();
}

// Aprender palabras del chat de forma pasiva
function aprenderDelChat(contenido) {
    const textoLimpio = limpiarTexto(contenido);
    const tokens = textoLimpio.split(/\s+/).filter(t => t.length > 3);

    if (tokens.length === 0) return;

    for (let i = 0; i < tokens.length; i++) {
        const palabra = tokens[i];
        if (!cerebro.vocabulario.includes(palabra)) {
            cerebro.vocabulario.push(palabra);
        }

        if (i < tokens.length - 1) {
            const siguiente = tokens[i + 1];
            if (!cerebro.conexiones[palabra]) {
                cerebro.conexiones[palabra] = [];
            }
            if (!cerebro.conexiones[palabra].includes(siguiente)) {
                cerebro.conexiones[palabra].push(siguiente);
            }
        }
    }

    // Limitar tamaño para evitar sobrecarga
    if (cerebro.vocabulario.length > 4000) {
        cerebro.vocabulario.splice(0, 800);
    }

    guardarMemoria();
}

// Generador de frases combinadas
function generarFraseHot() {
    if (cerebro.vocabulario.length === 0) return "tengo muchas ganas de tener sexo";

    const usarFraseDirecta = Math.random() < 0.65;
    if (usarFraseDirecta) {
        const frasesBase = cerebro.vocabulario.filter(v => v.includes(" ") && v.length > 10);
        if (frasesBase.length > 0) {
            return frasesBase[Math.floor(Math.random() * frasesBase.length)];
        }
    }

    const palabraInicial = cerebro.vocabulario[Math.floor(Math.random() * cerebro.vocabulario.length)];
    let resultado = [palabraInicial];
    let actual = palabraInicial;

    for (let i = 0; i < 6; i++) {
        const alternativas = cerebro.conexiones[actual];
        if (!alternativas || alternativas.length === 0) break;
        actual = alternativas[Math.floor(Math.random() * alternativas.length)];
        resultado.push(actual);
    }

    return resultado.join(' ');
}

// Control de Cooldown de 5 segundos por canal
const cooldownsCanal = new Map();

function verificarCooldown(channelId) {
    if (!cooldownsCanal.has(channelId)) return false;
    return Date.now() < cooldownsCanal.get(channelId);
}

function activarCooldown(channelId) {
    cooldownsCanal.set(channelId, Date.now() + 5000); // 5 segundos exactos
    setTimeout(() => {
        cooldownsCanal.delete(channelId);
    }, 10000);
}

client.once('ready', () => {
    cargarMemoria();
    console.log(`[BOT HOT ACTIVO] Conectado como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    // Aprender pasivamente de lo que escriben los usuarios
    aprenderDelChat(message.content);

    const channelId = message.channel.id;
    const botMencionado = message.mentions.has(client.user);
    const probabilidadHablar = Math.random() < 0.35; // 35% de probabilidad para mayor dinamismo y cantidad de mensajes

    if (botMencionado || probabilidadHablar) {
        if (verificarCooldown(channelId)) return;
        activarCooldown(channelId);

        try {
            const fraseSeleccionada = generarFraseHot();
            
            // Envío natural y limpio, sin etiquetas forzadas a menos que lo mencionen directamente
            let respuestaFinal = fraseSeleccionada;
            if (botMencionado) {
                respuestaFinal = `${fraseSeleccionada} <@${message.author.id}>`;
            }
            
            await message.channel.send(respuestaFinal);
        } catch (error) {
            console.error("Error al enviar el mensaje:", error.message);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);