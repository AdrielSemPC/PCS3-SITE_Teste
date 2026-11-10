# 🛡️ Protege 60+ (PCS3 - Proteção Digital)

> **Educação, conscientização e proteção contra golpes digitais para o público 60+.**

Projeto desenvolvido como parte da disciplina de **Práticas Curriculares III (PCS3)** do curso de **Bacharelado em Ciência da Computação** (5º Semestre).

---

## 📌 Sobre o Projeto

O avanço das tecnologias digitais e de meios de pagamento instantâneos (como o Pix) trouxe grande praticidade, mas também potencializou a atuação de cibercriminosos que visam pessoas em situação de maior vulnerabilidade, em especial o público idoso (60+).

O **Protege 60+** é uma plataforma educativa, simples e sem anúncios, criada com o propósito de capacitar pessoas idosas e seus familiares a:
- Reconhecer as fraudes e armadilhas virtuais mais comuns;
- Adotar hábitos seguros no uso de smartphones, aplicativos de mensagens e redes sociais;
- Agir com calma e assertividade caso sejam alvo de um golpe.

---

## 🚀 Funcionalidades Principais

* **📖 Catálogo de Golpes Digitais (`/golpes`):**  
  Detalhamento didático dos 10 principais golpes da atualidade (como clonagem de WhatsApp, golpe do falso parente, clonagem de voz por Inteligência Artificial, phishing/links falsos do INSS, falsas centrais telefônicas de bancos, empréstimos consignados indevidos, etc.) com sinais de alerta e formas de prevenção.

* **🎯 Regras de Ouro da Prevenção (`/regra-tripla`):**  
  Orientações práticas do cotidiano e a metodologia da **Regra Tripla**: *Parar, Desconfiar e Confirmar* antes de tomar qualquer decisão financeira ou compartilhar dados sob pressão.

* **🚨 Guia de Emergência / "Caí em um golpe, e agora?" (`/ajuda`):**  
  Roteiro de primeiros socorros digitais: cancelamento de transações com bancos (Mecanismo Especial de Devolução - MED), registro de Boletim de Ocorrência (BO), troca de senhas e canais oficiais de auxílio.

* **🎮 Jogos Educativos (`/jogos`):**  
  Espaço lúdico com quizzes e desafios interativos (integrados com Wordwall e Google Phishing Quiz) para estimular a atenção e reforçar o aprendizado de forma divertida.

* **🔊 Assistente de Leitura por Voz (Acessibilidade Universal):**  
  Ferramenta de síntese de voz (Web Speech API) integrada diretamente nas páginas informativas, otimizada com:
  - Velocidade confortável adaptada para idosos (0.95x) com voz em português do Brasil (pt-BR);
  - Algoritmo de fragmentação de sentenças (*sentence chunking*), garantindo reprodução contínua e sem travamentos em celulares (Android e iOS);
  - Controles intuitivos de **Ouvir**, **Pausar/Continuar** e **Parar**;
  - Filtragem inteligente que ignora botões, rodapés e elementos visuais, lendo apenas o conteúdo essencial.

* **📝 Formulário de Avaliação e Feedback:**  
  Coleta de sugestões e notas dos usuários conectada a um banco de dados na nuvem (Supabase) para melhoria contínua da experiência.

---

## 🛠️ Tecnologias Utilizadas

* **Framework Web:** [Next.js](https://nextjs.org/) (React 19 / App Router)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Backend / Banco de Dados:** [Supabase](https://supabase.com/)
* **Acessibilidade de Áudio:** Web Speech API nativa (com tratamento avançado para dispositivos móveis)

---

## 📁 Estrutura de Pastas

```text
├── app/
│   ├── ajuda/           # Página de primeiros socorros e denúncia
│   ├── golpes/          # Página detalhada sobre os golpes digitais
│   ├── jogos/           # Página com quizzes e jogos educativos
│   ├── regra-tripla/    # Página com boas práticas e a Regra Tripla
│   ├── globals.css      # Estilos globais e Tailwind CSS
│   ├── layout.jsx       # Layout raiz (HTML, body, Footer e BotLeitura)
│   └── page.jsx         # Página inicial (Home)
├── components/
│   ├── home/            # Seções da página inicial (Hero, Atalhos, Destaques)
│   ├── layout/          # Componentes estruturais (Footer, etc.)
│   └── ui/              # Componentes de interface (BotLeitura, AvaliacaoForm)
├── public/              # Imagens e ativos estáticos
└── package.json         # Dependências e scripts do projeto
```

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
* Node.js (versão 18 ou superior)
* Gerenciador de pacotes `npm` ou `yarn`

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd PCS3-SITE
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

---

## 📄 Licença e Aviso Legal

Este é um projeto acadêmico com finalidade puramente **educativa e comunitária**.  
Em situações reais de golpe ou ameaça imediata, procure a Polícia Civil ou ligue para o **190**.
