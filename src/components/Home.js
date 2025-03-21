import React from "react";
import { useNavigate } from "react-router-dom";

import Boton from "./boton/Boton";

const Home = () => {
  const navigate = useNavigate();
  const volverInicio = () => navigate("/");
  const sobreNosotros = () => navigate("/sobreNosotros");
  const volverPagar = () => navigate("/pagar");

  return (
    <div className='app-container'>

      <section className='dron-section'>
        <img src="/Img/dron.webp" alt="Maravillosa máquina de transporte" className="dron-image" />
      </section>

      <article className="text-section">
        <h2>Descubre las experiencias únicas en nuestra zona</h2>
        <p>
          En <strong>pickMebyLola's</strong> ofrecemos un sinfín de actividades para que disfrutes con los tuyos en un ambiente
          relajado y cercano. Aquí, cada rincón tiene una historia que contar y cada experiencia te conecta con la
          esencia de la región. Estas son algunas de las maravillas que podrás vivir:
        </p>
        <ul>
          <li><strong>Experiencias únicas:</strong> Desde rutas en bicicleta hasta senderismo por paisajes espectaculares, te ofrecemos aventuras para todos los gustos, siempre rodeados de naturaleza.</li>
          <li><strong>Ambiente familiar:</strong> Somos una comunidad que valora la cercanía y el bienestar familiar. Aquí, los pequeños detalles hacen la diferencia, y siempre sentirás que estás en casa.</li>
          <li><strong>Kilómetro 0:</strong> Apostamos por productos locales y sostenibles, para ofrecerte lo mejor de nuestra tierra y dar apoyo a los agricultores y productores de la zona.</li>
          <li><strong>Responsabilidad con el medio ambiente:</strong> Nos comprometemos con la sostenibilidad, utilizando recursos responsables y promoviendo el cuidado del entorno para las generaciones futuras.</li>
        </ul>
        <p>
          En <strong>pickMebyLola's</strong>, nos enorgullece ofrecerte una experiencia auténtica, en un lugar donde el cuidado del
          medio ambiente y el respeto por nuestra gente son nuestra mayor prioridad. ¡Únete a nosotros y vive lo mejor
          de la naturaleza, la gastronomía y la tradición!
        </p>
      </article>

      <Boton
        texto="Emergencias"
        accion={() => alert("Emergencia activada. En seguida llegará la ayuda")}
        className="botonE"
      />

      <Boton
        texto="Comprar"
        accion={volverPagar}
        className="botonH"
      />

      <Boton
        texto="Sobre Nosotros"
        accion={sobreNosotros}
        className="botonH"
      />

      <Boton
        texto="Inicio"
        accion={volverInicio}
        className="botonH"
      />
    </div>
  );
}

export default Home;

