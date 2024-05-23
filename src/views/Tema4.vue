<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Indicadores bursátiles 

    p.mb-5 Los indicadores bursátiles se entienden como índices de referencia que se forman de un conjunto de valores cotizados en las bolsas de valores; dichos índices muestran la variación del valor del conjunto de instrumentos que componen el respectivo índice.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estos indicadores son usados en las bolsas de valores como referencia para medir la evolución del mercado, de un segmento del mercado, la industria u otro sector de la economía. Los índices bursátiles también son empleados en #[em benchmarking] para medir el desempeño de las carteras de activos que son administradas por los gestores de mercado.

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p Los instrumentos que conforman el índice por lo general tienen características comunes, como pertenecer a una misma bolsa, tener una capitalización bursátil similar o pertenecer a un mismo tipo de industria. Dicho conjunto de valores cotizados e individuales se llaman valores constituyentes del índice y son muy útiles a la hora de analizar las variaciones del precio de varias empresas en un solo vistazo.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-md-4.px-0
            img(src='@/assets/curso/temas/tema4/img-2.svg' alt='')
          .tarjeta.tarjeta--custom
            .p-5
              p.mb-0(style="color: #FFFF !important") En síntesis, un índice bursátil es un valor numérico que se calcula tomando como base los precios del mercado de cada uno de los valores que lo componen, la rentabilidad del índice corresponde a la variación en el valor del mismo de un periodo a otro.

    p Con estos indicadores, se logra representar la evolución de las empresas de un país, un determinado sector de la economía, o un tipo de activo financiero, de manera que los índices que aglutinan las principales empresas de un país representan un excelente indicador de su economía.
    p.mb-5 Los índices bursátiles se pueden utilizar para muchos fines, entre los principales se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10(data-aos="zoom-in-down")
        .titulo-sexto.color-acento-contenido.mb-5
          p.titulo.pb-0.mb-0 #[b Figura 8.] <em>Funciones de los índices bursátiles.</em>
        figure
          img.mb-2.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema4/img-3-v1.svg', alt='Imagen que menciona siete funciones de los índices bursátiles.')
          img.mb-2.d-block.d-md-none(src='@/assets/curso/temas/tema4/img-3-v2.svg', alt='Imagen que menciona siete funciones de los índices bursátiles.')

    Separador 

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1. Tipos de indicadores bursátiles

    p.mb-5 Debido a su naturaleza, y condiciones en que se generan, establecer criterios para clasificar los tipos de indicadores bursátiles sería muy extenuante, pero son generalmente aceptados en todos los ámbitos los siguientes tres criterios.

    //- .row.align-items-center.mb-3(data-aos="zoom-down-right")
    //-   .col-auto.pe-0(style="z-index:2")
    //-     figure
    //-       img(src='@/assets/curso/temas/ico-title.svg', style="width: 15px" ,alt='').m-auto
    //-   .col-auto.bg-c8(style="z-index:1")
    //-     .p-2
    //-       h3.mb-0.ms-3 Por procedencia geográfica 
    ul.lista-ul.mb-3
      li
        h3.bg-title ● Por procedencia geográfica 
    
    p.mb-4 Bajo este criterio, los indicadores bursátiles se categorizan de acuerdo con el área geográfica de influencia. 

    .row.justify-content-center.align-items-center
      .col-lg-4.col-12
        figure(data-aos="zoom-in")
          img.mb-5(src='@/assets/curso/temas/tema4/img-4.svg' alt='Imagen decoractiva')
      .col-lg-8.col-md-8.col-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Nacionales")
            .col-md-12.mb-4.mb-md-0
              p Compuestos por activos de un mismo país, ejemplo, en Estados Unidos el más usado es S&P, el cual está conformado por 500 de las mejores compañías tanto de la bolsa de Nueva York (NYSE) como la NASDAQ.

          .row(titulo="Internacionales")
            .col-md-12.mb-4.mb-md-0
              p Compuestos por activos de varios países que generalmente comparten un área geográfica común, en Europa, por ejemplo, el principal indicador bursátil es el Eurostoxx el cual reúne las 50 empresas más importantes de esta región.

          .row(titulo="Globales")
            .col-md-12.mb-4.mb-md-0
              p Son indicadores que agrupan empresas de todo el mundo, como el MSCI WORLD, compuesto por más de 1.600 compañías de 23 países en desarrollo.
    
    //- .row.align-items-center.mb-3(data-aos="zoom-down-right")
    //-   .col-auto.pe-0(style="z-index:2")
    //-     figure
    //-       img(src='@/assets/curso/temas/ico-title.svg', style="width: 15px" ,alt='').m-auto
    //-   .col-auto.bg-c8(style="z-index:1")
    //-     .p-2
    //-       h3.mb-0.ms-3 Por el tipo de empresa que contienen
          
    ul.lista-ul.mb-3
      li
        h3.bg-title ● Por el tipo de empresa que contienen

    p.mb-4 En este sector se clasifican los indicadores bursátiles de acuerdo con el sector económico al que pertenecen las empresas que agrupan.

    .row.justify-content-center.align-items-center
      .col-lg-4.col-12
        figure(data-aos="zoom-in")
          img.mb-5(src='@/assets/curso/temas/tema4/img-5.svg' alt='Imagen decoractiva')
      .col-lg-8.col-md-8.col-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Sectoriales")
            .col-md-12.mb-4.mb-md-0
              p Compuestos por empresas de un sector económico determinado, destacan, por ejemplo, sector de materias primas, sector farmacéutico, o indicadores del sector inmobiliario como los REITS.

          .row(titulo="Intersectoriales")
            .col-md-12.mb-4.mb-md-0
              p Combina empresas de sectores diversos de la economía que en ocasiones están interrelacionados como tecnología y salud, por ejemplo. 

    //- .row.align-items-center.mb-3(data-aos="zoom-down-right")
    //-   .col-auto.pe-0(style="z-index:2")
    //-     figure
    //-       img(src='@/assets/curso/temas/ico-title.svg', style="width: 15px" ,alt='').m-auto
    //-   .col-auto.bg-c8(style="z-index:1")
    //-     .p-2
    //-       h3.mb-0.ms-3 Por el tipo de activos que contienen 
    ul.lista-ul.mb-3
      li
        h3.bg-title ● Por el tipo de activos que contienen

    p.mb-4 Cataloga los indicadores según el tipo de activo cotizado.

    .row.justify-content-center.align-items-center
      .col-lg-4.col-12
        figure(data-aos="zoom-in")
          img.mb-4(src='@/assets/curso/temas/tema4/img-6.svg' alt='Imagen decoractiva')
      .col-lg-8.col-md-8.col-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="De renta variable")
            .col-md-12.mb-4.mb-md-0
              p Aquí entran los índices cuya área operativa pertenece a la negociación de títulos valores como las acciones; representan el 100% de las operaciones realizadas en bolsas de valores. 

          .row(titulo="De renta fija")
            .col-md-12.mb-4.mb-md-0
              p A esta categoría pertenecen los indicadores que siguen las cotizaciones de títulos de renta fija como los bonos de gobierno o de las compañías que devenguen intereses variables en función de las condiciones del mercado, como los préstamos o pagarés.

          .row(titulo="De materias primas")
            .col-md-12.mb-4.mb-md-0
              p Se trata de indicadores que reúnen las cotizaciones de diversos sectores de materias primas como son el índice de precios de materias primas agrícolas o el índice de cotización de metales preciosos como el oro o la plata.

    Separador 

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2. Métodos de cálculo de índices bursátiles.s

    p.mb-5 Existe más de una forma de calcular un índice bursátil, pero la mayoría de métodos tienen en común dos elementos, el primero es que todos se miden en puntos, que a su vez dependen del precio de los activos que los componen y el segundo es que todos cuentan con un punto de partida, una fecha de inicio.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p El valor dado al índice puede ser la suma del valor de los activos que lo componen, aunque lo más común es establecer un múltiplo de 100 porque de este modo resulta más sencillo y transparente seguir su evolución en el tiempo. Lo que cuenta a la hora de medir el rendimiento de un índice bursátil es su evolución desde la base, es decir evidenciar cuánto ha crecido o ha descendido, en este punto lo que sí influye es el método que se utilice para calcular el índice.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - ING, 2021

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p En este sentido son principalmente aceptados dos métodos para calcular un índice, teniendo o no en cuenta la capitalización bursátil de cada empresa y ajustando el valor del índice al peso concreto o concediéndose a todos el mismo valor, dichos métodos son:
    
    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-10(data-aos="zoom-in-down")
    //-     LineaTiempoD.color-acento-botones.mb-5
    //-       .row(numero="1" titulo="Índices no ponderados <em>(Price-Weighted Index PWI)</em>")
    //-         .col-md-12.mb-4.mb-md-0
    //-           p En este caso, se consideran los precios de las acciones que componen el índice y se obtiene como una media aritmética del precio de estas. En este cálculo se suma el precio de los títulos y se divide el resultado en el número total de las empresas que lo conforman.
    //-           p Bajo esta modalidad de cálculo, la acción que poseen un mayor valor influye más en la evolución del índice, sin importar el tamaño real de la empresa o la importancia de esta en la economía del país.
    //-           p Los índices no ponderados representan una minoría frente a los índices ponderado; sin embargo, el Dow Jones Industrial Average, que es uno de los principales índices bursátiles del mundo y el más antiguo, funciona de esta forma. (ING, 2021).

    //-         .col-md-12
    //-           figure
    //-             img(src='@/assets/curso/temas/tema4/img-7.png', alt='')

    //-       .row(numero="2" titulo="Índices ponderados según la capitalización Bursátil <em>(Market Value-Weighted Index Mvwi)</em>")
    //-         .col-md-12.mb-4.mb-md-0
    //-           p También conocido como índice ponderado por valor de mercado. Este método es el más usado ya que compone los más representativos del mercado. Para los índices en este método se toma en cuenta el número de acciones en circulación de la compañía por el precio de la acción en un momento dado; esto es lo que se llama capitalización bursátil.
    //-           p De esta manera, la capitalización de mercado refleja el valor de mercado total de las acciones en circulación de una empresa, así mismo, utiliza la capitalización de mercado de una empresa para determinar cuánto impacto puede tener este valor en particular en los resultados generales del índice, puesto que la capitalización del mercado se deriva del valor de las acciones en circulación.
    //-           p Para encontrar el valor de un índice ponderado por capitalización, primero se multiplica el precio de mercado de cada componente por el total de acciones en circulación para llegar al valor de mercado total, la porción del valor de la acción con el valor de mercado total general de los componentes del índice proporción a la ponderación de la empresa en el índice.
    //-           p Para el caso colombiano, el COLCAP es el índice de referencia de la Bolsa de Valores De Colombia BVC. Este indicador refleja las variaciones de los precios de las 20 acciones de la BVC, en donde el valor de la capitalización bursátil ajustada de cada compañía determina su nivel de ponderación.
    //-           p El valor inicial del índice es equivalente a mil puntos 1.000 y su primer cálculo se realizó el 15 de enero de 2008.
            
    //-         .col-md-12
    //-           figure
    //-             img(src='@/assets/curso/temas/tema4/img-8.png', alt='')

                
    .row.justify-content-center.mb-4.BG100.py-3.px-2
      .col-md-6.mb-4.mb-md-0
        .row 
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema4/img-8.png', alt='')
          .col-md-12.mb-4.mb-md-0
            h4.my-3 Índices ponderados según la capitalización Bursátil <em>(Market Value-Weighted Index Mvwi)</em>
            p También conocido como índice ponderado por valor de mercado. Este método es el más usado ya que compone los más representativos del mercado. Para los índices en este método se toma en cuenta el número de acciones en circulación de la compañía por el precio de la acción en un momento dado; esto es lo que se llama capitalización bursátil.
            p De esta manera, la capitalización de mercado refleja el valor de mercado total de las acciones en circulación de una empresa, así mismo, utiliza la capitalización de mercado de una empresa para determinar cuánto impacto puede tener este valor en particular en los resultados generales del índice, puesto que la capitalización del mercado se deriva del valor de las acciones en circulación.
            p Para encontrar el valor de un índice ponderado por capitalización, primero se multiplica el precio de mercado de cada componente por el total de acciones en circulación para llegar al valor de mercado total, la porción del valor de la acción con el valor de mercado total general de los componentes del índice proporción a la ponderación de la empresa en el índice.
            p Para el caso colombiano, el COLCAP es el índice de referencia de la Bolsa de Valores De Colombia BVC. Este indicador refleja las variaciones de los precios de las 20 acciones de la BVC, en donde el valor de la capitalización bursátil ajustada de cada compañía determina su nivel de ponderación.
            p El valor inicial del índice es equivalente a mil puntos 1.000 y su primer cálculo se realizó el 15 de enero de 2008.
      .col-md-6.mb-4.mb-md-0
        .row 
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/img-7.png', alt='')
          .col-md-12
            h4.my-3 Índices no ponderados <em>(Price-Weighted Index PWI)</em>
            p En este caso, se consideran los precios de las acciones que componen el índice y se obtiene como una media aritmética del precio de estas. En este cálculo se suma el precio de los títulos y se divide el resultado en el número total de las empresas que lo conforman.
            p Bajo esta modalidad de cálculo, la acción que poseen un mayor valor influye más en la evolución del índice, sin importar el tamaño real de la empresa o la importancia de esta en la economía del país.
            p Los índices no ponderados representan una minoría frente a los índices ponderado; sin embargo, el Dow Jones Industrial Average, que es uno de los principales índices bursátiles del mundo y el más antiguo, funciona de esta forma. (ING, 2021).

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.col-lg-12
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right")(style="background: linear-gradient(0deg,#03386E, #092A4D)")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/img-9.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  //- h3.mb-1 Formato acta general inspección sanitaria
                  h3(style="color: #FFF !important") Compañías que componen el COLCAP
                  p(style="color: #FFF !important") El índice COLCAP está compuesto por 19 compañías, luego de la eliminación de Avianca tras la crisis sanitaria resultado de la pandemia producto del coronavirus Sarvs2 del 2020 y la afectación que esta organización sufrió con el tema del valor de sus acciones debido a una caída muy fuerte. 

                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/compañias.pdf')"  target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p Dado el amplio universo de elementos, formas y propuestas que encierran el mundo de los mercados financieros, es imperativo lograr reconocer la amplia  gama de posibilidades de negocios que estos nos representan, más aún en un ambiente económico tan diverso y en constante evolución,  poder reconocer y aprovechar estas posibilidades significa estar ad portas de lograr una ventaja competitiva frente a aquellos que sustentan su actividad económica del aprovechamiento de la negociación de títulos valores.
    p.mb-5 En este contexto conocer las características y saber entender e interpretar el comportamiento de los indicadores bursátiles representa la herramienta por excelencia que ayudará a los analistas de este tipo de mercados a encontrar las oportunidades de inversión más efectivas, que al final es la razón de ser de un buen analista de mercados financieros.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
