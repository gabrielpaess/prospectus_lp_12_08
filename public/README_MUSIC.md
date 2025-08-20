# Música de Fundo - Prospectus LP

## Como adicionar música:

1. **Formato recomendado**: MP3 ou WAV
2. **Tamanho**: Recomendado até 5MB para melhor performance
3. **Localização**: Coloque o arquivo de música na pasta `public/`
4. **Nome do arquivo**: Use `background-music.mp3` ou altere o `audioSrc` no componente

## Exemplo de uso:

```tsx
<MusicWidget 
  audioSrc="/sua-musica.mp3" 
  className="hidden md:block"
/>
```

## Funcionalidades do Widget:

- ✅ **Play/Pause**: Controle principal de reprodução
- ✅ **Diminuir Volume**: Reduz o volume em 10%
- ✅ **Aumentar Volume**: Aumenta o volume em 10%
- ✅ **Mute**: Ativa/desativa o mudo
- ✅ **Barra de Volume**: Visualização do nível atual
- ✅ **Loop**: A música repete automaticamente
- ✅ **Responsivo**: Só aparece em telas médias e grandes

## Cores utilizadas:

- **Azul**: #055ec4 (controles de volume)
- **Laranja**: orange-500 (botão play/pause)
- **Efeitos**: Gradientes e transparências para um visual moderno

## Posicionamento:

O widget fica fixo no canto inferior direito da tela (bottom-6 right-6).
