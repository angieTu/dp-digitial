import React from "react";

const Datacenter = () => {
  return (
    <>
      <div className="info">
        <p>
          Aloje tus datos en un espacio seguro y confiable. Nosotros nos
          encargamos del cuidado.
        </p>
      </div>
      <div className="table">
        <div>
          <h4>Colocation</h4>
          <p>
            Ofrecemos un espacio físico en el Datacenter asegurando conectividad
            permanente. El servicio dedicado puede ser provisto en combinaciones
            de 3 espacios distintos con conectividad a internet y energía
            eléctrica.
          </p>
        </div>
        <div>
          <h4>Servidores dedicados</h4>
          <p>
            Servidores de alta potencia. Servidores exclusivos de última
            generación para montar las aplicaciones de su empresa sin necesidad
            de adquirirlos o renovarlos dentro de un entorno totalmente seguro y
            de alta eficacia.{" "}
          </p>
        </div>
        <div>
          <h4>Gigacloud</h4>
          <p>
            Lo que necesitas cuando lo querés. Tu plataforma en la nube.
            Servidores para clientes que buscan máxima flexibilidad y
            escalabilidad. Somos la primera empresa de Argentina en proporcionar
            plataformas de autoprovisionamiento.
          </p>
        </div>
      </div>
    </>
  );
};

export default Datacenter;
