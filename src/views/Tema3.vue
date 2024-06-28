<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Mercados financieros

    p Los mercados financieros son espacios físicos o virtuales, cuyo objetivo es dirigir el ahorro de personas, familias o empresas a los instrumentos de inversión, que ofrecen quienes buscan financiación para sus proyectos. Se busca conseguir que quienes ofrecen sus recursos puedan obtener una buena remuneración por prestar su dinero y quienes receptan estos recursos puedan disponer de este dinero para realizar sus inversiones.
    p.mb-5 Como todo mercado, este está regido por la ley de oferta y demanda, donde si alguien quiere conseguir a un precio determinado, solo lo podrá adquirir si hay otra persona dispuesta a venderle ese algo a dicho precio; en este sentido, los mercados financieros ponen a todos los vendedores en el mismo lugar, facilitando encontrar a los compradores.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La principal función de los mercados financieros es prestarse como lugar de intermediación entre quienes poseen los recursos para invertir y aquellos que buscan estas fuentes de financiación, a la vez que contribuye a fijar un precio adecuado para los instrumentos que allí se ofrecen, ofrecen liquidez a los activos ofertados y reducen los plazos de reclamación o costes de intermediación, con lo que se garantiza una mayor circulación de dichos activos.

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        .cajon.color-primario.p-4(style="background-color:#E1EFE3")
          p Estos espacios son uno de los elementos más importantes en el sistema económico de un país, pues reúnen condiciones de entrelazamiento entre oferentes y demandantes del sistema financiero, que contribuyen al desarrollo de las formas de relación de estos entes, mientras preparan el escenario para dinamizar la economía, ya que ayudan a la formación y estandarización de precios, garantizan la liquidez que necesita el sistema debido al volumen de negocios, y ayudan a los agentes económicos a obtener los recursos financieros necesarios para financiar su actividad.

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p Todo esto, según las cualidades y beneficios de cada escenario, dependiendo del tipo de negocio en el que se enfoca, ya que, dada la amplia gama y condiciones de los productos ofrecidos, los intervinientes pueden encontrar muchos instrumentos y opciones financieras, ajustados a los requerimientos de inversores y de oferentes, y entre los principales modelos de estos mercados están: monetario, de capitales y derivados.

    Separador 

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1. Monetario

    p.mb-5 Se define como mercado monetario al conjunto de mercados financieros independientes pero relacionados entre sí, en donde se intercambian activos financieros con características específicas como, un plazo de amortización corto, generalmente no mayor a 18 meses, un riesgo de inversión bajo derivado de la gran solvencia de sus emisores y una elevada liquidez, tal como se amplía a continuación.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10(data-aos="zoom-in-down")
        .titulo-sexto.color-acento-contenido.mb-5
          p.titulo.pb-0.mb-0 #[b Figura 7.] <em>Características del mercado monetario.</em>
        figure
          img.mb-2.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/img-2-v1.svg', alt='Imagen que relaciona las características presentes en el mercado monetario; entre ellas la capitalización, la flexibilidad y las entidades presentes, entre otras.')
          img.mb-2.d-block.d-md-none(src='@/assets/curso/temas/tema3/img-2-v2.svg', alt='Imagen que relaciona las características presentes en el mercado monetario; entre ellas la capitalización, la flexibilidad y las entidades presentes, entre otras.')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p Dada la condición de los participantes, el origen de sus recursos y las condiciones sobre las que se celebra el intercambio financiero, entre las que destacan la liquidez, riesgo y tiempo, dentro de los mercados monetarios, se destacan tres tipos:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Mercados monetarios interbancarios")
        .col-md-6.mb-4.mb-md-0
          p En los sistemas financieros es muy común que algunas entidades financieras acudan a otras para pedir financiación, esto se debe a que los bancos no cuentan con necesidades suficientes de depósitos, para hacer frente a una gran operación financiera o porque quieran hacer partícipe a otras entidades de una operación financiera importante.
          p Se habla de mercados interbancarios cuando los bancos u otras instituciones financieras, se prestan dinero unos a otros a un precio o interés determinado, generalmente a un plazo muy corto, lo que garantiza un bajo riesgo ofreciendo a estos una elevada liquidez. En este tipo de mercado, las instituciones acuden a negociar grandes cantidades de recursos que son generalmente excedentes de liquidez y tesorería, recursos que ofrecen como financiación a otras entidades financieras.
          p Con el precio que unos bancos cobran a otros por el préstamo de dinero, surgen indicadores económicos de valorización que fijan los precios de instrumentos financieros o las rentabilidades que estos pueden ofrecer en un tiempo determinado.
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema3/ac-1.png', alt='')
        .col-12
          p En este mercado las entidades financieras realizan operaciones de préstamos y crédito mediante depósitos interbancarios, derivados de corto plazo o #[em Forward Rate Agreement (FRAs)], #[em swaps] de tipos de interés a corto plazo u otros activos financieros, generalmente con vencimiento de un día o una semana.
      .row(titulo="Mercado de activos empresariales")
        .col-md-6.mb-4.mb-md-0
          p Para este tipo de mercado son las empresas quienes emiten instrumentos financieros con los que ceden a sus poseedores derechos u ofrecen a través de contratos una obligación de pago a corto plazo para los que la garantía son ellas mismas, instrumentos con los que buscan fuentes de financiación para sus operaciones, dentro de estos se destacan los pagarés de empresa.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/ac-2.png', alt='')
      .row(titulo="Mercado monetario de deuda pública")
        .col-md-6.mb-4.mb-md-0
          p En este tipo de mercado, el emisor de los instrumentos financieros son la nación o los gobiernos subnacionales (gobernaciones y alcaldías), quienes, con el objetivo de buscar instrumentos de financiación de gastos públicos, emiten instrumentos como bonos o títulos valores conocidos como títulos de deuda pública TES con los que la entidad territorial se compromete a pagar a su poseedor una rentabilidad en un tiempo determinado, que generalmente no es mayor a un año. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/ac-3.png', alt='')

    Separador 

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2. Mercado de capitales

    p.mb-5 Es un tipo de mercado financiero en el que se compran y venden deudas a largo plazo o valores respaldados por acciones. Los mercados de capitales direccionan los recursos de los inversionistas hacia aquellos emisores que buscan fuentes de financiación a largo plazo, superiores a un año. Dentro del mercado de capitales participan diversas instituciones en el sistema financiero, que intervienen regulando y complementando las operaciones que se llevan a cabo. A continuación, se presentan dichos actores y las características propias que definen el mercado.

    .row.justify-content-center.mb-2
      .col-md-11.col-lg-10.col-12.mb-4(data-aos="fade-down")
        .tarjeta.color-primario.p-4
          h4.mb-1.text-center Actores
          p Se destacan las bolsas de valores, las entidades emisoras de los instrumentos financieros, que buscan fuentes de financiación, los intermediarios, que gestionan los intercambios, y los inversionistas que son los aportantes de los recursos y buscan las inversiones. 
    
    p.mb-4.text-center <strong>Características</strong>

    .row.justify-content-center.mb-4
      .col-md-11.col-lg-10.col-12.mb-4(data-aos="fade-down")
        .tarjeta.tarjeta--azul
          LineaTiempoB.mb-2(:datos="datosLineaTiempoB")

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p Para clasificar los tipos existentes de mercados de capitales, se deben usar tres criterios fundamentales que identifican y agrupan las condiciones y características comunes existentes en estos tipos, los cuales son:

    .row.justify-content-center.align-items-center
      .col-lg-4.col-12
        figure(data-aos="zoom-in")
          img.mb-4(src='@/assets/curso/temas/tema3/img-8.png' alt='Imagen decoractiva')
      .col-lg-8.col-md-8.col-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Mercado de renta fija")
            .col-md-12.mb-4.mb-md-0
              p Es uno de los tipos de mercados de valores en los que se negocian deudas representadas por títulos valores emitidos por estados o empresas de capital privado, con los que ofrecen a los inversores, a cambio de prestar su capital, el pago de un interés y la inversión inicial cada determinado tiempo.
              p Su característica más relevante es que la rentabilidad ofrecida en la compra de estos activos por el cobro de intereses está determinada para todo el plazo hasta su vencimiento, lo que no significa que siempre el tipo de interés no será fijo a lo largo del activo, puesto que, el término fijo se refiere al plazo de vencimiento de las obligaciones y no al precio, el cual está sujeto a las oscilaciones del mercado.
              p Por su naturaleza se entiende que el emisor del instrumento financiero concede con este una deuda con el adquirente del título valor, lo que garantiza un respaldo financiero para quien adquiere el título, si bien el riesgo del precio de oscilación existe, el inversor puede optar por vender dicho título o mantener la deuda hasta su vencimiento recibiendo la rentabilidad acordada en la emisión. Los activos de renta fija suelen pagar un interés en forma periódica, en la que a la tasa de interés contractual se le denomina cupón.

          .row(titulo="Mercado de renta variable")
            .col-md-12.mb-4.mb-md-0
              p Es un mercado de valores en el que las empresas emisoras de los instrumentos financieros, ofrecen parte de su capital a modo de acciones, las cuales ofrecen a los inversores derechos sobre la propiedad de los activos reales de la empresa emisora y las utilidades y dividendos que esta pueda generar.
              p Las acciones son representativas del capital de la empresa; en este sentido, los inversores o accionistas son copropietarios y, por tanto, solidarios con las responsabilidades de la compañía, ejerciendo derecho de participación en las asambleas de la empresa y elección de los representantes de estas que deciden sobre los cambios y expansión de actividades que les propone la junta directiva.
              p Por lo general los instrumentos de renta variable reportan a sus tenedores ganancias o rendimientos en el largo plazo, dado que el pago de estas rentabilidades está sujeta al funcionamiento y la situación económica de la compañía en el tiempo, el valor pagado ya sea en efectivo o en acciones puede varias, de allí su nombre mercado de rentas variable. 
          
          .row(titulo="Mercado de crédito a largo plazo")
            .col-md-12.mb-4.mb-md-0
              p Forma parte del mercado de capitales y se caracteriza por la negociación de instrumentos de deuda a largo plazo, lo que lo diferencia del mercado accionario en el sentido de que lo que se está negociando no es un derecho sino un préstamo.
              p Es un mercado en el que los que intervienen prestan o piden prestado, así quién pide prestado se obliga al pago del capital ofrecido más los rendimientos o intereses acordados en el tiempo establecido y a su vez el inversor adquiere este instrumento con el propósito de ganar rendimientos mientras financian a los emisores. 
              p Dado que esta modalidad de mercado establece un largo plazo para el cumplimiento de las obligaciones, ofrece un grado de rentabilidad alta, pero a su vez dado la volatilidad del mercado representa un grado alto de riesgo. 
              p Entre los tipos de instrumentos más comunes que encontramos en este mercado están los préstamos, los créditos bancarios y los pagarés. 

    Separador 

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3. Mercado de derivados 

    p Es el mercado financiero en el que ofertan instrumentos o contratos financieros cuyo valor se basa en la evolución de los precios de uno o más activos, denominados activos subyacentes, que pueden ser físicos, como materias primas, o intangibles como la tasa de cambio, acciones o tasas de interés.
    p Los instrumentos financieros derivados permiten asegurar un precio futuro de la compra o venta para un activo subyacente y así prevenir las posibles variaciones al alza o a la baja del precio que se genere sobre este activo.
    p.mb-5 Este mercado ofrece herramientas para administrar y controlar riesgos y generar certidumbre y control de estos, que condicionan los precios de los activos financieros ofertados en los mercados, logrando así una planeación financiera confiable, eliminando o minimizando la fluctuación de precios en dichos mercados.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todo esto hace posible tomar posiciones de venta sobre dichos instrumentos financieros, lo que permite tener beneficios aún cuando los precios o valores de sus activos subyacentes caen, ya que los derivados financieros permitirán al inversor asumir riesgos debido a que se pactan ciertas condiciones, precios y fechas de vencimiento desde el momento de su adquisición. 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p Dado que existe gran variedad de derivados financieros y las condiciones por las cuales se generan estos instrumentos es tan diversa, la clasificación de dichos mercados se da, principalmente, en dos tipos según su regulación.

    .row.justify-content-center.mt-4
      .col-lg-10.col-12(data-aos="zoom-in-down") 
        ImagenInfografica.color-acento-botones.mb-3.d-none.d-sm-none.d-md-block
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-10-v1.svg', alt='')

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="43.5%" y="24%" numero="+")
            p Es un acuerdo en el que dos partes se obligan, una a comprar y otra a vender una determinada cantidad de bienes a futuro, fijando su precio anticipadamente, condiciones que son fijadas en contratos estandarizados y regulados por el mercado. 

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="43.5%" y="37.5%" numero="+")
            p En este tipo de mercado se ofertan contratos en los que dos partes acuerdan el derecho a comprar o vender un activo subyacente, derecho que puede ser ejercido en una fecha determinada por un valor ya establecido, para quien compra, la opción es un derecho que puede o no ejercer, en caso contrario quien vende si está obligado a vender el activo.
          
          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="56.5%" y="24%" numero="+")
            p Suelen ser usados para cubrir riesgos con la deuda o las fluctuaciones en los precios de las materias primas, a través de un contrato en el que las partes acuerdan intercambiar durante un determinado periodo, dos flujos financieros (ingresos y pagos) de intereses en la misma divisa o en una divisa distinta. 

          .tarjeta.color-acento-contenido1.p-3.texto-negro(x="56.5%" y="37.5%" numero="+")
            p También conocido como contrato a plazo. En este  las partes adquieren un compromiso en el que acuerdan intercambiar un bien físico o un activo financiero en un futuro respetando el precio acordado en el momento de establecido el contrato, con lo que se busca cubrir el valor del instrumento financiero de la variación fruto de la especulación. 
          
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        figure 
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/img-10-v2.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="zoom-in-down")
        p En conclusión, conocer y entender a fondo no solo las características de cada uno de los elementos presentes en los distintos tipos de mercados financieros, sus bondades o condiciones, debe ser una de las principales cualidades de quienes ejerzan actividades de asesoría financiera, puesto que, este conocimiento les garantizará la ejecución de asesorías efectivas, aplicadas a cada campo de manera eficiente y oportuna con las que se pueden garantizar asesorías exitosas.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        texto:
          'El inversionista que compra los títulos valores (acciones) se convierte en socio de la empresa en parte proporcional al valor de su inversión.',
        icono: require('@/assets/curso/temas/tema3/img-3.svg'),
      },
      {
        texto:
          'Existe mayor riesgo al invertir, dado que son mercados que ofrecen altos rendimientos variables, lo que conlleva a una alta volatilidad de precios.',
        icono: require('@/assets/curso/temas/tema3/img-4.svg'),
      },
      {
        texto:
          'No existe garantía real de recuperación en la inversión o el pago de rendimientos.',
        icono: require('@/assets/curso/temas/tema3/img-5.svg'),
      },
      {
        texto:
          'No se establece un plazo definido para el pago de rendimientos, quienes participan en el mercado deciden cuándo comprar y cuando vender los títulos.',
        icono: require('@/assets/curso/temas/tema3/img-6.svg'),
      },
      {
        texto:
          'Dado el volumen de las negociaciones, resulta relativamente fácil comprar o vender los títulos ofertados, lo que garantiza un grado considerable de liquidez.',
        icono: require('@/assets/curso/temas/tema3/img-7.svg'),
      },
    ],
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
