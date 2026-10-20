export type AppCategory = 
  | 'Todos'
  | 'Comunicação'
  | 'Inteligência Artificial'
  | 'Música & Educação'
  | 'Meteorologia'
  | 'Jogos';

export type AppStatus = 'online' | 'maintenance' | 'degraded' | 'offline';

export interface AppArchitecture {
  container: string;
  hostPort?: string;
  proxy: string;
  ssl: string;
  stackFrontend: string;
  stackBackend?: string;
}

export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  category: AppCategory;
  description: string;
  longDescription: string;
  url: string;
  tags: string[];
  status: AppStatus;
  statusLabel: string;
  uptime: string;
  latencyAvg: string;
  version: string;
  icon: 'Radio' | 'CloudSun' | 'Gamepad2' | 'Mic' | 'Music' | 'Truck' | 'Cpu' | 'Server';
  gradient: {
    from: string;
    to: string;
    glow: string;
    border: string;
    textGradient: string;
  };
  features: string[];
  architecture: AppArchitecture;
  featured?: boolean;
}

export const CATEGORIES: AppCategory[] = [
  'Todos',
  'Comunicação',
  'Inteligência Artificial',
  'Música & Educação',
  'Meteorologia',
  'Jogos',
];

export const APPS: AppItem[] = [
  {
    id: 'fakedc',
    name: 'FakeDC (Discord Clone)',
    tagline: 'Comunicação em tempo real com aceleração NVENC e cliente Desktop',
    category: 'Comunicação',
    description: 'Plataforma de comunicação em tempo real com canais de voz, chat, bot de música e streaming de tela com aceleração GPU (H.264/NVENC) e cliente desktop Electron.',
    longDescription: 'O FakeDC é uma plataforma proprietária de alta fidelidade para comunicação corporativa e gaming. Desenvolvido com arquitetura descentralizada de WebSockets e WebRTC, suporta canais de áudio de ultrabaixa latência (Opus codec 48kHz), compartilhamento de tela com captura por aceleração de hardware GPU (NVIDIA NVENC H.264) a 60 FPS, além de cliente nativo empacotado para Windows/Linux via Electron.',
    url: 'https://jogosbolados.duckdns.org',
    tags: ['Node.js', 'WebRTC', 'Electron', 'Socket.io', 'GPU Accelerated', 'Opus Audio'],
    status: 'online',
    statusLabel: 'Operacional',
    uptime: '99.98%',
    latencyAvg: '12ms',
    version: 'v2.8.4',
    icon: 'Radio',
    gradient: {
      from: 'from-violet-600',
      to: 'to-indigo-600',
      glow: 'rgba(124, 58, 237, 0.4)',
      border: 'hover:border-violet-500/50',
      textGradient: 'from-violet-400 via-indigo-300 to-white',
    },
    features: [
      'Canais de voz dinâmicos com codec Opus e cancelamento de ruído por IA',
      'Streaming de tela com bitrate adaptativo e aceleração por hardware GPU',
      'Bot de streaming e player de áudio integrado com sincronização multicanal',
      'Cliente multiplataforma desktop com Electron e auto-update',
      'Isolamento total com tráfego criptografado ponta a ponta (E2EE/TLS)'
    ],
    architecture: {
      container: 'fakedc-engine',
      hostPort: '3050',
      proxy: 'Nginx Reverse Proxy (SSL Let\'s Encrypt)',
      ssl: 'TLSv1.3 Certificado Ativo',
      stackFrontend: 'React 19, Tailwind CSS, Electron, WebRTC SDK',
      stackBackend: 'Node.js 20, Socket.io, Redis Pub/Sub, FFmpeg NVENC',
    },
    featured: true,
  },
  {
    id: 'realclima',
    name: 'RealClima',
    tagline: 'Monitoramento meteorológico e radar de tempestades em tempo real',
    category: 'Meteorologia',
    description: 'Sistema avançado de previsão climática, radares meteorológicos e alertas atmosféricos em tempo real com interface interativa.',
    longDescription: 'O RealClima oferece telemetria meteorológica de precisão, combinando modelos preditivos globais, mapas de radar Doppler dinâmicos, índices UV e monitoramento de tempestades severas. Construído sobre uma arquitetura SPA ultraveloz com caching inteligente no Nginx e sincronização em tempo real de APIs meteorológicas de alta resolução.',
    url: 'https://realclima.pampo.tech',
    tags: ['React', 'Vite', 'OpenWeather', 'Nginx', 'SPA', 'Leaflet Radar'],
    status: 'online',
    statusLabel: 'Operacional',
    uptime: '99.99%',
    latencyAvg: '16ms',
    version: 'v1.6.2',
    icon: 'CloudSun',
    gradient: {
      from: 'from-cyan-500',
      to: 'to-blue-600',
      glow: 'rgba(6, 182, 212, 0.4)',
      border: 'hover:border-cyan-500/50',
      textGradient: 'from-cyan-300 via-sky-200 to-white',
    },
    features: [
      'Radar meteorológico interativo com camadas de vento, chuva e pressão barométrica',
      'Previsão horária de 72 horas e projeções climáticas estendidas para 15 dias',
      'Alertas atmosféricos automáticos para frentes frias, geadas e temporais',
      'Geolocalização automática com cache local offline via PWA',
      'Carregamento instantâneo via bundle Vite otimizado em Nginx Alpine'
    ],
    architecture: {
      container: 'realclima-web',
      hostPort: '3060',
      proxy: 'Nginx Reverse Proxy com Gzip & HTTP/2',
      ssl: 'Let\'s Encrypt Wildcard (*.pampo.tech)',
      stackFrontend: 'React 19, Vite, Tailwind CSS, Leaflet Maps',
      stackBackend: 'OpenWeather OneCall 3.0 API, Edge Caching',
    },
    featured: true,
  },
  {
    id: 'voice-to-text',
    name: 'Voice to Text (IA)',
    tagline: 'Transcrição neural de áudio e inteligência linguística em tempo real',
    category: 'Inteligência Artificial',
    description: 'Ferramenta inteligente de transcrição de áudio em tempo real com alta precisão e processamento neural de linguagem.',
    longDescription: 'Motor corporativo de reconhecimento de voz alimentado por modelos neurais Whisper de última geração. Capaz de realizar transcrição de gravações longas, áudios de reuniões e ditado em tempo real com pontuação inteligente, diarização de locutores e tradução simultânea em mais de 50 idiomas.',
    url: 'https://voz.pampo.tech',
    tags: ['AI', 'Whisper', 'Python/Node', 'Fast Processing', 'Transformers', 'NLP'],
    status: 'online',
    statusLabel: 'Operacional',
    uptime: '99.95%',
    latencyAvg: '24ms',
    version: 'v2.1.0',
    icon: 'Mic',
    gradient: {
      from: 'from-fuchsia-600',
      to: 'to-pink-600',
      glow: 'rgba(217, 70, 239, 0.4)',
      border: 'hover:border-fuchsia-500/50',
      textGradient: 'from-fuchsia-300 via-pink-200 to-white',
    },
    features: [
      'Transcrição de áudio e vídeo com modelo Whisper large-v3 otimizado',
      'Diarização inteligente para identificação automática de quem está falando',
      'Processamento de microfone em tempo real e upload de arquivos grandes (.wav, .mp3, .m4a)',
      'Exportação instantânea em formatos SRT, VTT, Markdown e PDF formatado',
      'API REST privada com chaves de acesso para integração em novos sistemas'
    ],
    architecture: {
      container: 'pampo-whisper-ai',
      hostPort: '3080',
      proxy: 'Nginx Reverse Proxy com buffering desativado para streaming',
      ssl: 'TLSv1.3 Let\'s Encrypt (voz.pampo.tech)',
      stackFrontend: 'Next.js / React, Tailwind, Web Audio API',
      stackBackend: 'Python FastAPI, PyTorch, Whisper ONNX Runtime',
    },
    featured: true,
  },
  {
    id: 'fretflow',
    name: 'FretFlow',
    tagline: 'Plataforma interativa para estudo, treino e domínio do braço da guitarra',
    category: 'Música & Educação',
    description: 'Plataforma interativa para estudo e treino de guitarra, visualização dinâmica de escalas, acordes, campo harmônico e treino auditivo no braço do instrumento (fretboard).',
    longDescription: 'O FretFlow é um ecossistema completo para guitarristas e estudantes de música. Oferece visualização dinâmica de escalas pentatônicas, modos gregos, arpejos e formação de tríades e tétrades ao longo de todo o braço da guitarra (fretboard), além de metrônomo programável, faixas de apoio (backing tracks) e exercícios práticos de percepção musical e agilidade.',
    url: 'https://fretflow.pampo.tech',
    tags: ['Guitar', 'Music Theory', 'Fretboard', 'Audio Engine', 'CAGED System', 'Interactive Web'],
    status: 'online',
    statusLabel: 'Operacional',
    uptime: '99.97%',
    latencyAvg: '18ms',
    version: 'v2.2.0',
    icon: 'Music',
    gradient: {
      from: 'from-amber-500',
      to: 'to-rose-600',
      glow: 'rgba(245, 158, 11, 0.4)',
      border: 'hover:border-amber-500/50',
      textGradient: 'from-amber-300 via-orange-200 to-white',
    },
    features: [
      'Mapeamento interativo de todas as notas, escalas e modos gregos no braço da guitarra',
      'Dicionário visual de acordes com sistema CAGED e inversões de tríades/tétrades',
      'Exercícios práticos de memorização de notas e intervalos com feedback em tempo real',
      'Metrônomo inteligente programável com subdivisões rítmicas e acelerômetro de treino',
      'Player de backing tracks integrado com indicação de tonalidades recomendadas para improviso'
    ],
    architecture: {
      container: 'fretflow-web',
      hostPort: '3090',
      proxy: 'Nginx Reverse Proxy com SSL Seguro',
      ssl: 'Let\'s Encrypt Automated Renewal',
      stackFrontend: 'React 19, TypeScript, Web Audio API, Canvas / SVG Fretboard',
      stackBackend: 'Node.js, Audio Engine, Realtime Metronome',
    },
    featured: true,
  },
  {
    id: 'logames',
    name: 'LoGames',
    tagline: 'Portal gamer, notícias do cenário de esports e jogos interativos',
    category: 'Jogos',
    description: 'Portal e ecossistema de jogos, notícias gamers e catálogo de títulos com integração multijogador.',
    longDescription: 'O LoGames centraliza o ecossistema gamer da Pampo Tech. Inclui feeds de notícias dos principais títulos de eSports, biblioteca de minigames interativos online, sistema de tabelas de pontuação global com websockets e integração de login com contas FakeDC e Steam.',
    url: 'https://logames.pampo.tech',
    tags: ['Web', 'Gaming', 'JavaScript', 'Fullstack', 'WebSockets', 'HTML5 Canvas'],
    status: 'online',
    statusLabel: 'Operacional',
    uptime: '99.94%',
    latencyAvg: '20ms',
    version: 'v1.4.5',
    icon: 'Gamepad2',
    gradient: {
      from: 'from-emerald-500',
      to: 'to-teal-600',
      glow: 'rgba(16, 185, 129, 0.4)',
      border: 'hover:border-emerald-500/50',
      textGradient: 'from-emerald-300 via-teal-200 to-white',
    },
    features: [
      'Catálogo completo de jogos casuais e web com suporte a gamepads',
      'Feed automatizado de notícias gamers e lançamentos com filtros',
      'Salas multiplayer leves com sincronização peer-to-peer e WebSockets',
      'Ranking competitivo em tempo real com recompensas virtuais',
      'Compatível com navegadores mobile e controles Bluetooth'
    ],
    architecture: {
      container: 'logames-portal',
      hostPort: '3070',
      proxy: 'Nginx Reverse Proxy (logames.pampo.tech)',
      ssl: 'Let\'s Encrypt SSL/TLS Seguro',
      stackFrontend: 'React 19, HTML5 Canvas, Phaser Engine, Tailwind CSS',
      stackBackend: 'Node.js Express, Socket.io, MongoDB / Redis Leaderboards',
    },
    featured: false,
  },
];

export interface SystemMetric {
  label: string;
  value: string;
  subtext: string;
  change?: string;
  changeType?: 'positive' | 'neutral';
}

export const SYSTEM_METRICS: SystemMetric[] = [
  {
    label: 'Aplicações Ativas',
    value: '5',
    subtext: 'Serviços em produção',
    change: '100% Online',
    changeType: 'positive',
  },
  {
    label: 'Uptime Global',
    value: '99.98%',
    subtext: 'Últimos 90 dias',
    change: 'Alta Confiabilidade',
    changeType: 'positive',
  },
  {
    label: 'Deploy Contínuo',
    value: 'Zero-Downtime',
    subtext: 'GitHub Actions CI/CD',
    change: 'Automático',
    changeType: 'positive',
  },
  {
    label: 'Infraestrutura',
    value: 'Linux + Docker',
    subtext: 'Isolamento em Containers',
    change: 'Nginx + SSL',
    changeType: 'positive',
  },
];

export const INFRA_FEATURES = [
  {
    title: 'VPS Dedicada de Alta Performance',
    description: 'Servidor Linux com kernel otimizado para I/O rápido, baixa latência de rede no Brasil e estabilidade contínua.',
    badge: 'Linux Dedicated Node',
  },
  {
    title: 'Isolamento Multi-Container com Docker',
    description: 'Cada aplicação opera em seu próprio container com recursos alocados, redes virtuais dedicadas e reinício automático.',
    badge: 'Docker Compose',
  },
  {
    title: 'Nginx Reverse Proxy & HTTP/2',
    description: 'Roteamento dinâmico por Hostname / SNI, compressão Gzip avançada e terminação de conexões seguras.',
    badge: 'Nginx Edge',
  },
  {
    title: 'Criptografia SSL Let\'s Encrypt',
    description: 'Certificados TLSv1.3 gratuitos com renovação automática periódica para todos os subdomínios *.pampo.tech.',
    badge: 'TLS 1.3 / A+ Rating',
  },
  {
    title: 'Pipeline CI/CD com GitHub Actions',
    description: 'Deploy automatizado a cada push na branch main com SSH seguro e validação de containers em tempo real.',
    badge: 'CI/CD Pipeline',
  },
  {
    title: 'Aceleração por Hardware & WebSockets',
    description: 'Suporte a aceleração GPU (H.264/NVENC) para streaming de vídeo no FakeDC e WebRTC bidirecional sem atrasos.',
    badge: 'WebRTC & GPU NVENC',
  },
];
