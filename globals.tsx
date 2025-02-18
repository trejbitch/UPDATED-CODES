@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Force white background */
:root {
  --background: 0 0% 100%;
  background-color: white !important;
  background: white !important;
}

html,
body {
  background-color: white !important;
  background: white !important;
  min-height: 100vh;
}

@layer base {
  :root {
    --font-primary: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    /* Color System */
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 271 95% 38%;
    --primary-foreground: 0 0% 98%;
    --secondary: 45 93% 55%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 45 93% 55%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 271 95% 38%;
    --radius: 1rem;
    
    /* Custom Theme Colors */
    --metric-card: 45 93% 55%;
    --metric-border: 271 95% 38%;
    --purple-button: 271 95% 38%;
    --yellow-highlight: 45 93% 55%;
    --chart-1: 271 95% 38%;
    --chart-2: 45 93% 55%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }

  * {
    @apply border-border;
  }

  body {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @apply bg-background text-foreground;
  }

  /* Only timer-related elements should be transparent */
  [data-embed-overlay="true"] {
    background: transparent !important;
    background-color: transparent !important;
  }

  .timer-page {
    background: transparent !important;
    background-color: transparent !important;
  }

  .timer-wrapper {
    background: transparent !important;
    background-color: transparent !important;
    backdrop-filter: none !important;
  }
}

/* Modern Typography System */
@layer components {
  .headline { @apply text-4xl leading-tight tracking-tight; }
  .subheadline { @apply text-3xl leading-snug tracking-tight; }
  .title { @apply text-2xl leading-normal; }
  .subtitle { @apply text-xl leading-relaxed; }
  .body-large { @apply text-lg leading-relaxed; }
  .body { @apply text-base leading-normal; }
  .body-small { @apply text-sm leading-normal; }
  .caption { @apply text-xs leading-normal; }
}

/* Enhanced Scrollbar Styling */
@layer utilities {
  /* Global scrollbar style */
  * {
    scrollbar-width: thin;
    scrollbar-color: #5b06be transparent;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    margin: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #5b06be;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4a05a0;
  }

  /* Custom utility classes */
  .metric-card {
    @apply bg-[#f8b922] border-[#5b06be] border rounded-xl p-4 transition-all hover:shadow-md;
  }

  .purple-button {
    @apply bg-[#5b06be] text-white hover:bg-[#5b06be]/90 transition-all;
  }

  .yellow-highlight {
    @apply bg-[#f8b922] text-[#5b06be] font-semibold;
  }
}

/* Animation System */
@keyframes in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-in {
  animation: in 0.2s ease-out;
}

.animate-heartbeat {
  animation: heartbeat 1s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes chartLoad {
  0% {
    opacity: 0;
    transform: scale(0.98) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes gradientAppear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.chart-animate {
  animation: chartLoad 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.chart-gradient {
  animation: gradientAppear 0.8s ease-out forwards;
}

/* Force white background for specific elements */
.embed-view {
  --background: 0 0% 100%;
  background-color: white !important;
  background: white !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Layout Utilities */
.dynamic-height-container {
  min-height: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white !important;
}

.dynamic-height-content {
  flex: 1 1 auto;
  overflow-y: auto;
  background-color: white !important;
}
