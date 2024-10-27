import React from "react";
import "./AcercaDe.css"
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";




export default function AcercaDe() {
    return (
        <div className="container_aboutus">
        <nav className="navbar navbar-light mb-5" id="encabezado">
                    <Link to="/" className="container-fluid">
                        <img
                        src={logoblanco}
                        width="290"
                        height="550"
                        className="img-fluid d-block mx-auto"
                        alt='logoMingga'
                        />
                    </Link>
                </nav>

                <div className="container-fluid" align="left" id="padding">

                <h3 id="titulo" align="center"> <b>Leer y escribir bien, las competencias fundamentales para tener éxito <br />
                en la moderna sociedad mundial de la información y el conocimiento

            </b> 
            </h3>

            <br />
            <div >
                <img
                className="d-block w-100"
                src={aboutus}
                width="400"
                height="450"
                alt="..."
                />
                </div>

                <br />

                <h3 id="titulo" align="center"> <b>Nosotros <br />
            </b> 
            </h3>
            <br />
            <p>
            <b>Hay una ley universal del desarrollo: todo progreso y bienestar de una sociedad, depende de la calidad de la educación que recibe su población. </b> Por ello, los países más desarrollados, tienen como prioridad contar con sistemas educativos modernos y  eficientes, que fortalezcan los conocimientos y competitividad de sus habitantes. Así lo demuestran las pruebas PISA, que ubican en los primeros lugar a países de altos ingresos con los mejores sistemas educativos del mundo: Singapur, Canadá, China, Finlandia, Hong Kong, Estonia, Japón y Corea del Sur.
            </p>
            <p>
            <b>LEO - Club Mundial de Lectura,</b> es un proyecto académico que tiene como misión promover la lectura, la escritura y el multilingüismo, como hábitos que mejoran el nivel educativo y cultural de los estudiantes, y fortalecen sus competencias comunicativas, necesarias para tener éxito en su actividad académica y en la moderna sociedad de la información y el conocimiento, que exige leer y analizar cantidades crecientes de información, y escribir contenidos claros y convincentes para millones de personas en todo el mundo.
            </p>
            <p>
            Para cumplir esta misión, <b>LEO</b> opera como una red digital, que integra a los estudiantes en una gran comunidad mundial que genere oportunidades de éxito académico, profesional y social. 
            </p>
            <br />

            

            <h3 id="titulo" align="center"> <b>Objetivos <br />
            </b> 
            </h3> 
            <br />      
            <p>
            •	Facilitar el acceso a los libros e incrementar los índices de lectura, para lograr que los estudiantes lean al menos un libro al mes, doce libros al año. <br />   
            •	Ofrecer escenarios para que los estudiantes escriban y publiquen sus obras en los diferentes géneros, dándolas a conocer en el país y el mundo. <br /> 
            •	Promover el multilingüismo y las competencias comunicativas de los estudiantes, para mejorar sus posibilidades de participación y éxito en la moderna sociedad tecnológica, a través de internet. <br /> 
            •	Fortalecer a las familias y las instituciones educativas como escenarios básicos para inculcar el hábito de lecto-escritura en los estudiantes. <br /> 
            </p>
            <p>
            <b>Pueden ser socios</b> del <b>Club Mundial de Lectura</b> todos <b>los estudiantes en nuestro país y cualquier parte del mundo.</b> Los menores de edad deberán contar con autorización y tutoría de sus padres o acudientes, anexando el formato de autorización de vinculación.
            </p>
            <p>
            La membrecía anual tiene un costo de solo $50.000. Los socios tienen acceso libre y gratuito a <b>bibliomobil.com</b>, nuestra biblioteca digital con más de 15.000 obras en cinco idiomas, y a los demás programas educativos y culturales del Club (publicar obras, taller literario, etc.)
            </p>

            
            <br /> 
            <div>
                <img
                className="d-block w-100"
                src={aboutus1}
                width="400"
                height="500"
                alt="..."
                />
                </div> 
            
            

            <br />
            <h3 id="titulo" align="center"> <b>Programas y Servicios a los Asociados<br />
            </b> 
            </h3>
            <br />
            <p>
            <b>LEO</b> ha desarrollado un paquete de herramientas pedagógicas con tecnologías web, que permiten en forma eficiente y económica promover y masificar la lectura, la escritura y el multilingüismo como competencias clave para mejorar el desempeño académico y lograr que los estudiantes aprovechen las oportunidades de contactos, educación y negocios que ofrece internet a nivel mundial:
            </p>
           

            <h4 id="titulo" align="left"> <b>1. Promoción de la Lectura y el Multilingüismo<br />
            </b> 
            </h4> 
            <br />  
            <p>
            Al vincularse a <b>LEO</b>, los socios inmediatamente acceden gratuitamente a <b>bibliomobil.com</b>,  nuestra biblioteca digital con más de 15.000 obras  de ciencias sociales y literatura en 5 idiomas (español, inglés, francés, portugués e italiano), que  pueden leer on line o grabar en su dispositivo, y tenerlas disponibles en todo momento y lugar sin conexión a internet. Mensualmente, se adicionan 50 nuevas obras, 600 nuevos libros al año. Los socios pueden descargar la APP de <b>bibliomobil.com</b> a su celular, tablet o PC, para facilitar el acceso a las obras. El costo de <b>bibliomobil.com</b> está calculado en $150 mlls, pero es gratis para los socios <b>LEO.</b></p>
            
            <h5 id="titulo" align="center"> <b>1. Promoción de la Lectura y el Multilingüismo<br />
            </b> 
            </h5>
            <br />

            <p>
            Para facilitar la lectura, los socios disponen de 3 instrumentos tecnológicos:
            </p>
            <p>
            <b> a. <a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> portal web con noticias educativas y culturales de actualidad, y artículos sobre los géneros, autores y obras más importantes, para informar, motivar y orientar la lectura. 
            </p>
            <p>
            <b>b. <a href=" https://www.bibliomobil.com/"> https://www.bibliomobil.com/</a></b>: una APP que los usuarios pueden descargar a su celular, PC o tableta, y acceder a más de 15.000 obras en 5 idiomas (español, inglés, francés, portugués e italiano), para leer on line o descargar a su dispositivo, y tenerlas disponibles en todo momento y lugar sin conexión a internet. Mensualmente, se adicionan 50 nuevas obras a la colección, 600 nuevos libros al año. La descarga de la APP es gratuita para los socios logeados
            </p>
            <p>
            <b>c. BiblioTablet</b>, aplicación a través de la cual la biblioteca digital y sus 15.000 obras se graban en la memoria del celular o tableta del usuario, para su consulta sin conexión a internet. Herramienta diseñada para servir a las zonas rurales y municipios apartados con limitaciones de conectividad web. La descarga de la aplicación es gratuita para los socios logeados
            </p>
            
            <p>
            <h5 id="titulo" align="center"> <b>2. Promoción de la escritura<br />
            </b> 
            </h5>
            Escribir es uno de los retos más importantes para las personas. Es un acto creativo y propositivo, que permite dar a conocer las ideas y creaciones, y contribuir a la expansión del conocimiento y el patrimonio literario universal. Para ello, el portal web institucional <b><a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> permite a los socios crear su perfil de escritor y publicar sus obras para ser visibles por los demás socios y por personas de todo el mundo. Pueden ser obras gratuitas o comerciales. Este es un servicio gratuito para los socios logeados.
            </p>
            <p>
            <h5 id="titulo" align="center">  <b>3. Promoción comercial de los autores LEO<br />
            </b> 
            </h5>
            LEO está desarrollando la tienda  <b><a href="www.libreria.clubleo.co/">www.libreria.clubleo.co/</a></b>, que permitirá que los socios puedan exponer y comercializar las obras de su autoría entre la comunidad <b>LEO</b> del país y el mundo. Cada socio es el responsable de toda la gestión comercial, conforme a las normas legales sobre la materia.
            </p>
            <br />
            <br />
            <h3 id="titulo" align="center"> <b>LEO <br />
            Una gran comunidad mundial comprometida con la construcción <br />
            de una sociedad más educada y culta

            </b> 
            </h3>
            <br />
            <h3 id="titulo" align="center"> <b>LEO <br />
            Vincúlate!! <br />
            Queremos que seas socio del proyecto educativo y cultural <br />
            más grande del mundo
            </b> 
            </h3>
            <br />

                </div>
                
                
        </div>
    );
}
