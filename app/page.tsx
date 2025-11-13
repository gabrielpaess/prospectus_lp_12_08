'use client';

import ScrollDownButton from "../components/ScrollDownButton";
import TypewriterText from '../components/TypewriterText';
import ReactBitsScrollReveal from '../components/ReactBitsScrollReveal';
import ReactBitsStaggeredScrollReveal from '../components/ReactBitsStaggeredScrollReveal';
import Cursor3DLens from '../components/Cursor3DLens';

import ShinyText from '../components/ShinyText';
import StarBorder from '../components/StarBorder';
import MusicWidget from "@/components/MusicWidget";

// Declare global function for TypeScript
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export default function ProspectusLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" suppressHydrationWarning>
      {/* Hero Section */}
      <section id="hero-section" className="min-h-screen relative hero-bg flex items-center justify-center">
        {/* Logo Container - Centralizado */}
        <div className="text-center z-10">
          <img
            src="/PROSPECTUS_LOGO_OFICIAL_COMPLETO.webp"
            alt="PROSPECTUS Logo"
            className="w-auto h-10 sm:h-16 md:h-20 lg:h-32 xl:h-40 object-contain mx-auto"
          />
        </div>

        {/* Scroll Button - Posicionado abaixo da logo */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
          <ScrollDownButton
            size={32}
            targetSection="section-2"
            iconType="heroicon"
          />
        </div>

        {/* Gradient Overlay - Preto bottom para cor da imagem */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="text-md sm:text-2xl md:text-2xl lg:text-2xl xl:text-5xl font-bold text-[#055ec4] px-8 font-venus">
            <TypewriterText
              text="[SUA EMPRESA NÃO PRECISA DE MAIS ESFORÇO]"
              speed={80}
              delay={500}
              className="inline-block"
            />
          </h2>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <ReactBitsStaggeredScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            duration={1200}
            delay={200}
            threshold={0.2}
            stagger={150}
            staggerChildren={true}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-[140px] font-bold text-[#e3532c] leading-none sm:leading-none md:leading-none lg:leading-none xl:leading-none 2xl:leading-[105px] font-archivo">
              <div>PRECISA DE</div>
              <div>ESTRUTURA</div>
              <div>PARA CRESCER</div>
            </h2>
          </ReactBitsStaggeredScrollReveal>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="min-h-screen flex items-center justify-center relative bg-black px-4 md:px-8 lg:px-0">

        {/* Container principal com duas colunas */}
        <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">

          {/* Lado Esquerdo - Efeito Luz + Texto (Mobile/Tablet: empilhado, Desktop: lado a lado) */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-start items-center lg:items-end mb-8 lg:mb-96">

            {/* Efeito Luz - Posicionado à esquerda */}
            <div className="relative order-2 lg:order-1 mb-6 lg:mb-0">
              <div className="relative bottom-16 -left-36 sm:bottom-12 sm:-left-46 md:bottom-14 md:-left-42 lg:-bottom-40 lg:left-20 xl:-bottom-48 xl:left-48">
                <img
                  src="/EFEITO_LUZ.webp"
                  alt="Efeito de Luz"
                  className="w-32 h-32 sm:w-32 sm:h-32 md:w-50 md:h-50 lg:w-80 lg:h-80 xl:w-80 xl:h-80 xl:w-96 xl:h-96 object-contain opacity-80"
                />
              </div>
            </div>

            {/* Texto - Posicionado à direita e acima */}
            <div className="order-1 lg:order-2 flex-1 text-center lg:text-center lg:ml-8">
              <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-regular text-[#055ec4] leading-none sm:leading-none md:leading-none lg:leading-none xl:leading-none 2xl:leading-none font-venus">
                SEU <br />
                CRESCIMENTO <br />
                NÃO ESTÁ <br />
                TRAVADO<br />
                POR FALTA<br />
                DE MERCADO
              </h2>
            </div>
          </div>

          {/* Lado Direito - Mulher Astronauta (Mobile/Tablet: abaixo, Desktop: lado a lado) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start order-3 lg:order-3">
            <div className="relative w-full h-full flex justify-center lg:justify-start">
              {/* Imagem da Mulher Astronauta */}
              <img
                src="/MULHER_ASTRONAUTA.webp"
                alt="Mulher Astronauta"
                className="w-72 h-auto sm:w-64 sm:h-auto md:w-72 md:h-auto lg:w-[28rem] lg:h-auto xl:w-[40rem] xl:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="min-h-screen flex items-center justify-center relative bg-black homem-cansado-bg">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-8 sm:space-y-16 md:space-y-24 md:space-y-0 md:space-x-60 lg:space-x-80 xl:space-x-96 px-8">
          <div className="text-center md:text-right -mt-16 md:-mt-32 lg:-mt-32 xl:-mt-32">
            <ReactBitsScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={8}
              duration={1000}
              delay={200}
              threshold={0.3}
            >
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-40 sm:mb-40 font-regular text-orange-500 leading-none font-venus text-start">
                ESTÁ <br />
                TRAVADO <br />
                POR
              </h2>
            </ReactBitsScrollReveal>
          </div>
          <div className="text-center md:text-left mt-16 md:mt-32 lg:mt-32 xl:mt-32">
            <ReactBitsScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={8}
              duration={1000}
              delay={400}
              threshold={0.3}
            >
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-40 sm:mt-40 font-regular text-[#e5c998] leading-none font-venus">
                FALTA <br />
                DE VISÃO <br />
                ESTRATÉGICA
              </h2>
            </ReactBitsScrollReveal>
          </div>
        </div>

        {/* Gradient Overlay - Preto bottom para cor da imagem */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
        {/* Gradient Overlay - Preto bottom para cor da imagem */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      </section>

      {/* Section 6 */}
      <section id="section-6" className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="text-base text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-regular text-[#055ec4] leading-none px-6 font-venus animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
            animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            transformOrigin: '50% 100%'
          }}>
            CONFIRA SE VOCÊ SOFRE COM <br />
            ALGUNS DESSES SINTOMAS
          </h2>
        </div>
      </section>

      {/* Section 7 - Chart */}
      <section id="section-7" className="min-h-screen flex flex-col items-center justify-center bg-black">
        <div className="w-[90vw]">
          <div className="flex justify-between items-start mb-8">
            <span className="text-md md:text-xl text-orange-500 font-light font-archivo">{'[ '} Fragilidades {' ]'} </span>
            <span className="text-md md:text-xl text-[#055ec4] font-light font-archivo">{'[ '} @prospectusnbn {' ]'} </span>
          </div>

          <div className="text-start mb-16">
            <ReactBitsScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={8}
              duration={1000}
              delay={300}
              threshold={0.3}
            >
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-regular text-[#e5c998] leading-none font-venus">
                QUAIS <br />
                DESSES PONTOS <br />
                TRAVA O SEU <br />
                CRESCIMENTO <br />
                HOJE?
              </h2>
            </ReactBitsScrollReveal>
          </div>

          <div className="relative flex flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col items-center justify-center py-36">
            {/* Container principal com linha e pontos */}
            <div className="relative w-full max-w-7xl">
              {/* Linha horizontal com gradiente - mantida para telas maiores */}
              <div className="hidden sm:block absolute top-1/2 left-0 right-0 w-full h-0.5 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 transform -translate-y-1/2"></div>

              {/* Linha vertical para mobile */}
              <div className="block sm:hidden absolute left-10 -top-10 w-0.5 h-[120%] bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600"></div>

              {/* Pontos alinhados na linha - Estrutura para telas maiores (sm+) */}
              <div className="hidden sm:flex relative justify-between items-center w-full">
                {/* Ponto 1 */}
                <ReactBitsScrollReveal
                  baseOpacity={0}
                  enableBlur={false}
                  baseRotation={0}
                  blurStrength={0}
                  duration={800}
                  delay={100}
                  threshold={0.3}
                  className="flex flex-col items-center w-2/12">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300 relative z-10"></div>
                </ReactBitsScrollReveal>

                {/* Ponto 2 */}
                <ReactBitsScrollReveal
                  baseOpacity={0}
                  enableBlur={false}
                  baseRotation={0}
                  blurStrength={0}
                  duration={800}
                  delay={300}
                  threshold={0.3}
                  className="flex flex-col items-center w-2/12"
                >
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300 relative z-10"></div>
                </ReactBitsScrollReveal>

                {/* Ponto 3 */}
                <ReactBitsScrollReveal
                  baseOpacity={0}
                  enableBlur={false}
                  baseRotation={0}
                  blurStrength={0}
                  duration={800}
                  delay={500}
                  threshold={0.3}
                  className="flex flex-col items-center w-2/12"
                >
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300 relative z-10"></div>
                </ReactBitsScrollReveal>

                {/* Ponto 4 */}
                <ReactBitsScrollReveal
                  baseOpacity={0}
                  enableBlur={false}
                  baseRotation={0}
                  blurStrength={0}
                  duration={800}
                  delay={700}
                  threshold={0.3}
                  className="flex flex-col items-center w-2/12"
                >
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300 relative z-10"></div>
                </ReactBitsScrollReveal>

                {/* Ponto 5 */}
                <ReactBitsScrollReveal
                  baseOpacity={0}
                  enableBlur={false}
                  baseRotation={0}
                  blurStrength={0}
                  duration={800}
                  delay={900}
                  threshold={0.3}
                  className="flex flex-col items-center w-2/12"
                >
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300 relative z-10"></div>
                </ReactBitsScrollReveal>

                {/* Ponto 6 */}
                <ReactBitsScrollReveal
                  baseOpacity={0}
                  enableBlur={false}
                  baseRotation={0}
                  blurStrength={0}
                  duration={800}
                  delay={1100}
                  threshold={0.3}
                  className="flex flex-col items-center w-2/12"
                >
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300 relative z-10"></div>
                </ReactBitsScrollReveal>
              </div>

              {/* Layout vertical para mobile - pontos e conteúdo lado a lado */}
              <div className="block sm:hidden space-y-16">
                {/* Item 1 */}
                <div className="flex items-center relative">
                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={100}
                    threshold={0.3}
                    className="absolute left-8 transform -translate-x-1/2 z-10"
                  >
                    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300"></div>
                  </ReactBitsScrollReveal>

                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={200}
                    threshold={0.3}
                    className="ml-16 flex-1"
                  >
                    <div className="text-sm text-[#e5c999] leading-tight font-light font-archivo">
                      Processos internos confusos e não escaláveis
                    </div>
                  </ReactBitsScrollReveal>
                </div>

                {/* Item 2 */}
                <div className="flex items-center relative">
                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={300}
                    threshold={0.3}
                    className="absolute left-8 transform -translate-x-1/2 z-10"
                  >
                    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300"></div>
                  </ReactBitsScrollReveal>

                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={400}
                    threshold={0.3}
                    className="ml-16 flex-1"
                  >
                    <div className="text-sm text-[#e5c999] leading-tight font-light font-archivo">
                      Falta de previsibilidade nas vendas
                    </div>
                  </ReactBitsScrollReveal>
                </div>

                {/* Item 3 */}
                <div className="flex items-center relative">
                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={500}
                    threshold={0.3}
                    className="absolute left-8 transform -translate-x-1/2 z-10"
                  >
                    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300"></div>
                  </ReactBitsScrollReveal>

                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={600}
                    threshold={0.3}
                    className="ml-16 flex-1"
                  >
                    <div className="text-sm text-[#e5c999] leading-tight font-light font-archivo">
                      Marketing e comercial que não se conversam
                    </div>
                  </ReactBitsScrollReveal>
                </div>

                {/* Item 4 */}
                <div className="flex items-center relative">
                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={700}
                    threshold={0.3}
                    className="absolute left-8 transform -translate-x-1/2 z-10"
                  >
                    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300"></div>
                  </ReactBitsScrollReveal>

                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={800}
                    threshold={0.3}
                    className="ml-16 flex-1"
                  >
                    <div className="text-sm text-[#e5c999] leading-tight font-light font-archivo">
                      Decisões baseadas em achismo e não em dados
                    </div>
                  </ReactBitsScrollReveal>
                </div>

                {/* Item 5 */}
                <div className="flex items-center relative">
                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={900}
                    threshold={0.3}
                    className="absolute left-8 transform -translate-x-1/2 z-10"
                  >
                    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300"></div>
                  </ReactBitsScrollReveal>

                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={1000}
                    threshold={0.3}
                    className="ml-16 flex-1"
                  >
                    <div className="text-sm text-[#e5c999] leading-tight font-light font-archivo">
                      Comunicação desalinhada
                    </div>
                  </ReactBitsScrollReveal>
                </div>

                {/* Item 6 */}
                <div className="flex items-center relative">
                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={1100}
                    threshold={0.3}
                    className="absolute left-8 transform -translate-x-1/2 z-10"
                  >
                    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 border-2 border-orange-300"></div>
                  </ReactBitsScrollReveal>

                  <ReactBitsScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={0}
                    duration={800}
                    delay={1200}
                    threshold={0.3}
                    className="ml-16 flex-1"
                  >
                    <div className="text-sm text-[#e5c999] leading-tight font-light font-archivo">
                      Equipe desmotivada
                    </div>
                  </ReactBitsScrollReveal>
                </div>
              </div>
            </div>

            {/* Labels do gráfico - Apenas para telas maiores */}
            <div className="hidden sm:flex justify-between items-start w-full max-w-7xl mt-8">
              {/* Coluna 1 */}
              <ReactBitsScrollReveal
                baseOpacity={0}
                enableBlur={false}
                baseRotation={0}
                blurStrength={0}
                duration={800}
                delay={200}
                threshold={0.3}
                className="flex flex-col items-center w-2/12"
              >
                <div className="text-start">
                  <div className="text-sm md:text-base text-[#e5c999] leading-none font-light font-archivo">
                    Processos internos <br />
                    confusos e não <br />
                    escaláveis
                  </div>
                </div>
              </ReactBitsScrollReveal>

              {/* Coluna 2 */}
              <ReactBitsScrollReveal
                baseOpacity={0}
                enableBlur={false}
                baseRotation={0}
                blurStrength={0}
                duration={800}
                delay={400}
                threshold={0.3}
                className="flex flex-col items-center w-2/12"
              >
                <div className="text-start">
                  <div className="text-sm md:text-base text-[#e5c999] leading-none font-light font-archivo">
                    Falta de <br />
                    previsibilidade <br />
                    nas vendas
                  </div>
                </div>
              </ReactBitsScrollReveal>

              {/* Coluna 3 */}
              <ReactBitsScrollReveal
                baseOpacity={0}
                enableBlur={false}
                baseRotation={0}
                blurStrength={0}
                duration={800}
                delay={600}
                threshold={0.3}
                className="flex flex-col items-center w-2/12"
              >
                <div className="text-start">
                  <div className="text-sm md:text-base text-[#e5c999] leading-none font-light font-archivo">
                    Marketing e <br />
                    comercial que <br />
                    não se conversam
                  </div>
                </div>
              </ReactBitsScrollReveal>

              {/* Coluna 4 */}
              <ReactBitsScrollReveal
                baseOpacity={0}
                enableBlur={false}
                baseRotation={0}
                blurStrength={0}
                duration={800}
                delay={800}
                threshold={0.3}
                className="flex flex-col items-center w-2/12"
              >
                <div className="text-start">
                  <div className="text-sm md:text-base text-[#e5c999] leading-none font-light font-archivo">
                    Decisões baseadas <br />
                    em achismo e não <br />
                    em dados
                  </div>
                </div>
              </ReactBitsScrollReveal>

              {/* Coluna 5 */}
              <ReactBitsScrollReveal
                baseOpacity={0}
                enableBlur={false}
                baseRotation={0}
                blurStrength={0}
                duration={800}
                delay={1000}
                threshold={0.3}
                className="flex flex-col items-center w-2/12"
              >
                <div className="text-start">
                  <div className="text-sm md:text-base text-[#e5c999] leading-none font-light font-archivo">
                    Comunicação <br />
                    desalinhada
                  </div>
                </div>
              </ReactBitsScrollReveal>

              {/* Coluna 6 */}
              <ReactBitsScrollReveal
                baseOpacity={0}
                enableBlur={false}
                baseRotation={0}
                blurStrength={0}
                duration={800}
                delay={1200}
                threshold={0.3}
                className="flex flex-col items-center w-2/12"
              >
                <div className="text-start">
                  <div className="text-sm md:text-base text-[#e5c999] leading-none font-light font-archivo">
                    Equipe <br />
                    desmotivada
                  </div>
                </div>
              </ReactBitsScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section id="section-8" className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="text-sm sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-regular text-[#055ec4] font-venus">
            <TypewriterText
              text="[NÃO OFERTAMOS SERVIÇOS]"
              speed={60}
              delay={2000}
              className="inline-block"
            />
          </h2>
          <div className="flex justify-center mt-8">
            <div className="flex space-none">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 - Ofertamos Transformação */}
      <section id="section-9"
        className="min-h-screen flex flex-col items-center justify-center relative bg-cover md:bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/man_world.webp')`,
        }}
      >
        {/* Gradient Overlay - Preto top para cor da imagem */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/50 to-transparent"></div>

        {/* Gradient Overlay - Preto bottom para cor da imagem */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black via-black to-transparent"></div>

        {/* Conteúdo centralizado */}
        <div className="relative z-10 flex flex-col items-center justify-end flex-1 mb-20">
          {/* Texto principal */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-regular text-white leading-none font-venus animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
              animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
              transformOrigin: '50% 100%'
            }}>
              OFERTAMOS <br />
              TRANSFORMAÇÃO <br />
              COM ESTRUTURA
            </h2>
          </div>

          {/* Indicadores de pontos */}
          <div className="flex justify-center mt-8">
            <div className="flex space-none">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 - Central de Inteligência */}
      <section id="section-10"
        className="min-h-[90vh] flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat bg-[#055ec4] px-4 md:px-8 lg:px-0">
        <div className="text-center space-y-4 md:space-y-6 lg:space-y-2 w-full max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-semibold text-black leading-none sm:leading-none md:leading-none lg:leading-none xl:leading-none 2xl:leading-none font-archivo animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
            animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            transformOrigin: '50% 100%'
          }}>
            A PROSPECTUS NBN <br />
            ENTRA COMO A <br />
            CENTRAL DE <br />
            INTELIGÊNCIA <br />
            DE CRESCIMENTO
          </h2>
          <div className="w-[15%] bg-orange-500 px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg flex items-center justify-center ml-[60vw] sm:ml-[65vw] md:ml-[65vw] lg:ml-auto">
            <img
              src="/PROSPECTUS_SIGLA.webp"
              alt="PROSPECTUS Sigla"
              className="h-2 md:h-3 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 11 - Aplicando o Undercut */}
      <section id="section-11" className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat overflow-hidden px-4 md:px-8 lg:px-0">
<div
  className="
    absolute inset-0
    bg-cover bg-center bg-no-repeat
    rotate-90 sm:rotate-0
    w-[200vw] h-[200vw] sm:w-full sm:h-full
    left-1/2 top-1/2 sm:left-0 sm:top-0
    -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:translate-y-0
    transition-transform duration-500
    z-0
  "
  style={{
    backgroundImage: `url('/grid_banner.webp')`,
  }}
></div>
        <div className="text-center relative z-10 w-full max-w-[60vw] sm:max-w-[40vw] md:max-w-[30vw] mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-400 font-archivo font-light leading-none mb-2 md:mb-4">Aplicando o</p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-regular text-blue-400 leading-none font-venus text-start md:text-start animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
            animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            transformOrigin: '50% 100%'
          }}>
            UNDERCUT <br />
            <span className="ml-12 md:ml-12 lg:ml-32 xl:ml-32 2xl:ml-32 text-end md:text-end">CORPORATIVO</span>
          </h2>
        </div>
        {/* Gradient Overlay - Preto top para cor da imagem */}
        <div className="absolute top-0 left-0 right-0 h-32 md:h-48 lg:h-64 bg-gradient-to-b from-black via-black/75 to-transparent"></div>

        {/* Gradient Overlay - Preto bottom para cor da imagem */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 lg:h-64 bg-gradient-to-t from-black via-black/75 to-transparent"></div>
      </section>

      {/* Section 12 - Metodologia Fórmula 1 */}
      <section id="section-12"
        className="min-h-screen flex flex-col items-center justify-end relative bg-cover bg-center bg-no-repeat px-4 md:px-8 lg:px-8"
        style={{
          backgroundImage: `url('/f1.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center space-y-8 md:space-y-6 lg:space-y-8 px-1 md:px-8 lg:px-8 w-full max-w-6xl mx-auto">
          <h2 className="text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-regular text-[#e5c998] leading-none sm:leading-none md:leading-none lg:leading-none xl:leading-none 2xl:leading-none font-venus animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
            animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            transformOrigin: '50% 100%'
          }}>
            METODOLOGIA INSPIRADA <br />
            NA FÓRMULA 1, QUE ANTECIPA <br />
            MOVIMENTOS E ENTREGA <br />
            VANTAGEM COMPETITIVA.
          </h2>
          <div className="flex flex-col items-center space-y-4 mt-8 md:mt-12 lg:mt-16">
            <ScrollDownButton
              size={30}
              targetSection="section-13"
              iconType="heroicon"
            />
          </div>
        </div>
        {/* Gradient Overlay - Preto top para cor da imagem */}
        <div className="absolute top-0 left-0 right-0 h-32 md:h-48 lg:h-64 bg-gradient-to-b from-black via-black/75 to-transparent"></div>

        {/* Gradient Overlay - Preto bottom para cor da imagem */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 lg:h-64 bg-gradient-to-t from-black via-black/75 to-transparent"></div>
      </section>

      {/* Section 13 - Método em 5 Etapas */}
      <section id="section-13"
        className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat py-48">
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Imagem do astronauta à esquerda - mostrando apenas metade */}
        <div className="absolute left-0 sm:left-[-5vw] md:left-[-20vw] xl:left-[-23vw] -bottom-42 sm:-bottom-42 md:-bottom-42 xl:bottom-0 h-full w-1/2 overflow-hidden">
          <img
            src="/astronauta.webp"
            alt="Astronauta"
            className="h-full w-auto object-cover object-right"
          />
        </div>

        {/* Imagem do planeta à direita - mostrando apenas metade */}
        <div className="absolute right-0 sm:right-[-5vw] md:right-[-20vw] xl:right-[-35vw] -top-96 sm:-top-96 md:-top-96 xl:top-0 h-full w-1/2 overflow-hidden">
          <img
            src="/planeta.webp"
            alt="Planeta"
            className="h-full w-auto object-cover object-left"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl p-2">
          {/* Layout principal: texto à esquerda, orbita à direita */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 border border-white p-4 md:p-6 lg:p-10">

            {/* Lado esquerdo - Texto */}
            <div className="flex-1 space-y-4 md:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-regular text-white leading-none font-venus text-left">
                NO UNDERCUT <br />
                CORPORATIVO
              </h2>

              {/* Linha separadora */}
              <div className="w-full h-px bg-white"></div>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-none font-light font-archivo">
                ■ Estruturamos o método em cinco etapas entregando o que a maioria esconde
              </p>
            </div>

            {/* Lado direito - Componente Orbiting Circles */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Círculo central - sol/núcleo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full shadow-2xl z-20 flex items-center justify-center">
                  <img
                    src="/SOL_ICONE.webp"
                    alt="Sol"
                    className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 object-contain"
                  />
                </div>

                {/* Órbitas concêntricas com linhas tracejadas */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 border border-white/30 rounded-full border-dashed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 border border-white/30 rounded-full border-dashed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 lg:w-32 lg:h-32 border border-white/30 rounded-full border-dashed"></div>

                {/* Círculos orbitando com movimento */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Ícone 1 - órbita externa - Estratégia */}
                  <div className="absolute w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-transparent border-2 border-orange-500 rounded-full flex items-center justify-center shadow-lg animate-orbit-1">
                    <img
                      src="/ESTACAO_CONTROLE.webp"
                      alt="Estratégia"
                      className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
                    />
                  </div>

                  {/* Ícone 2 - órbita média - Crescimento */}
                  <div className="absolute w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-transparent border-2 border-orange-500 rounded-full flex items-center justify-center shadow-lg animate-orbit-2">
                    <img
                      src="/NOTE_FOGUETE.webp"
                      alt="Crescimento"
                      className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
                    />
                  </div>

                  {/* Ícone 3 - órbita interna - Inovação */}
                  <div className="absolute w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-transparent border-2 border-orange-500 rounded-full flex items-center justify-center shadow-lg animate-orbit-3">
                    <img
                      src="/SATELITE.webp"
                      alt="Inovação"
                      className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
                    />
                  </div>

                  {/* Ícone 4 - órbita externa direita - Networking */}
                  <div className="absolute w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-transparent border-2 border-orange-500 rounded-full flex items-center justify-center shadow-lg animate-orbit-4">
                    <img
                      src="/CARRO_ESPACIAL.webp"
                      alt="Networking"
                      className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separador com texto */}
          <div className="my-2 md:my-2 text-start border border-white">
            <div className="p-3 md:p-4 inline-block">
              <p className="text-white font-regular text-base md:text-lg font-venus">PROSPECTUS NEW BUSINESS NETWORK</p>
            </div>
          </div>

          {/* Grid de 5 caixas de conteúdo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2 lg:gap-2">
            {/* Caixa 1 - PLANEJAMENTO ESTRATÉGICO */}
            <div
              className="relative h-64 md:h-80 lg:h-[44vh] border border-white bg-cover bg-center overflow-hidden transition-all duration-300 ease-in-out hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] cursor-pointer"
              style={{
                backgroundImage: `url('/city.webp')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-between">
                <div className="flex-1"></div>
                <div className="flex flex-col items-start space-y-2 md:space-y-3">
                  <div className="flex justify-start">
                    <img
                      src="/SOL_ICONE.webp"
                      alt="Planejamento Estratégico"
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    />
                  </div>
                  <div className="text-white font-regular text-xs md:text-sm font-venus uppercase tracking-wide">
                    PLANEJAMENTO ESTRATÉGICO →
                  </div>
                </div>
              </div>
            </div>

            {/* Caixa 2 - ESTRUTURAS DIGITAIS */}
            <div className="relative h-64 md:h-80 lg:h-[44vh] border border-white bg-cover bg-center overflow-hidden transition-all duration-300 ease-in-out hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] cursor-pointer">
              <div className="absolute top-3 md:top-4 left-3 md:left-4 right-3 md:right-4 h-6 md:h-8 flex items-end space-x-1">
                <div className="w-1 bg-white h-2"></div>
                <div className="w-1 bg-white h-4"></div>
                <div className="w-1 bg-white h-6"></div>
                <div className="w-1 bg-white h-3"></div>
                <div className="w-1 bg-white h-5"></div>
                <div className="w-1 bg-white h-2"></div>
              </div>
              <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-between">
                <div className="flex-1"></div>
                <div className="flex flex-col items-start space-y-2 md:space-y-3">
                  <div className="flex justify-start">
                    <img
                      src="/NOTE_FOGUETE.webp"
                      alt="Estruturas Digitais"
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    />
                  </div>
                  <div className="text-white font-regular text-xs md:text-sm font-venus uppercase tracking-wide">
                    ESTRUTURAS DIGITAIS →
                  </div>
                </div>
              </div>
            </div>

            {/* Caixa 3 - COMUNICAÇÃO INTEGRADA */}
            <div
              className="relative h-64 md:h-80 lg:h-[44vh] border border-white bg-cover bg-center overflow-hidden transition-all duration-300 ease-in-out hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] cursor-pointer"
              style={{
                backgroundImage: `url('/space-x.webp')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-between">
                <div className="flex-1"></div>
                <div className="flex flex-col items-start space-y-2 md:space-y-3">
                  <div className="flex justify-start">
                    <img
                      src="/SATELITE.webp"
                      alt="Comunicação Integrada"
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    />
                  </div>
                  <div className="text-white font-regular text-xs md:text-sm font-venus uppercase tracking-wide">
                    COMUNICAÇÃO INTEGRADA →
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna com as duas últimas caixas empilhadas */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col gap-2 md:gap-2">
              {/* Caixa 4 - PROSPECÇÃO QUALIFICADA */}
              <div className="relative h-32 md:h-40 lg:h-[24vh] border border-white bg-black overflow-hidden transition-all duration-300 ease-in-out hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] cursor-pointer">
                <div className="absolute top-3 md:top-4 left-3 md:left-4 right-3 md:right-4 h-6 md:h-8 flex items-end space-x-1">
                  <div className="w-1 bg-white h-3"></div>
                  <div className="w-1 bg-white h-5"></div>
                  <div className="w-1 bg-white h-2"></div>
                  <div className="w-1 bg-white h-6"></div>
                  <div className="w-1 bg-white h-4"></div>
                  <div className="w-1 bg-white h-3"></div>
                </div>
                <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-between">
                  <div className="flex-1"></div>
                  <div className="flex flex-col items-start space-y-2 md:space-y-3">
                    <div className="flex justify-start">
                      <img
                        src="/CARRO_ESPACIAL.webp"
                        alt="Prospecção Qualificada"
                        className="w-5 h-5 md:w-6 md:h-6 object-contain"
                      />
                    </div>
                    <div className="text-white font-regular text-xs md:text-sm font-venus uppercase tracking-wide">
                      PROSPECÇÃO QUALIFICADA →
                    </div>
                  </div>
                </div>
              </div>

              {/* Caixa 5 - INTELIGÊNCIA DE MERCADO */}
              <div className="relative h-28 md:h-32 lg:h-[19vh] border border-white bg-black overflow-hidden transition-all duration-300 ease-in-out hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] cursor-pointer">
                <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-between">
                  <div className="flex-1"></div>
                  <div className="flex flex-col items-start space-y-2 md:space-y-3">
                    <div className="flex justify-start">
                      <img
                        src="/ESTACAO_CONTROLE.webp"
                        alt="Inteligência de Mercado"
                        className="w-5 h-5 md:w-6 md:h-6 object-contain"
                      />
                    </div>
                    <div className="text-white font-regular text-xs md:text-sm font-venus uppercase tracking-wide">
                      INTELIGÊNCIA DE MERCADO →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/75 to-transparent"></div>
      </section>

      {/* Section 14 - Airplane Window Background */}
      <section id="section-14"
        className="min-h-screen bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/airplane_window.webp')`,
        }}
      >
        <div className="min-h-screen bg-black/40"></div>
      </section>

      {/* Section 15 - Benefícios do Undercut */}
      <section id="section-15" className="min-h-screen flex flex-col items-center justify-center bg-black px-8">
        <div className="text-center space-y-8">
          <ReactBitsScrollReveal
            baseOpacity={0}
            enableBlur={false}
            baseRotation={0}
            blurStrength={0}
            duration={1000}
            delay={500}
            threshold={0.3}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-regular text-white leading-none font-venus text-center">
              APLICANDO O <br />
              UNDERCUT <br />
              CORPORATIVO <br />
              VOCÊ IRÁ NOTAR <br />
              OS SEGUINTES <br />
              BENEFÍCIOS
            </h2>
          </ReactBitsScrollReveal>
          <div className="flex flex-col items-center space-y-4 mt-16">
            <ScrollDownButton
              size={32}
              targetSection="section-16"
              iconType="heroicon"
            />
          </div>
        </div>
      </section>

      {/* Section 16 - Vendas Previsíveis */}
<section id="section-16"
  className="min-h-screen flex items-center justify-start relative bg-[#085ecf] bg-center bg-no-repeat">
  <div className="relative z-10 text-center space-y-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-semibold text-[#e5c999] leading-none font-archivo text-start tracking-none animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
      animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      transformOrigin: '50% 100%'
    }}>
      Vendas previsíveis <br />
      com leads certos
    </h2>
    <p className="text-base text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-light font-archivo text-start leading-none tracking-none">
      Sistema <br />
      estruturado <br />
      de prospecção
    </p>
  </div>
</section>

{/* Section 17 - Dados Reais */}
<section id="section-17"
  className="min-h-screen flex items-center justify-end relative bg-[#085ecf] bg-center bg-no-repeat overflow-hidden section-17-clouds">
  {/* Background cloud image with sliding animation */}
  <div className="absolute inset-0 z-0 cloud-layer-1" />

  <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-semibold text-[#e5c999] leading-none font-archivo text-end tracking-none animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
      animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      transformOrigin: '50% 100%'
    }}>
      Dados reais <br />
      para decisões <br />
      estratégicas
    </h2>
    <p className="text-base text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-light font-archivo text-end leading-none tracking-none">
      Inteligência <br />
      aplicada ao <br />
      negócio
    </p>
  </div>
</section>

{/* Section 18 - Inteligência para Posicionamento */}
<section id="section-18"
  className="min-h-screen flex items-center justify-start relative bg-[#085ecf] bg-center bg-no-repeat overflow-hidden">
  <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-semibold text-[#e5c999] leading-none font-archivo text-start tracking-none animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
      animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      transformOrigin: '50% 100%'
    }}>
      Inteligência para <br />
      se posicionar <br />
      com diferença
    </h2>
    <p className="text-base text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-light font-archivo text-start leading-none tracking-none">
      Vantagem <br />
      competitiva real
    </p>
  </div>

  {/* Background cloud image with sliding animation at the end of section */}
</section>

{/* Section 19 - Processos Claros */}
<section id="section-19"
  className="min-h-screen flex items-center justify-start relative bg-[#085ecf] bg-center bg-no-repeat">
  <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-8 md:px-16 lg:px-36 xl:px-56 2xl:px-72">
    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-semibold text-[#e5c999] leading-none font-archivo text-start tracking-none animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
      animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      transformOrigin: '50% 100%'
    }}>
      Processos <br />
      claros e <br />
      replicáveis
    </h2>
    <p className="text-base text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-light font-archivo text-start leading-none tracking-none">
      Estrutura <br />
      que escala <br />
      de verdade
    </p>
  </div>
</section>

{/* Section 20 - Equipes Integradas + PNBN Logo (Unified with sliding nuvem effect) */}
<section id="section-20" className="min-h-screen relative bg-[#085ecf] overflow-hidden section-20-unified">
  {/* Sliding nuvem background with movement effect */}
  <div className="absolute inset-0 z-0 cloud-layer-2" />

  {/* Main content - Equipes Integradas */}
  <div className="relative z-10 flex flex-col h-full px-4 sm:px-6 md:px-10">
    {/* Top section - Equipes Integradas */}
    <div className="flex-1 flex items-center justify-end px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 2xl:px-78">
      <div className="text-right space-y-4 sm:space-y-6 md:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-semibold text-[#e5c999] leading-none font-archivo tracking-none animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
          animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
          transformOrigin: '50% 100%'
        }}>
          Equipes <br />
          integradas <br />e com <br />
          visão única
        </h2>
        <p className="text-base text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-light font-medium mb-4 sm:mb-6 md:mb-8 leading-none font-archivo tracking-none">
          Alinhamento real da <br />
          equipe com a cultura <br />e visão da empresa
        </p>
      </div>
    </div>
  </div>

  {/* PNBN Logo Bridge - positioned at the very bottom edge of the section */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/12 z-30">
    <div className="bg-orange-500 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center shadow-2xl">
      <div className="flex items-center justify-center">
        <img
          src="/PROSPECTUS_SIGLA.webp"
          alt="PROSPECTUS Sigla"
          className="w-auto h-3 sm:h-4 md:h-5 lg:h-6 object-contain"
        />
      </div>
    </div>
  </div>
</section>

      {/* Section 22 - Chega de Desperdiçar */}
      <section id="section-22"
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <div className="flex space-none">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-regular text-blue-400 leading-none font-venus">
            <ShinyText text="CHEGA DE" speed={5} className="block" /> <br />
            <ShinyText text="DESPERDIÇAR" speed={3} className="block" /> <br />
            <ShinyText text="OPORTUNIDADES" speed={3} className="block" />
          </h2>
          <div className="flex justify-center mt-8">
            <div className="flex space-none">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 22 - Imagem Celestial */}
      <section id="section-22"
        className="min-h-[60vh] relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/sol.webp')`,
        }}
      >
        {/* Gradient Overlay - Preto top para cor da imagem */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/75 to-transparent"></div>

        {/* Gradient Overlay - Preto bottom para cor da imagem */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/75 to-transparent"></div>
      </section>

      {/* Section 23 - Final CTA */}
      <section id="section-23" className="min-h-screen flex flex-col items-center justify-center relative bg-black">
        <div className="relative z-10 text-center space-y-8 px-8">
          <h2 className="text-sm sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-regular text-[#e5c998] leading-none font-venus animate-[scale-up-bottom_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both] origin-bottom" style={{
            animation: 'scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            transformOrigin: '50% 100%'
          }}>
            ENTRE PARA A <br />
            REDE DE NEGÓCIOS <br />
            QUE CRESCE <br />
            COM INTELIGÊNCIA
          </h2>

          <p className="text-sm md:text-xl text-white font-extralight max-w-7xl mx-2 sm:mx-8 leading-none">
            A <span className="font-medium">Prospectus NBN</span> é um ecossistema de crescimento <br />
            com inteligência aplicada, para líderes que <br />
            não aceitam mais desperdiçar oportunidades.
          </p>

  <div className="flex justify-center w-full">
    <StarBorder
    as="a"
    href={`https://wa.me/5551997766970?text=${encodeURIComponent('Olá. Quero saber mais sobre os serviços da Prospectus NBN.')}`}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
      const url = `https://wa.me/5551997766970?text=${encodeURIComponent('Olá. Quero saber mais sobre os serviços da Prospectus NBN.')}`;
      if (window.gtag_report_conversion) {
        window.gtag_report_conversion(url);
        e.preventDefault();
      }
    }}
    className="
      inline-block
      min-w-[200px] max-w-[280px] w-auto
      px-6 py-3 text-sm
      sm:px-8 sm:py-3 sm:text-base
      md:px-10 md:py-4 md:text-lg
      lg:px-12 lg:py-4 lg:text-xl
      font-bold text-center
      rounded-lg
      transition-all duration-200
      hover:scale-105
      active:scale-95
      whitespace-nowrap
    "
    color="orange"
    speed="5s"
    thickness={3}
  >
    INICIAR MISSÃO
  </StarBorder>
</div>
          {/* Prospectus Logo */}
          <div className="flex justify-center">
            <div className="text-center z-10">
              <img
                src="/PROSPECTUS_LOGO_OFICIAL_COMPLETO.webp"
                alt="PROSPECTUS Logo"
                className="w-auto h-6 md:h-8 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Music Widget */}
      <MusicWidget
        audioSrc="https://late-snowflake-c9c4.gpaespinheiro.workers.dev"
        className="hidden md:block"
      />

      {/* Cursor 3D - Sempre por último para ficar sobre tudo */}
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
