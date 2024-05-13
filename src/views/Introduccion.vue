<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La realidad financiera es uno de los pilares fundamentales sobre los que reposa la estabilidad económica de toda empresa; es ineludible que para todo ente económico es vital mantener una buena salud financiera con la que sustente el funcionamiento de sus operaciones. En el siguiente video se expone la importancia de la implementación de estrategias que garanticen una correcta toma de decisiones para el crecimiento empresarial.
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CeVJ9houuko" title="Mercados financieros" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
