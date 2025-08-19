# 🎯 Componentes de Scroll Reveal

## 📋 Visão Geral

Este projeto inclui três componentes de scroll reveal baseados no [React Bits Scroll Reveal](https://reactbits.dev/text-animations/scroll-reveal), cada um com diferentes níveis de funcionalidade:

1. **ScrollReveal** - Componente básico para elementos únicos
2. **AdvancedScrollReveal** - Componente intermediário com controles avançados
3. **StaggeredScrollReveal** - Componente avançado com efeitos de stagger

## 🚀 Como Usar

### 1. ScrollReveal (Básico)

```tsx
import ScrollReveal from '../components/ScrollReveal'

<ScrollReveal 
  animation="fade-up"
  duration={800}
  delay={200}
  threshold={0.1}
>
  <h1>Seu título aqui</h1>
</ScrollReveal>
```

**Props:**
- `animation`: Tipo de animação (padrão: 'fade-up')
- `duration`: Duração da animação em ms (padrão: 800)
- `delay`: Delay antes da animação (padrão: 0)
- `threshold`: Threshold do Intersection Observer (padrão: 0.1)
- `rootMargin`: Margem do root (padrão: "0px 0px -50px 0px")
- `easing`: Função de easing (padrão: 'ease-out')

### 2. AdvancedScrollReveal (Intermediário)

```tsx
import AdvancedScrollReveal from '../components/AdvancedScrollReveal'

<AdvancedScrollReveal 
  animation="zoom-in"
  duration={1200}
  delay={500}
  threshold={0.2}
  triggerOnce={false}
>
  <div>Conteúdo avançado</div>
</AdvancedScrollReveal>
```

**Props Adicionais:**
- `triggerOnce`: Anima apenas uma vez (padrão: true)
- `stagger`: Delay entre elementos filhos (padrão: 0)
- `staggerChildren`: Ativa stagger nos filhos (padrão: false)

### 3. StaggeredScrollReveal (Avançado)

```tsx
import StaggeredScrollReveal from '../components/StaggeredScrollReveal'

<StaggeredScrollReveal 
  animation="fade-up"
  duration={1000}
  delay={300}
  stagger={150}
  staggerChildren={true}
>
  <div>Primeira linha</div>
  <div>Segunda linha</div>
  <div>Terceira linha</div>
</StaggeredScrollReveal>
```

**Props Especiais:**
- `stagger`: Delay entre cada filho em ms (padrão: 200)
- `staggerChildren`: Sempre true para este componente

## 🎨 Tipos de Animação

### **Fade Animations**
- `fade-up`: Aparece de baixo para cima
- `fade-down`: Aparece de cima para baixo
- `fade-left`: Aparece da direita para esquerda
- `fade-right`: Aparece da esquerda para direita

### **Scale Animations**
- `zoom-in`: Aparece com zoom de dentro para fora

### **Slide Animations**
- `slide-up`: Desliza de baixo para cima
- `slide-down`: Desliza de cima para baixo

## ⚙️ Configurações Recomendadas

### **Para Títulos Principais**
```tsx
<ScrollReveal 
  animation="fade-up"
  duration={1000}
  delay={300}
  threshold={0.3}
>
  <h1>Título Impactante</h1>
</ScrollReveal>
```

### **Para Múltiplas Linhas com Stagger**
```tsx
<StaggeredScrollReveal 
  animation="fade-up"
  duration={800}
  delay={200}
  stagger={150}
>
  <div>Linha 1</div>
  <div>Linha 2</div>
  <div>Linha 3</div>
</StaggeredScrollReveal>
```

### **Para Elementos de Destaque**
```tsx
<ScrollReveal 
  animation="zoom-in"
  duration={1200}
  delay={500}
  threshold={0.5}
>
  <div className="feature-card">Destaque</div>
</ScrollReveal>
```

## 🎭 Exemplos de Uso

### Exemplo 1: Título com Fade Up
```tsx
<ScrollReveal animation="fade-up" duration={1000} delay={200}>
  <h1 className="text-4xl font-bold text-blue-600">
    Transforme sua empresa
  </h1>
</ScrollReveal>
```

### Exemplo 2: Múltiplas Linhas com Stagger
```tsx
<StaggeredScrollReveal 
  animation="fade-up" 
  duration={800} 
  stagger={200}
>
  <h2 className="text-2xl">PRECISA DE</h2>
  <h2 className="text-2xl">ESTRUTURA</h2>
  <h2 className="text-2xl">PARA CRESCER</h2>
</StaggeredScrollReveal>
```

### Exemplo 3: Cards com Zoom In
```tsx
<ScrollReveal animation="zoom-in" duration={1000} delay={300}>
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3>Card de Destaque</h3>
    <p>Conteúdo do card...</p>
  </div>
</ScrollReveal>
```

## 🔧 Personalização Avançada

### **Easing Functions**
```tsx
// Easing padrão do CSS
<ScrollReveal easing="ease-out">...</ScrollReveal>
<ScrollReveal easing="ease-in">...</ScrollReveal>
<ScrollReveal easing="ease-in-out">...</ScrollReveal>

// Easing customizado
<ScrollReveal easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)">...</ScrollReveal>
```

### **Threshold Personalizado**
```tsx
// Anima quando 50% do elemento estiver visível
<ScrollReveal threshold={0.5}>...</ScrollReveal>

// Anima quando apenas 10% estiver visível
<ScrollReveal threshold={0.1}>...</ScrollReveal>
```

### **Root Margin**
```tsx
// Anima 100px antes do elemento entrar na tela
<ScrollReveal rootMargin="0px 0px -100px 0px">...</ScrollReveal>

// Anima quando elemento estiver 50px dentro da tela
<ScrollReveal rootMargin="0px 0px 50px 0px">...</ScrollReveal>
```

## 🎯 Casos de Uso Específicos

### **Landing Pages**
- Títulos principais com `fade-up`
- Seções com `fade-left` e `fade-right`
- CTAs com `zoom-in`

### **Blogs e Artigos**
- Títulos com `fade-up`
- Parágrafos com `fade-up` e stagger
- Imagens com `zoom-in`

### **Portfólios**
- Projetos com `fade-up` e stagger
- Skills com `fade-left` e `fade-right`
- Contato com `zoom-in`

## 🚨 Solução de Problemas

### **Animação Não Funciona**
- Verifique se o elemento está sendo renderizado
- Confirme se o threshold não é muito alto
- Verifique se o rootMargin está correto

### **Performance Lenta**
- Reduza a duração da animação
- Use `triggerOnce={true}` para elementos estáticos
- Evite muitas animações simultâneas

### **Hidratação**
- Todos os componentes já incluem proteção contra hidratação
- Usam `isMounted` para renderização consistente

## 🌟 Dicas de Uso

1. **Sequência**: Use `delay` para criar sequências de animação
2. **Stagger**: Use `stagger` para elementos relacionados
3. **Threshold**: Ajuste baseado na importância do elemento
4. **Performance**: Use `triggerOnce` para elementos estáticos
5. **Responsividade**: Teste em diferentes tamanhos de tela

## 📱 Compatibilidade

- ✅ **Next.js 15+**: Funciona perfeitamente
- ✅ **React 19**: Compatível com versões mais recentes
- ✅ **Intersection Observer API**: Suporte nativo
- ✅ **Todos os Navegadores**: Fallback para navegadores antigos
- ✅ **SSR/SSG**: Suporte completo para renderização no servidor

## 🔗 Inspirado em

- [React Bits Scroll Reveal](https://reactbits.dev/text-animations/scroll-reveal) - Efeitos de scroll reveal
- **Intersection Observer API**: Para detecção de visibilidade
- **CSS Transitions**: Para animações suaves
