import React from "react";
import { useParams } from "react-router-dom";

import "../styles/pages/_servicios.scss";
import { BiChevronRight } from "react-icons/bi";
import ScrollToTop from "../components/ScrollToTop";

const Servicios = () => {
  const { servicioID } = useParams();

  const title = servicioID.replace("-", " ").toUpperCase();
  return (
    <div className="servicios-container">
      <ScrollToTop />
      <h3 className="about-title">
        <span>
          {" "}
          <BiChevronRight />
        </span>
        {title}
      </h3>
      <div className="container-data">
        {(servicioID === "potenciales-clientes" &&
          `En el contexto del marketing, un lead es un “comprador potencial”. Nosotros nos encargamos de captarlos a través de internet utilizando las herramientas mas efectivas como Google Adwords, Facebook, y campañas de Email Marketing. Planificamos y diseñamos las mejores estrategias obteniendo así Leads efectivos.Generamos potenciales clientes para su empresa obteniendo tráfico a través de: Google, Facebook, Gmail, Redes Sociales e Email marketing. Son datos generados en el momento
          Son los datos más completos del mercado.
          Son datos con alto porcentaje de cierre.
          Son datos segmentados por GBA / Interior.
          Son datos únicos que solo tendrá su concesionaria.`) ||
          (servicioID === "sms-marketing" &&
            `A través de la utilización de mensajes de texto, ITC-SMS, le permite enviar información personalizada de los productos y servicios que ofrece su empresa, en tiempo real, a diferentes públicos consumidores.
          ¿Cómo funciona? La tecnología desarrollada le permite realizar diversas acciones de marketing y publicidad, de envío e interactivas, que se adaptan a las necesidades de cada Empresa.
          El software, tiene la capacidad de enviar más de 1.500 mensajes de texto por hora.
          Asimismo, permite programar los horarios de cada campaña, a fin de que los SMS lleguen a sus clientes en los días y horarios que usted elija.`) ||
          (servicioID === "marketing-online" &&
            `También se necesitan acciones que acompañen a lo que queremos mostrar. Actualmente se gasta muchísimo dinero en acciones online que nadie sabe a donde van a parar, sólo se ven resultados en tablas que a simple vista parecen muy lindas, pero que a la hora de plasmar la venta, no siempre tienen los resultados esperados.
          Nuestro servicio se basa en Pagar Por Resultados. Realizamos toda la acción, no sólo la del posicionamiento (SEO), sino todas las acciones online para poder acercarle un dato (contacto) que realmente esté interesado en su producto o servicio. Despreocúpese, nosotros le daremos los contactos que usted necesita, para llamarlos y concretar ventas.`) ||
          (servicioID === "google-adwords" &&
            `Google AdWords es una manera rápida y sencilla de anunciarse en Google. Los anuncios de Google AdWords se muestran junto con los resultados de búsqueda de Google, así como en los sitios de búsqueda y contenido en la creciente red de Google, que incluye páginas como AOL, EarthLink, HowStuffWorks y Blogger. Gracias a las búsquedas en Google y a las visitas diarias a páginas que incluyen la publicidad de Google Adwords, sus anuncios de Google AdWords llegan a un amplio público.`) ||
          (servicioID === "email-marketing" &&
            `El e-mail marketing es la utilización del correo electrónico con ánimo comercial o informativo, es la herramienta más eficaz de marketing directo. Para sacarle el máximo provecho debe de estar correctamente enfocada y organizada. El envío de newsletters por email es la mejor manera de mantener una relación estable a largo plazo con sus clientes y clientes potenciales.
          Permite realizar una oferta personalizada y exclusiva a cada persona a través de un medio inmediato, el e-mail.
          Los resultados se pueden medir inmediatamente, aperturas, click y mapa de clicks, esto permite saber que ofertas son las mas buscadas o las zonas calientes del diseño del E-mail.`) ||
          (servicioID === "desarrollo-web" &&
            `Tenemos las habilidades y el talento para el desarrollo de diseño web, desarrollo de software,  apli-caciones, animación, video, piezas gráﬁcas, consultoría y marketing, para comunicar la causa de nuestros clientes. Los años de experiencia, combinados con la habilidad y dedicación, porque nos gusta lo que hacemos, hacen que los profesionales seamos lo que somos hoy, una empresa líder en soluciones digitales para todo tipo de organizaciones, empresas y personas.Nuestras herramientas y soluciones son los vehículos para entregar el mensaje de nuestros clientes. Tenemos la experiencia necesaria para garantizar su satisfacción y éxito. 
          Creamos, diseñamos y desarrollamos sitios y proyectos web a medida según las necesidades del cliente, para que tengan una presencia notoria y de alta calidad en Internet. Le damos a nuestros clientes un producto práctico, eﬁciente y atractivo, para que el proyecto genere en la web una marcada diferencia.`) ||
          (servicioID === "strainer-contact" &&
            `Filtro de Contactos. Con nuestro producto de Datos Filtrados de Contactos, usted suma todas las acciones SMS, IVR, Online, etc. y le da el Valor Agregado del Primer Contacto con el Cliente mediante nuestro Callcenter, permitiendo generar un filtro de las personas que realmente están interesadas en el producto.`) ||
          (servicioID === "ivr" &&
            `Los IVR permiten llegar a los clientes de una manera rápida y efectiva por segmentación. Explicar bien lo que quiere comunicar, ya que un audio es muy efectivo al momento de comunicar lo que queremos decir, y amplía las posibilidades, considerablemente, de convencimiento.`) ||
          (servicioID === "datacenter" &&
            `Ofrecemos un espacio físico en el Datacenter asegurando conectividad permanente. El servicio dedicado puede ser provisto en combinaciones de 3 espacios distintos con conectividad a internet y energía eléctrica. Servidores de alta potencia. Servidores exclusivos de última generación para montar las aplicaciones de su empresa sin necesidad de adquirirlos o renovarlos dentro de un entorno totalmente seguro y de alta eficacia. Lo que necesitas cuando lo querés. Tu plataforma en la nube. Servidores para clientes que buscan máxima flexibilidad y escalabilidad. Somos la primera empresa de Argentina en proporcionar plataformas de autoprovisionamiento.`)}
      </div>
    </div>
  );
};

export default Servicios;
