<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fuentes y usos del efectivo

    p Uno de los objetivos principales de la administración y gestión financiera es la generación estratégica de políticas que contribuyan a la consecución de recursos de bajos costos, que garanticen un tiempo adecuado para su uso o aplicación en actividades que sean rentables a la empresa.
    p.mb-5 Dichas estrategias proveen herramientas de análisis organizacionales, que permiten diagnosticar la evolución de la relación entre las fuentes que originan la consecución de los recursos, tales como el efectivo, y el uso que se les está dando a los mismos. Este análisis permite evaluar la pertinencia de las decisiones con las que se define la manera de cómo se obtienen los recursos y en qué se gastan. Así mismo, dicho análisis permite considerar otras opciones que mejoren estos procesos de obtención y gastos y hacer proyecciones a futuro sobre su comportamiento, buscando mejorar la situación financiera de las empresas, como se presenta en los siguientes casos. 

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-12
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/img-1-v1.svg', alt='')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/img-1-v2.svg', alt='') 

    p.mb-5(data-aos="fade-right") Conociendo esta información, dadas las estrategias financieras planteadas, la empresa una vez identifique las fuentes que generan los recursos, la cantidad y la tendencia de la generación de estos si es alta o baja, así como reconocer el uso que se le está dando a los recursos para evaluar si son óptimos o, por el contrario, se debe reestructurar la política de usos de estos, dado que se pueden estar presentando una salida improductiva.

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        .cajon.color-primario.p-4(style="background-color:#E1EFE3")
          p En este sentido, saber cómo se obtienen y cómo se gastan los recursos permite a la empresa prever su comportamiento financiero, lo que conlleva a tomar mejores decisiones financieras respecto a posibles inversiones o, por el contrario, la búsqueda de instrumentos de financiación más convenientes y que mejor se adapten a la realidad financiera de la organización.

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1. Inversión 

    p(data-aos="fade-right") A medida que las empresas desarrollan sus actividades económicas, y si este desarrollo les permite robustecer sus recursos, la evolución de la economía y la aparición de nuevas formas de mercado y tendencias empresariales, entre otras circunstancias tanto económicas como sociales, obligan a que todas las empresas busquen evolucionar e incluso innovar en sus estrategias de crecimiento e incursionar en nuevos mercados.
    p(data-aos="fade-right") Para el efecto, surge la necesidad de establecer estrategias que integren los recursos obtenidos durante el desarrollo de sus actividades económicas para obtener herramientas que les permitan incursionar en nuevos mercados y obtener otras alternativas para obtener nuevos beneficios económicos. 
    p.mb-5(data-aos="fade-right") Una de las estrategias más conocidas, en este sentido, son las #[strong inversiones], que consisten en usar los recursos con los que cuenta la empresa, llámense activos, tiempo, trabajo o capital, para obtener un beneficio a futuro. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  En este sentido, la empresa decide renunciar a los beneficios que venía obteniendo o que podría obtener por la tenencia de sus recursos (coste de oportunidad) cuando decide hacer uso de estos recursos e incluirlos en otros proyectos económicos que podrían o no, generarle a futuro mejores beneficios que los que venía percibiendo, pues es intrínseca a esta decisión la incertidumbre del éxito, por tanto, cuando se realiza una inversión se está asumiendo un riesgo. 

    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-10(data-aos="zoom-in-down")
    //-     p Dado que este sector económico es tan variado, los criterios para clasificar los tipos de inversión podrían hacerse desde distintos puntos de vista.  No existe una clasificación estándar que defina los tipos de inversión, ni mucho menos una que sea mejor que otra, por tanto, para poder hacer una clasificación acorde a la realidad económica de cada inversión, es necesario considerar las circunstancias y los actores que intervienen en cada hecho económico.

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p Para poder hacer una clasificación acorde a la realidad económica de cada inversión, no existe una clasificación estándar que defina los tipos de inversión, hay que considerar las circunstancias y los actores que intervienen en cada hecho económico.

    .row.justify-content-center.mt-5
      .col-lg-12.col-12(data-aos="zoom-in-down") 
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-3.svg', alt='')

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="8.5%" y="30%" numero="01")
            p Para este criterio se tiene en cuenta el periodo de tiempo en el cual el inversor prevé mantener el capital invertido, sin que surja la necesidad de retirarlo; lo anterior en consideración a las metas fijadas previas a la decisión de invertir y la rentabilidad que espera ganar.
          
          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="16%" y="43%" numero="02")
            p Se prevé recuperar la inversión inferior a un año. En casos de caídas en los mercados financieros, la inversión no tendría tiempo de recuperarse, por tanto, es recomendable para ese tipo de horizonte temporal, no invertir en activos financieros de alto riesgo, sino enfocarse en fondos de inversión de activos de renta fija.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="16%" y="52%" numero="03")
            p En este horizonte temporal, el inversor espera recuperar su inversión entre uno y tres años, periodo de tiempo que aún no garantiza la recuperación de los mercados financieros en caso de caídas financieras; por este, motivo se recomienda optar por fondos de inversión mixtos que dirijan los recursos a inversiones de renta fija y variable.
          
          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="16%" y="61%" numero="04")
            p Son fondos de inversión que garantizan la entrega de rentabilidades solo en un plazo mayor a tres años. En este sentido, el activo más recomendable para invertir cuando se dispone de mucho tiempo es el activo financiero de renta variable, dado que es el que ofrece mejor rentabilidad a largo plazo,
            p Por otro lado, si el inversor considera emplear sus recursos en activos de mayor riesgo, debido a que son los que mayores rentabilidades ofrecen, el horizonte temporal por el cual debería hacer la inversión es el largo plazo, ya que, si se dispone de tiempo, el mercado podrá hacer las habituales correcciones financieras, sin tener que preocuparse por las caídas en los mercados cerca del tiempo fijado para la recuperación de la inversión.
          
          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="27.5%" y="30%" numero="05")
            p En este criterio se agrupan las inversiones que van enfocadas más al tipo de instrumento financiero o real plenamente definido, por el cual el inversor decide destinar los recursos a invertir, para lo que define criterios basados más en la realidad económica y necesidades estructurales de la empresa.
          
          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="38.5%" y="43%" numero="06")
            p Inversión destinada a la adquisición de activos reales tales como tractores, empaquetadoras y elementos tecnológicos, con cuya inversión el ente económico espera mejorar procesos productivos o estructurales que se traducirán en una mejora de la producción que garantice el aumento de sus ingresos, mejorando los tiempos de producción y evitando sobrecostos.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="38.5%" y="52%" numero="07")
            p En este tipo de inversión se destinan los recursos a invertir en la adquisición de materias primas dado que este elemento es susceptible a fluctuaciones considerables en oferta y demanda, condicionadas por alteraciones de tipo mercantil, social e incluso climático.
            p Con este tipo de inversión se busca controlar el precio por el cual la empresa adquiere dichos materiales, aprovechando el momento en el que su precio está más bajo para evitar sobrecostos de los mismos a largo plazo, o venderlos para obtener una mayor ganancia en épocas en que dichas materias eleven de manera considerable su precio de compra.
          
          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="38.5%" y="62%" numero="08")
            p Corresponde a la inversión en la que la empresa destina recursos para la adquisición de equipos de transporte, con lo cual busca disminuir los costos de transporte, aumentar la distribución de las mercancías, lo que a su vez se traducirá en un aumento significativo en la rentabilidad de la operación de la empresa.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="38.5%" y="71.5%" numero="09")
            p De acuerdo al análisis previo por el cual el ente económico decide invertir en la compra de edificios, dadas las características de este mercado es por todos sabido que los bienes raíces representan una inversión que garantiza una renta variable a largo plazo, en el sentido que la propiedad siempre tiende a valorizarse con el tiempo.
            p Al tiempo que poseer un edificio, oficina local, o cualquier tipo de bien inmueble, representa alternamente a su valorización, un ahorro en el gasto por pagos de alquiler del espacio en el cual la empresa desarrolla su actividad económica.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="38.5%" y="81.5%" numero="10")
            p En este tipo de inversión encontramos la compra de acciones, bonos o derechos de participación sin voto, que se caracterizan, entre otras, por ser instrumentos financieros de renta variable que permiten a su poseedor, además de recibir parte de los rendimientos obtenidos por el ejercicio de la presa, participar en algunos casos en la toma de decisiones respecto al funcionamiento y estructura de la empresa.
          
          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="38.5%" y="92.5%" numero="11")
            p El objetivo que busca la empresa cuando decide invertir en investigación y desarrollo es el de adquirir herramientas que le permitan innovar, mejorar la calidad de los productos que oferta, lograr la reducción de los costos de producción o el precio de venta de los productos, con lo que se pretenden aumentar las ventas y así lograr una ventaja competitiva en el mercado.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="50%" y="30%" numero="12")
            p Esta clasificación hace referencia a los instrumentos financieros por los cuales se desea invertir, haciendo énfasis en el sector económico al cual pertenecen, entre estos se pueden reconocer tres sectores.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="56.5%" y="43%" numero="13")
            p Bajo esta modalidad el ente económico inversor decide emplear parte de los recursos de la empresa en el financiamiento de bien sea otras empresas o en la incursión en nuevas formas de negocio que le permitan obtener nuevos ingresos o rentas a largo plazo.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="56.5%" y="52%" numero="14")
            p En este tipo de inversiones, la empresa hace uso de los recursos diseccionándolos a modelos de negocio que en general no están relacionadas con la actividad ordinaria de la empresa pero que sí le podrían significar la recepción de nuevos ingresos a la empresa, un ejemplo de este tipo de inversión son los préstamos a socios donde se establece el pago de intereses.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="56.5%" y="61%" numero="15")
            p Se centra en la adquisición de instrumentos del mercado financiero, como derechos no tangibles, que generalmente garantizan pagar rendimientos a corto, mediano o largo plazo. Dadas estas condiciones, este sector ofrece opciones de inversión muy variables, que a su vez no exigen el pago de altas sumas de dinero para la adquisición los títulos de inversión, por ser un mercado tan dinámico los inversores podrían o no obtener sus primeras rentabilidades incluso en días, que podrían ser altas o bajas de acuerdo al nivel de riesgo de cada instrumento financiero.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="69%" y="30%" numero="16")
            p Este sector enmarca las inversiones agrupándolas según el origen del capital con que cuentan los entes que ofrecen los instrumentos financieros. Se reconocen dos tipos.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="75%" y="43%" numero="17")
            p En este tipo se manejan ofertas financieras que provienen de modelos de negocios con capital privado. En este sentido, su variedad es muy extensa y agrupa casi cualquier actividad social o comercial, en general ofrecen el pago de rentabilidades a través de figuras como pago de dividendos.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="75%" y="52%" numero="18")
            p Se refiere a los instrumentos financieros ofrecidos por entes económicos que sustentan su actividad con recursos del estado, o que se dedican a la administración o explotación de recursos que son propiedad estatal, generalmente ofrecen tales activos financieros como forma de captar recursos para la financiación de sus operaciones, y entre las rentabilidades que ofrecen están los pagos de dividendos a los poseedores de bonos o acciones emitidos por estas entidades.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="87.8%" y="30%" numero="19")
            p Bajo este criterio se reúnen todas las inversiones que están diseñadas a un público específico; es decir, se crean a la medida de los intereses del inversor, por tanto, no corresponden a un instrumento ya creado, sino que se toman los instrumentos ya existentes y adaptan sus condiciones como riesgo, rentabilidad tiempo para estructurarlo a la medida de la población para quien va dirigido.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="98.5%" y="44%" numero="20")
            p Este tipo de inversión se centra en las necesidades o condiciones individuales del interesado. Se caracteriza por su flexibilidad a la hora de establecer las características del negocio, al punto que crea un instrumento financiero hecho a la medida de cada cliente. En este sentido, se resalta la asesoría ofrecida por la entidad administradora de los recursos, pues no solo se encarga de gestionar los recursos del inversor, sino que también le asesora respecto a qué metas reales son alcanzables y cuáles no.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="98.5%" y="56%" numero="21") 
            p A diferencia de la inversión personalista, la generalista ofrece modelos de negocio con condiciones ya establecidas en cuanto a nivel de riesgo, rentabilidad y horizonte temporal. El catálogo de instrumentos financieros es tan variado que va dirigido a casi cualquier público, y es este el que decide en cuál invertir según se adapte o no a sus necesidades; en este sentido, es el inversor el que se adapta a al instrumento y no al contrario.

    .row.justify-content-center.align-items-center.mb-3
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/tiposdeinversion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Descargar.</strong> Tipos de inversión.

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p Ahora bien, el mercado financiero respectos los instrumentos que ofrece es tan variado que, dados las cualidades, condiciones de cada instrumentos y necesidades o intereses del interesado, sería casi imposible determinar cuál sería la mejor opción a la hora de decidir invertir en cualquiera de estos; pero, siendo el objetivo el otorgar herramientas con las cuales el analista logre identificar estas variables y determinar cuál será para su caso la mejor decisión, es pertinente informar que, a modo general, para cualquier inversión siempre es posible identificar cuatro factores que indican cuál es la opción que cómo inversores más conviene; estas son: 

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-12
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/img-4-v1.svg', alt='')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/img-4-v2.svg', alt='') 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Entender y considerar estos factores para tomar decisiones de inversión, aunque parezca obvio no es tan común como debería, pues la mayoría de los inversores suelen centrarse en los rendimientos, sin considerar el riesgo o el tiempo, pensar solo en cuánto se ganará, no es una buena idea. De ahí que se hayan expuesto quizá no todas, pero sí las aristas más relevantes que componen el mercado de inversiones. El estudio minucioso de las mismas otorgará al analista financiero elementos para tomar quizá no la mejor decisión, pero sí la más acertada en coherencia con su situación económica y la de su empresa. 

    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2. Financiación  

    p.mb-5(data-aos="fade-right") Para asegurar su supervivencia y garantizar la continuidad de sus operaciones, las empresas buscan obtener fuentes de recursos que le garanticen permanencia. Dada esta necesidad, las fuentes de financiación son la primera alternativa a considerar para lograr este objetivo. Entre estas se pueden considerar las siguientes.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10(data-aos="zoom-in-down")
        .titulo-sexto.color-acento-contenido.mb-5
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Fuentes de financiación</em>
        figure
          img.mb-2.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/img-6-v1.svg', alt='')
          img.mb-2.d-block.d-md-none(src='@/assets/curso/temas/tema2/img-6-v2.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p Por ser un sector tan variado, es complejo definir las características comunes de todas las fuentes de financiación, pero en general se puede hablar de fuentes de inversión si estas cumplen con los siguientes aspectos mínimos.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12(data-aos="zoom-in-down")
        .titulo-sexto.color-acento-contenido.mb-5
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Características de las fuentes de financiación</em>
        figure
          img.mb-2.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/img-7-v1.svg', alt='')
          img.mb-2.d-block.d-md-none(src='@/assets/curso/temas/tema2/img-7-v2.svg', alt='')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p En términos generales y teniendo en cuenta factores como la procedencia, el tipo de capital y el tiempo de su vencimiento, se reconocen los siguientes tipos de financiación:

    .row.justify-content-center.mt-5
      .col-lg-12.col-12(data-aos="zoom-in-down") 
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-8.svg', alt='')

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="12%" y="26%" numero="01")
            p Corresponde a las fuentes de financiación cuyo tiempo de devolución es inferior a un año. Un ejemplo común de este tipo son los préstamos de libre inversión, deudas con proveedores, entre otros.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="12%" y="50%" numero="02")
            p Para este tipo de fuente, el vencimiento de su exigencia debe ser superior a un año, ejemplo, las ampliaciones de capital, las emisiones de obligaciones, etc.
          
          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="33%" y="28%" numero="03")
            p Corresponde a los recursos financieros que son propiedad del ente económico, que desde su constitución fueron destinados como fuente de financiación.
            p Entre este tipo de fuente se encuentran: el capital social, las reservas, los beneficios no distribuidos, que pueden ser usados para ampliar el capital, las provisiones definidas para cubrir posibles pérdidas a futuro, o las amortizaciones con las que se prevé evitar la descapitalización de la empresa a causa del envejecimiento de los activos. 

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="50%" y="28%" numero="04")
            p Son fuentes de financiación que provienen de entes económicos ajenos a las actividades ordinarias de la empresa, en este tipo las fuentes más comunes son las aportaciones de capital de los socios.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="67%" y="28%" numero="05")
            p Negocio financiero en el que a través de la firma de un contrato dos o más personas físicas o jurídicas, para obtener un dinero, se compromete devolver la inversión inicial más los rendimientos generados en un plazo determinado.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="84%" y="28%" numero="06")
            p Se caracterizan por ser una operación de financiación a un actor o entidad financiera llamado acreedor, quien presta una cifra monetaria a otro llamado deudor, quien a partir de ese momento garantiza el retorno de la cantidad pedida en préstamo al cumplimiento de un tiempo estipulado; periodo en el que también deberá pagar al acreedor un rendimiento adicional llamado interés, más los gastos de administración subyacentes del negocio.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="33%" y="52%" numero="07")
            p Es un tipo de contrato financiero en el que una empresa o persona real cede a otra el uso de un bien y está en contraprestación se compromete a cumplir con el pago de unas cuotas de arrendamiento periódicas durante el tiempo establecido previamente. Al término de este contrato, el usuario del bien podrá ejercer una opción de compra sobre este.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="50%" y="52%" numero="08")
            p Para este tipo de financiación la empresa cede las deudas que tiene por cobrar a favor de un tercero, generalmente una entidad financiera, a cambio de un valor monetario pactado.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="67%" y="52%" numero="09")
            p Es un producto financiero, en el que un deudor cede la administración de su obligaciones o pagos a sus acreedores, a una entidad financiera, para que esta se encargue de dichos pagos, y a cambio pueda cobrar una comisión por la administración del negocio.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="84%" y="52%" numero="10")
            p En este caso el emisor de la deuda cede sus derechos de cobro a una entidad financiera para que ésta proceda con el pago anticipado de las mismas y a su vez cobre comisiones e intereses.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="33%" y="75%" numero="11")
            p Es un título de crédito formal en el que una persona real o jurídica firmante se compromete a pagar a otra beneficiaria o tenedora una cantidad de dinero al final de un plazo de tiempo plenamente establecido.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="50%" y="75%" numero="12")
            p Es un tipo de financiación colectiva en el que se usa el capital de varios individuos, a través de pequeñas donaciones, que después serán invertidos en la financiación de pequeños proyectos personales o sociales.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="67%" y="75%" numero="13")
            p Es una fuente de financiación colectiva en la que pequeños inversores prestan su dinero a una empresa con el objetivo a futuro recuperar el valor inicial de su inversión más el pago de unos intereses. Es una alternativa a los préstamos bancarios.

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="84%" y="75%" numero="14")
            p Fuente de financiación en la que, compañías generalmente pequeñas o nuevas ofrecen grandes posiciones en su capital, a aquellos inversores que se ofrecen invertir y hacer crecer el negocio.

    .row.justify-content-center.align-items-center.mb-3
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/tiposdefinanciacion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Descargar.</strong> Tipos de financiación.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
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
