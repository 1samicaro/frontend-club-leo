import React from "react";
import "./AcercaDe.css"
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";
import aboutus2 from "../../assets/contenido/aboutus2.jpg";
import aboutus3 from "../../assets/contenido/aboutus3.jpg";






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
            <div align="center">
                <img
                id="imagenajustada"
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
            

            
            <h3 id="titulo" align="center"> <b>Asociados <br />
            </b>
            </h3>  
            <br /> 
            <div align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={aboutus1}
                width="400"
                height="500"
                alt="..."
                />
                </div> 
                <br />
                
            
            

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
            <p>
            Los socios que viven en zonas rurales y marginales sin conexión a internet, pueden descargar <b>BiblioTablet</b>, y grabar las 15.000 obras en su celular o tablet para su lectura y trabajo sin necesidad de internet (peso en disco de 4 G.). 
            </p>
            <p>
            Adicionalmente, <b>LEO</b> ha desarrollado el portal web <b>vamosaleer.com</b>, nuestro periódico virtual que ofrece artículos sobre los géneros, autores y obras más importantes, con el propósito de informar, motivar y orientar las actividades de  lectura y  escritura que realizan nuestros socios.
            </p>

            <div align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={aboutus2}
                width="400"
                height="450"
                alt="..."
                />
                </div>

            <h4 id="titulo" align="left"> <b>2. Promoción de la escritura<br />
            </b> 
            </h4>
            <br />
            <p>
            <b>Escribir es uno de los retos intelectuales más importante para todas las personas en el mundo.</b> Es un acto creativo y propositivo, que permite dar a conocer las ideas, creaciones y propuestas, y contribuir a la expansión del conocimiento y el patrimonio literario universal. 
            </p>
            <p>
            Para los estudiantes,  escribir bien, con elegancia, argumentos claros y riqueza lingüística, constituye una de las competencias más  importantes que deben desarrollar, porque de ella depende tanto el éxito académico, laboral y social, como la posibilidad de publicar sus propuestas por internet, ser leídos e impactar a los millones de usuarios en la aldea global. La experiencia lo demuestra: el éxito en la moderna sociedad  tecnológica depende de tener una buena capacidad escritora, de elaborar y trasmitir mensajes significativos que sean atractivos y generen valor para los millones de internautas que permanentemente están recibiendo la información en todos los países del mundo.
            </p>
            <p>
            Para facilitar y fortalecer la capacidad comunicativa de nuestros socios, <b>LEO</b> ha creado el portal web <b>escritoresleo.com</b>, nuestra red social especializada  que les permite crear su perfil de escritor y publicar sus obras en cualquier tema o género, para ser visibles por los demás socios y por personas de todo el mundo. Pueden ser obras gratuitas o comerciales. 
            </p>

            <h3 id="titulo" align="center"> <b>CLUBLEO <br />
            La comunidad mundial de estudiantes, comprometida con la construcción <br />
            de una sociedad más educada y culta

            <div align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={aboutus3}
                width="400"
                height="500"
                alt="..."
                />
                </div> 


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
