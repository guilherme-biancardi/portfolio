<template>
  <pre><code><span class="variable">const</span> biancardi <span class="prop">=</span> {
  <span class="prop">idade:</span> <span class="text-code">"19 anos"</span>,
  <span class="prop">area_de_estudo:</span> <span class="text-code">"desenvolvedor web"</span>,
  <span class="prop">formacao:</span> [
    {
      <span class="prop">curso:</span> <span class="text-code">"informática para internet"</span>,
      <span class="prop">instituição:</span> <span class="text-code">"ETEC São Mateus"</span>,
      <span class="prop">periodo:</span> <span class="text-code">"02/2019 - 12/2021"</span>
    },
    {
      <span class="prop">curso:</span> <span class="text-code">"ciências da computação"</span>,
      <span class="prop">instituição:</span> <span class="text-code">"UNIP Tatuapé"</span>,
      <span class="prop">periodo:</span> <span class="text-code">"cursando | 2º semestre"</span>
    }
  ],
  <span class="prop">texto_sobre:</span>
    <span class="text-code">"Nascido em Vinhedo/SP, residente em São Paulo, nunca fui muito interessado em tecnologia e meus objetivos não estavam ligados a área de TI até o ensino médio. 
    Ingressei no meu curso técnico e na primeira semana senti que havia encontrado o que atualmente considero minha vocação e desde então tenho me dedicado a esse sonho de carreira, buscando sempre aprimorar e demonstrar meus conhecimentos"</span>
}</code></pre>
</template>

<style scoped>
@font-face {
  font-family: "source code pro";
  src: url("../../assets/font/SourceCodePro-VariableFont_wght.ttf");
}
pre {
  width: 650px;
  height: 100%;
  white-space: pre-wrap;
  text-align: justify;
  font-size: 0.95em;
}

code,
code * {
  font-family: "source code pro", monospace;
}

.variable {
  color: var(--red);
}

.text-code {
  color: var(--yellow);
}

.prop {
  color: var(--blue-gray);
}
</style>
