<div align="center">
  <img src="public/favicon.svg" width="90" height="90" alt="Pampo Tech Logo" />
  <h1>Pampo Tech • Hub Corporativo</h1>
  <p><strong>Portal oficial e vitrine de ecossistema de soluções tecnológicas em produção.</strong></p>

  <p>
    <a href="https://pampo.tech"><img src="https://img.shields.io/badge/Status-100%25%20Online-10B981?style=for-the-badge&logo=statuspage" alt="Status Online" /></a>
    <img src="https://img.shields.io/badge/Docker-Multi--Container-2496ED?style=for-the-badge&logo=docker" alt="Docker" />
    <img src="https://img.shields.io/badge/Nginx-Reverse%20Proxy-009639?style=for-the-badge&logo=nginx" alt="Nginx" />
    <img src="https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions" alt="GitHub Actions" />
  </p>
</div>

---

## 🌟 Sobre o Projeto

O **Pampo Tech Hub** é a página inicial oficial da empresa Pampo Tech, centralizando todos os sistemas, microsserviços e aplicações hospedadas em nossa infraestrutura dedicada de alta performance.

### 📱 Aplicações em Produção

1. **FakeDC (Discord Clone)**
   - *Categoria:* Comunicação & Streaming
   - *URL:* https://jogosbolados.duckdns.org
   - *Stack:* Node.js, WebSockets, WebRTC, Electron, Aceleração GPU NVENC H.264
   - *Porta Host:* `:3050`

2. **RealClima**
   - *Categoria:* Meteorologia & Monitoramento
   - *URL:* https://realclima.pampo.tech
   - *Stack:* React, Vite, OpenWeather, Nginx Alpine, Leaflet
   - *Porta Host:* `:3060`

3. **LoGames**
   - *Categoria:* Jogos & Entretenimento
   - *URL:* https://logames.pampo.tech
   - *Stack:* React, JavaScript, HTML5 Canvas, WebSockets, Multiplayer
   - *Porta Host:* `:3070`

4. **Voice to Text (IA)**
   - *Categoria:* Inteligência Artificial & Áudio
   - *URL:* https://voz.pampo.tech
   - *Stack:* Whisper large-v3, Python FastAPI, Web Audio API
   - *Porta Host:* `:3080`

5. **FretFlow**
   - *Categoria:* Música & Educação
   - *URL:* https://fretflow.pampo.tech
   - *Stack:* React 19, TypeScript, Web Audio API, Canvas / SVG Fretboard
   - *Porta Host:* `:3090`

6. **Pampo Tech Hub (Este Portal)**
   - *Porta Host:* `:3100`

---

## 🛠️ Stack Tecnológica

- **Frontend:** React 19, TypeScript, Vite
- **Estilização:** Tailwind CSS v3 (Dark Mode exclusivo, glassmorphism e glow effects)
- **Componentes & Ícones:** Lucide React, Framer Motion, Canvas Confetti
- **Servidor Web:** Nginx Alpine com compressão Gzip e fallback SPA
- **Orquestração:** Docker Compose
- **Pipeline CI/CD:** GitHub Actions com SSH e auto-clone

---

## 💻 Desenvolvimento Local

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build
```

---

## 🚀 Deploy em Produção

Consulte o arquivo [`DEPLOY.md`](./DEPLOY.md) para o passo a passo completo de configuração dos secrets no GitHub e apontamento do Nginx na VPS.

---

<div align="center">
  <p>&copy; 2026 Pampo Tech • Todos os direitos reservados.</p>
</div>
