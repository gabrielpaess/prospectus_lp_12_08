# 🎯 Componentes de Animação de Typing

## 📋 Visão Geral

Este projeto inclui três componentes de animação de typing, cada um com diferentes níveis de funcionalidade:

1. **TypewriterText** - Componente básico para uma única linha
2. **AdvancedTypewriter** - Componente intermediário para múltiplas linhas
3. **EliteTypewriter** - Componente avançado com controles especiais

## 🚀 Como Usar

### 1. TypewriterText (Básico)

```tsx
import TypewriterText from '../components/TypewriterText'

<TypewriterText 
  text="Seu texto aqui"
  speed={100}
  delay={500}
  className="text-2xl font-bold"
/>
```

**Props:**
- `text`: Texto a ser digitado
- `speed`: Velocidade da digitação (ms)
- `delay`: Delay inicial (ms)
- `className`: Classes CSS adicionais
- `onComplete`: Callback quando terminar
- `cursor`: Mostrar cursor (padrão: true)
- `cursorBlink`: Cursor piscante (padrão: true)

### 2. AdvancedTypewriter (Intermediário)

```tsx
import AdvancedTypewriter from '../components/AdvancedTypewriter'

<AdvancedTypewriter 
  lines={["Linha 1", "Linha 2", "Linha 3"]}
  speed={80}
  delay={1000}
  lineDelay={300}
  className="text-2xl font-bold"
/>
```

**Props:**
- `lines`: Array de strings para cada linha
- `speed`: Velocidade da digitação (ms)
- `delay`: Delay inicial (ms)
- `lineDelay`: Delay entre linhas (ms)
- `className`: Classes CSS adicionais
- `onComplete`: Callback quando terminar
- `cursor`: Mostrar cursor (padrão: true)
- `cursorBlink`: Cursor piscante (padrão: true)

### 3. EliteTypewriter (Avançado)

```tsx
import EliteTypewriter from '../components/EliteTypewriter'

<EliteTypewriter 
  lines={[
    { text: "Linha 1", speed: 60, pauseAfter: 100 },
    { text: "Linha 2", speed: 80, pauseAfter: 200 },
    { text: "Linha 3", speed: 100, pauseAfter: 0 }
  ]}
  initialDelay={1000}
  className="text-2xl font-bold"
/>
```

**Props:**
- `lines`: Array de objetos com configurações por linha
  - `text`: Texto da linha
  - `speed`: Velocidade específica da linha (ms)
  - `pauseAfter`: Pausa após a linha (ms)
- `initialDelay`: Delay inicial (ms)
- `className`: Classes CSS adicionais
- `onComplete`: Callback quando terminar
- `cursor`: Mostrar cursor (padrão: true)
- `cursorBlink`: Cursor piscante (padrão: true)
- `soundEffect`: Efeito sonoro (padrão: false)

## 🎨 Exemplos de Uso

### Exemplo 1: Título Simples

```tsx
<h1 className="text-4xl font-bold text-blue-600">
  <TypewriterText 
    text="Bem-vindo ao Futuro"
    speed={80}
    delay={500}
  />
</h1>
```

### Exemplo 2: Subtítulo com Múltiplas Linhas

```tsx
<h2 className="text-2xl font-semibold text-gray-700">
  <AdvancedTypewriter 
    lines={[
      "Transforme sua empresa",
      "com estratégias inovadoras",
      "e resultados reais"
    ]}
    speed={60}
    delay={1000}
    lineDelay={200}
  />
</h2>
```

### Exemplo 3: Título Principal com Controles Avançados

```tsx
<h1 className="text-6xl font-bold text-orange-500">
  <EliteTypewriter 
    lines={[
      { text: "CRESCIMENTO", speed: 50, pauseAfter: 300 },
      { text: "EXPONENCIAL", speed: 50, pauseAfter: 200 },
      { text: "GARANTIDO", speed: 50, pauseAfter: 0 }
    ]}
    initialDelay={800}
    onComplete={() => console.log('Título completo!')}
  />
</h1>
```

## ⚙️ Configurações Recomendadas

### Para Títulos Principais
```tsx
speed={50-80}        // Rápido e impactante
delay={500-1000}     // Delay para chamar atenção
lineDelay={200-300}  // Pausa entre linhas
```

### Para Subtítulos
```tsx
speed={80-120}       // Velocidade moderada
delay={1000-1500}    // Delay após título principal
lineDelay={150-250}  // Pausa sutil entre linhas
```

### Para Textos Explicativos
```tsx
speed={100-150}      // Velocidade mais lenta
delay={2000+}        // Delay maior para não competir
lineDelay={100-200}  // Pausa mínima entre linhas
```

## 🎭 Efeitos Visuais

### Cursor Piscante
- **Padrão**: Cursor que pisca a cada 500ms
- **Customização**: Pode ser desabilitado
- **Estilo**: Usa `animate-pulse` do Tailwind

### Transições Suaves
- **Caracteres**: Aparecem um por vez
- **Linhas**: Transição suave entre linhas
- **Performance**: Otimizado com `useEffect`

## 🔧 Personalização Avançada

### Callback de Conclusão
```tsx
<EliteTypewriter 
  lines={["Texto aqui"]}
  onComplete={() => {
    // Executar ação quando terminar
    setShowButton(true)
    playSound()
  }}
/>
```

### Controle de Velocidade por Linha
```tsx
<EliteTypewriter 
  lines={[
    { text: "Rápido", speed: 30 },
    { text: "Médio", speed: 80 },
    { text: "Lento", speed: 150 }
  ]}
/>
```

### Pausas Estratégicas
```tsx
<EliteTypewriter 
  lines={[
    { text: "Pausa curta", pauseAfter: 100 },
    { text: "Pausa média", pauseAfter: 300 },
    { text: "Sem pausa", pauseAfter: 0 }
  ]}
/>
```

## 🚨 Solução de Problemas

### Texto Não Aparece
- Verifique se o componente está sendo renderizado
- Confirme se não há erros no console
- Verifique se as props estão corretas

### Performance Lenta
- Reduza a velocidade (`speed`)
- Aumente o delay entre linhas (`lineDelay`)
- Use menos linhas se necessário

### Cursor Não Pisca
- Verifique se `cursor={true}`
- Confirme se `cursorBlink={true}`
- Verifique se não há conflitos CSS

## 🌟 Dicas de Uso

1. **Sequência**: Use `delay` para criar sequências de animação
2. **Velocidade**: Ajuste `speed` baseado na importância do texto
3. **Pausas**: Use `pauseAfter` para criar ritmo na leitura
4. **Responsividade**: Teste em diferentes tamanhos de tela
5. **Acessibilidade**: Considere usuários que preferem menos animação

## 📱 Compatibilidade

- ✅ React 18+
- ✅ Next.js 13+
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Todos os navegadores modernos
- ✅ Dispositivos móveis
