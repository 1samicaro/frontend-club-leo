 import React from "react";
import "./AcercaDe.css"
import logoblanco from "../../assets/logoleo.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";
import aboutus31 from "../../assets/contenido/aboutus31.jpg";
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

                <h3 id="titulo" align="center"> <b>
                Leer y escribir bien, las competencias fundamentales para alcanzar el éxito académico <br />
                y aprovechar las oportunidades de contactos y negocios que ofrece internet en todo el mundo
                </b> 
                </h3>

                <br />
            </div>
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
            <div>
            <h3 id="titulo" align="center"> <b>LEO Una comunidad mundial educativa y de negocios</b>
            </h3>
            </div>
            <br />
            <p>
            Hay una ley universal del desarrollo: <b>todo progreso y bienestar de una sociedad, depende de la calidad de la educación que recibe su población.</b> Por ello, los países más desarrollados, tienen como prioridad contar con sistemas educativos modernos y eficientes, que fortalezcan los conocimientos y la competitividad de sus habitantes. Así lo demuestran las pruebas internacionales PISA de la OCDE, que ubican en los primeros lugares a países de altos ingresos con los mejores sistemas educativos del mundo: Singapur, Canadá, China, Finlandia, Hong Kong, Estonia, Japón y Corea del Sur.

            </p>
            <p>
            <b>LEO - Club Mundial de Lectura,</b> es un proyecto social que tiene como misión promover la lectura, la escritura y el multilingüismo, como hábitos que mejoran el nivel educativo y cultural de las personas, y fortalecen sus competencias comunicativas, necesarias para tener éxito en su actividad académica y en la moderna sociedad integrada a nivel mundial por la internet, que exige leer y aprovechar cantidades crecientes de información, y escribir contenidos claros y convincentes para millones de personas en todo el mundo.

            </p>
           
           <p>
           Para cumplir esta misión, <b>LEO</b> funciona como una red digital mundial, fundamentada en la <b>teoría de los seis grados de separación,</b> que plantea que con solo seis pasos, todas las personas del mundo se pueden integrar en una gran red mundial interconectada; es decir, solo 6 eslabones nos permiten tener miles de contactos en todo el mundo. Esta es la base de las redes sociales Facebook, Tweter, Linkedin, etc., que a través de internet, permiten que iniciando solo con nuestros conocidos, podamos crear una red con miles de contactos en todo el mundo, conocerlos a través de su perfil, historias y mensajes, y realizar con ellos múltiples actividades culturales, sociales, de negocios, etc. <br />

           Con esta filosofía, <b>LEO</b> se propone integrar a las personas de todos los países para trabajar unidos y lograr objetivos comunes: mejorar nuestro nivel educativo y cultural, fortalecer las competencias comunicativas, y obtener ingresos permanentes que garanticen nuestra autosuficiencia financiera y mejoren nuestra calidad de vida. 


           </p>
            <br />

            

            <h3 id="titulo" align="center"> <b>Objetivos <br />
            </b> 
            </h3> 
            <br />      
            <p>
            • Facilitar el acceso a los libros e incrementar los índices de lectura, para lograr que todas las personas lean al menos un libro al mes, doce libros al año. <br />
            • Ofrecer escenarios para que los Socios LEO escriban y publiquen sus obras en los diferentes géneros, dándolas a conocer en el país y el mundo. <br />
            • Promover el multilingüismo y las competencias comunicativas de las personas, para mejorar sus posibilidades de participación y éxito en la moderna sociedad tecnológica, a través de internet. <br />
            • Fortalecer a las familias y las instituciones educativas como escenarios básicos para inculcar el hábito de lecto-escritura en los estudiantes.
             
            • Ofrecer a nuestros socios la oportunidad de trabajar para construir un ingreso permanente y lograr la sostenibilidad financiera, de por vida.

            </p>
            <br />
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
            <p>
            <b>Pueden ser socios del Club Mundial de Lectura todas las personas y los estudiantes en cualquier país del  mundo.</b> Los menores de edad deberán contar con autorización y tutoría de sus padres o acudientes, anexando el formato de autorización de vinculación. <br />
            La membrecía semestral tiene un costo de solo COP$50.000. A partir de su ingreso, los socios tienen acceso libre, permanente y gratuito a la Biblioteca Digital LEO, con más de 15.000 obras de literatura y ciencias sociales en cinco idiomas y a los demás programas educativos y culturales del Club (publicar obras, taller literario, etc.)
            </p>
        

            <br />
            <h3 id="titulo" align="center"> <b>Programas y Servicios a los Asociados<br />
            </b> 
            </h3>
            <br />
            <p> LEO ha desarrollado un paquete de herramientas pedagógicas con tecnologías web, que permiten en forma eficiente y económica promover y masificar la lectura, la escritura y el multilingüismo como competencias clave para mejorar el desempeño académico y lograr que las personas aprovechen las oportunidades de contactos, educación y negocios que ofrece internet a nivel mundial:
            </p>
        

            <h4 id="titulo" align="left"> <b>1. Promoción de la Lectura y el Multilingüismo<br />
            </b> 
            </h4> 
            <br />  
            <p>
            LEO ofrece a los socios su biblioteca digital con más de 15.000 obras de ciencias sociales y literatura en 5 idiomas (español, inglés, francés, portugués e italiano). Las mejores obras y los autores más importantes de todos los países y de todos los tiempos. Mensualmente, se adicionan 50 nuevas obras, 600 nuevos libros al año. El costo de la colección bibliográfica está calculado en $150 millones, pero es gratis para los socios LEO. (Ver Catálogo) <br />
            Los socios que viven en zonas rurales y marginales sin conexión a internet, pueden descargar y grabar las obras en su PC, celular o tablet para su lectura y trabajo sin necesidad de conexión web. <br />
            Adicionalmente, LEO ha desarrollado el portal web vamosaleer.co, que ofrece artículos sobre los géneros, autores y obras más importantes, con el propósito de informar, motivar y orientar las actividades de lectura y escritura que realizan nuestros socios.

            </p>
            

            <div className="container_bannernos"  align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={aboutus31}
                width="400"
                height="450"
                alt="..."
                />
                
                <br />
                
            </div>
            
            <br />
            <h4 id="titulo" align="left"> <b>2. Promoción de la escritura<br />
            </b> 
            </h4>
            <p>
            Escribir es uno de los retos intelectuales más importante para todas las personas. Es un acto creativo y propositivo, que permite dar a conocer las ideas, creaciones y propuestas, y contribuir a la expansión del conocimiento y el patrimonio literario universal. <br />

            Escribir con elegancia, argumentos claros y riqueza lingüística, constituye una de las competencias más importantes que debemos desarrollar, porque de ella depende tanto el éxito académico, laboral y social, como la posibilidad de publicar nuestras propuestas por internet, ser leídos e impactar a los millones de usuarios en el mundo. La experiencia lo demuestra: el éxito en la moderna sociedad tecnológica depende de tener una buena capacidad escritora, de elaborar y trasmitir mensajes significativos que sean atractivos y generen valor para los millones de internautas que reciben la información en todos los países del mundo. <br />

            Para facilitar y fortalecer la capacidad comunicativa de nuestros socios, LEO ha creado el portal web escritoresleo.com, red social especializada que permite a los socios crear su perfil de escritor y publicar sus obras en cualquier tema o género, para ser visibles por los demás socios y por personas de todo el mundo. Pueden ser obras gratuitas o comerciales. También podrá organizar o vincularse a grupos, publicar y enviar mensajes, y las demás actividades de una red social.

            </p>
            

            <h3 id="titulo" align="center"> <b>CLUBLEO <br />
            
            Una comunidad mundial, comprometida con la construcción <br />
            de una sociedad más educada y culta
            </b>
            </h3>

            <div align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={aboutus3}
                width="400"
                height="350"
                alt="..."
                />
            </div> 


          
            <h3 id="titulo" align="center">
            <b> 
                <br />
                Vincúlate!! 
                <br />
                Queremos que seas nuestro socio en el proyecto educativo y cultural <br />
                más grande del mundo

            </b> 
            </h3>
            <br />

        </div>
                
                

    );
}
