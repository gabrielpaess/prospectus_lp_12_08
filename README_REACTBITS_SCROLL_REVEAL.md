# 🎯 React Bits Scroll Reveal

## 📋 Visão Geral

Este projeto implementa o componente Scroll Reveal do [React Bits](https://reactbits.dev/text-animations/scroll-reveal) com efeitos avançados de blur, rotação e stagger. O componente oferece animações suaves e profissionais baseadas no Intersection Observer API.

## 🚀 Instalação

### **Método 1: CLI jsrepo (Recomendado)**
```bash
npx jsrepo add https://reactbits.dev/ts/tailwind/TextAnimations/ScrollReveal
```

### **Método 2: Componente Customizado**
O componente já está implementado em `components/ReactBitsScrollReveal.tsx`

## 🎨 Como Usar

### **Scroll Reveal Básico**
```tsx
import ReactBitsScrollReveal from '../components/ReactBitsScrollReveal'

<ReactBitsScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  <h1>Seu título aqui</h1>
</ReactBitsScrollReveal>
```

### **Scroll Reveal com Stagger (Múltiplas Linhas)**
```tsx
import ReactBitsStaggeredScrollReveal from '../components/ReactBitsStaggeredScrollReveal'

<ReactBitsStaggeredScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  stagger={200}
  staggerChildren={true}
>
  <div>Primeira linha</div>
  <div>Segunda linha</div>
  <div>Terceira linha</div>
</ReactBitsStaggeredScrollReveal>
```

## ⚙️ Props Disponíveis

### **Props Principais**
- `baseOpacity`: Opacidade inicial (padrão: 0)
- `enableBlur`: Ativa efeito de blur (padrão: true)
- `baseRotation`: Rotação inicial em graus (padrão: 5)
- `blurStrength`: Intensidade do blur em px (padrão: 10)

### **Props de Animação**
- `duration`: Duração da animação em ms (padrão: 1000)
- `delay`: Delay antes da animação (padrão: 0)
- `easing`: Função de easing (padrão: "cubic-bezier(0.25, 0.46, 0.45, 0.94)")

### **Props de Intersection Observer**
- `threshold`: Threshold de visibilidade (padrão: 0.1)
- `rootMargin`: Margem do root (padrão: "0px 0px -50px 0px")

### **Props de Stagger (Apenas StaggeredScrollReveal)**
- `stagger`: Delay entre elementos filhos em ms (padrão: 200)
- `staggerChildren`: Ativa stagger nos filhos (padrão: true)

## 🎭 Exemplos de Uso

### **Exemplo 1: Título Principal**
```tsx
<ReactBitsScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  duration={1200}
  delay={200}
>
  <h1 className="text-6xl font-bold text-blue-600">
    Transforme sua empresa
  </h1>
</ReactBitsScrollReveal>
```

### **Exemplo 2: Múltiplas Linhas com Stagger**
```tsx
<ReactBitsStaggeredScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={3}
  blurStrength={8}
  duration={1000}
  delay={500}
  stagger={200}
>
  <div>When does a man die?</div>
  <div>When he is hit by a bullet? No!</div>
  <div>When he suffers a disease? No!</div>
  <div>A man dies when he is forgotten!</div>
</ReactBitsStaggeredScrollReveal>
```

### **Exemplo 3: Cards com Efeitos Suaves**
```tsx
<ReactBitsScrollReveal
  baseOpacity={0}
  enableBlur={false}
  baseRotation={2}
  blurStrength={0}
  duration={800}
  delay={300}
>
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3>Card de Destaque</h3>
    <p>Conteúdo do card...</p>
  </div>
</ReactBitsScrollReveal>
```

## 🎨 Configurações Recomendadas

### **Para Títulos Principais**
```tsx
baseOpacity={0}
enableBlur={true}
baseRotation={5}
blurStrength={10}
duration={1200}
delay={200}
```

### **Para Subtítulos**
```tsx
baseOpacity={0}
enableBlur={true}
baseRotation={3}
blurStrength={8}
duration={1000}
delay={300}
```

### **Para Texto com Stagger**
```tsx
baseOpacity={0}
enableBlur={true}
baseRotation={2}
blurStrength={6}
duration={800}
delay={100}
stagger={150}
```

### **Para Elementos de Destaque**
```tsx
baseOpacity={0}
enableBlur={false}
baseRotation={0}
blurStrength={0}
duration={600}
delay={0}
```

## 🔧 Personalização Avançada

### **Easing Functions**
```tsx
// Easing padrão do React Bits
easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"

// Easing personalizado
easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
easing="ease-out"
easing="ease-in-out"
```

### **Efeitos de Blur**
```tsx
// Blur sutil
enableBlur={true}
blurStrength={5}

// Blur intenso
enableBlur={true}
blurStrength={15}

// Sem blur
enableBlur={false}
blurStrength={0}
```

### **Rotação Personalizada**
```tsx
// Rotação sutil
baseRotation={2}

// Rotação moderada
baseRotation={5}

// Rotação dramática
baseRotation={10}

// Sem rotação
baseRotation={0}
```

## 🎯 Casos de Uso Específicos

### **Landing Pages**
- **Títulos**: `baseRotation={5}`, `blurStrength={10}`
- **Subtítulos**: `baseRotation={3}`, `blurStrength={8}`
- **CTAs**: `baseRotation={0}`, `blurStrength={0}`

### **Blogs e Artigos**
- **Títulos**: `baseRotation={3}`, `blurStrength={6}`
- **Parágrafos**: `stagger={200}`, `blurStrength={4}`
- **Imagens**: `baseRotation={2}`, `blurStrength={5}`

### **Portfólios**
- **Projetos**: `stagger={150}`, `blurStrength={8}`
- **Skills**: `baseRotation={5}`, `blurStrength={10}`
- **Contato**: `baseRotation={0}`, `blurStrength={0}`

## 🚨 Solução de Problemas

### **Animação Não Funciona**
- Verifique se o elemento está sendo renderizado
- Confirme se o threshold não é muito alto
- Verifique se o rootMargin está correto
- Confirme se o componente está montado

### **Performance Lenta**
- Reduza a duração da animação
- Diminua o blurStrength se necessário
- Use valores menores para baseRotation
- Evite muitas animações simultâneas

### **Efeitos Muito Intensos**
- Reduza `blurStrength` para valores menores
- Diminua `baseRotation` para rotações sutis
- Ajuste `baseOpacity` para transições mais suaves

## 🌟 Dicas de Uso

1. **Blur**: Use para criar profundidade e foco
2. **Rotação**: Use para adicionar dinamismo
3. **Stagger**: Use para elementos relacionados
4. **Threshold**: Ajuste baseado na importância
5. **Performance**: Balanceie efeitos com performance

## 📱 Compatibilidade

- ✅ **Next.js 15+**: Funciona perfeitamente
- ✅ **React 19**: Compatível com versões mais recentes
- ✅ **Intersection Observer API**: Suporte nativo
- ✅ **Todos os Navegadores**: Fallback para navegadores antigos
- ✅ **SSR/SSG**: Suporte completo para renderização no servidor

## 🔗 Inspirado em

- [React Bits Scroll Reveal](https://reactbits.dev/text-animations/scroll-reveal) - Componente oficial
- **Intersection Observer API**: Para detecção de visibilidade
- **CSS Transitions**: Para animações suaves
- **GSAP**: Para efeitos avançados (opcional)

## 📚 Recursos Adicionais

- **Documentação Oficial**: [reactbits.dev](https://reactbits.dev)
- **Exemplos**: [reactbits.dev/text-animations/scroll-reveal](https://reactbits.dev/text-animations/scroll-reveal)
- **CLI**: `npx jsrepo add [url]`
- **Comunidade**: GitHub e Discord do React Bits
