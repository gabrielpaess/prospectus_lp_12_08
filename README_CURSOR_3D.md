# Cursor 3D - Componente Avançado com Efeitos Fluid Glass e Splash

## 🎯 Como Usar

### 1. Importar o Componente

```tsx
import Cursor3DLens from './components/Cursor3DLens'
```

### 2. Implementação na Página

```tsx
export default function MinhaPagina() {
  return (
    <div>
      {/* Seu conteúdo da página aqui */}
      <h1>Minha Página</h1>
      <p>Conteúdo da página...</p>
      
      {/* Cursor 3D com efeitos avançados */}
      <Cursor3DLens 
        scale={1.2}
        color="#ffffff"
        blur={0.5}
        fluidEffect={true}
        splashEffect={true}
      />
    </div>
  )
}
```

## 🔧 Propriedades Configuráveis

### **Cursor3DLens Props**
- `scale`: Tamanho da lente (padrão: 1)
- `color`: Cor da lente (padrão: '#ffffff')
- `blur`: Efeito de blur (padrão: 0)
- `fluidEffect`: Ativa efeitos de vidro fluido (padrão: true)
- `splashEffect`: Ativa efeitos de splash (padrão: true)

## ✨ Características Avançadas

### **🎨 Fluid Glass Effect**
- **Distorção Dinâmica**: A lente se deforma baseada na velocidade do mouse
- **Backdrop Filters**: Efeitos de blur e saturação dinâmicos
- **Reflexões Adaptativas**: Brilhos que mudam com o movimento
- **Escala Dinâmica**: Tamanho que varia com a intensidade do movimento

### **💧 Splash Cursor Effect**
- **Partículas de Velocidade**: Pontos que aparecem durante movimentos rápidos
- **Trail Dinâmico**: Rastro que se intensifica com a velocidade
- **Física Realista**: Partículas com velocidade e vida decrescente
- **Performance Otimizada**: Sistema de limpeza automática

### **🔮 Efeitos Visuais**
- **Lente Principal**: Círculo com gradiente radial e sombras dinâmicas
- **Ponto de Foco**: Círculo central com efeitos de vidro
- **Rastro Suave**: Efeito de rastro com intensidade variável
- **Glow Ambiente**: Brilho ambiental que responde ao movimento
- **Partículas de Velocidade**: Trail baseado na velocidade do mouse

## 🎨 Personalização

### **Tamanho da Lente**
```tsx
<Cursor3DLens scale={0.8} />   // Lente menor
<Cursor3DLens scale={1.5} />   // Lente maior
<Cursor3DLens scale={2.0} />   // Lente extra grande
```

### **Cores Personalizadas**
```tsx
<Cursor3DLens color="#ff6b6b" />     // Vermelho vibrante
<Cursor3DLens color="#4ecdc4" />     // Verde azulado
<Cursor3DLens color="#45b7d1" />     // Azul oceano
<Cursor3DLens color="#96ceb4" />     // Verde suave
<Cursor3DLens color="#feca57" />     // Amarelo dourado
```

### **Efeitos de Blur**
```tsx
<Cursor3DLens blur={0} />       // Sem blur
<Cursor3DLens blur={1} />       // Blur sutil
<Cursor3DLens blur={2} />       // Blur moderado
<Cursor3DLens blur={3} />       // Blur intenso
```

### **Controle de Efeitos**
```tsx
// Apenas efeitos fluidos
<Cursor3DLens fluidEffect={true} splashEffect={false} />

// Apenas efeitos splash
<Cursor3DLens fluidEffect={false} splashEffect={true} />

// Todos os efeitos (padrão)
<Cursor3DLens fluidEffect={true} splashEffect={true} />

// Efeitos mínimos
<Cursor3DLens fluidEffect={false} splashEffect={false} />
```

## 🚀 Exemplo Completo

```tsx
import Cursor3DLens from './components/Cursor3DLens'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-8">
        <h1 className="text-4xl font-bold">Minha Landing Page</h1>
      </header>
      
      {/* Conteúdo Principal */}
      <main className="p-8">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Seção 1</h2>
          <p>Conteúdo da primeira seção...</p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Seção 2</h2>
          <p>Conteúdo da segunda seção...</p>
        </section>
      </main>
      
      {/* Cursor 3D Avançado */}
      <Cursor3DLens 
        scale={1.2}
        color="#ffffff"
        blur={0.5}
        fluidEffect={true}
        splashEffect={true}
      />
    </div>
  )
}
```

## ⚠️ Importante

- **Posicionamento**: O cursor é `fixed` e cobre toda a tela
- **Z-Index**: Usa `z-50` para ficar sobre outros elementos
- **Pointer Events**: Configurado como `none` para não interferir
- **Performance**: Otimizado com limpeza automática de partículas
- **Compatibilidade**: Funciona em todos os navegadores modernos
- **Efeitos Dinâmicos**: Respondem à velocidade do movimento do mouse

## 🔍 Solução de Problemas

### **Cursor Não Aparece**
- Verifique se o componente está sendo renderizado
- Confirme se não há erros no console
- Verifique se o z-index está correto

### **Performance Lenta**
- Reduza o `scale` da lente
- Diminua o `blur` se necessário
- Desative `splashEffect` em dispositivos lentos
- O componente já é otimizado por padrão

### **Conflito com Outros Elementos**
- O cursor usa `z-50`, ajuste se necessário
- Verifique se há outros elementos com z-index alto

## 🎨 Efeitos Visuais Detalhados

### **Fluid Glass Effect**
- **Distorção Dinâmica**: A lente se deforma baseada na velocidade
- **Backdrop Filters**: Blur, saturação e brilho adaptativos
- **Reflexões**: Brilhos que mudam com o movimento
- **Escala**: Tamanho que varia com a intensidade

### **Splash Cursor Effect**
- **Partículas**: Pontos que aparecem durante movimentos rápidos
- **Trail**: Rastro que se intensifica com a velocidade
- **Física**: Sistema de partículas com velocidade e vida
- **Limpeza**: Remoção automática de partículas antigas

### **Camadas Visuais**
1. **Partículas de Splash** (z-40)
2. **Lente Principal** (z-50)
3. **Ponto de Foco** (z-50)
4. **Rastro de Vidro** (z-40)
5. **Glow Ambiente** (z-30)
6. **Trail de Partículas** (z-35)

## 🌟 Inspirado em

- [Fluid Glass Component](https://reactbits.dev/components/fluid-glass) - Efeitos de vidro fluido
- [Splash Cursor Animation](https://reactbits.dev/animations/splash-cursor) - Animações de splash

