# 🔞 Hot Discord Bot — Neural Markov Engine

Un bot de Discord interactivo enfocado en una personalidad adulta (NSFW) no censurada, diseñado para simular conversaciones humanas fluidas, espontáneas y dinámicas dentro de la comunidad.

## 🚀 Características Principales

* **Procesamiento de Lenguaje Natural (Cadenas de Markov):** No utiliza respuestas estáticas repetitivas; aprende vocabulario continuamente del chat y construye oraciones dinámicas.
* **Memoria Persistente:** Guarda el léxico e interacciones aprendidas en `memoria_hot_bot.json` para mantener continuidad entre reinicios.
* **Menciones Dinámicas:** Responde etiquetando al usuario únicamente cuando es mencionado directamente; en intervenciones aleatorias responde de forma limpia y natural.
* **Control de Cooldown:** Sistema integrado de tiempo de espera (5 segundos por canal) para evitar spam o saturación de mensajes.
* **Integración Abierta:** Configuración nativa con `discord.js` (v14) e intenciones de lectura de mensajes de canal.

---

## 🛠️ Requisitos Previos

* **Node.js** (v16.x o superior)
* **npm** (Gestor de paquetes de Node)
* Una aplicación registrada en el [Discord Developer Portal](https://discord.com/developers/applications) con los siguientes **Privileged Gateway Intents** activados:
  * `PRESENCE INTENT`
  * `SERVER MEMBERS INTENT`
  * `MESSAGE CONTENT INTENT`

---

## 📦 Instalación

1. **Clonar o descargar el proyecto** en tu directorio local.
2. **Instalar dependencias:**
   ```bash
   npm install discord.js dotenv