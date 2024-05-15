import React from "react";
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";
import "./Unetenos.css"

import afiliados1 from "../../assets/contenido/afiliados1.jpg";
import afiliados2 from "../../assets/contenido/afiliados2.jpg";
import afiliados3 from "../../assets/contenido/afiliados3.jpg";

import tabla from "../../assets/contenido/tabla.png";
import tabla1 from "../../assets/contenido/tabla1.png";




export default function Unetenos() {
    return (
        <div className="contenedor_joinus">
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

                <h3 id="titulo" align="center"> <b>PLAN AMIGOS LEO:<br />

            <h5>Ayúdanos a crecer, y construye un ingreso de por vida</h5>

            </b> 
            </h3>

            <br />
            <div >
                <img
                className="d-block w-100"
                src={afiliados1}
                height="250"
                alt="..."
                />
                </div>

                <br />

            <p>
            <b> LEO Club Mundial de Lectura</b> tiene como misión mejorar el nivel educativo y cultural de las personas para fortalecer sus competencias comunicativas y aumentar sus posibilidades de éxito académico, laboral y social. 
            </p>
            <p>
            <b>LEO</b> se financia con la cuota anual de $60.000 que pagamos los socios, que nos permite acceder todo un año a los programas y servicios de promoción de la lectura, escritura y multilingüismo, sin tener que realizar ningún pago adicional.           </p>
            <p>
            Por esta razón, <b>LEO</b> necesita crecer en todo el mundo, y para lograrlo, ha creado el <b>Plan Amigos</b>, un Programa de Referidos que convoca a sus socios para que apoyen este crecimiento, realizando un trabajo muy sencillo: <b>Invitar a los amigos a vincularse como socios, con un máximo de 20 invitados.</b></p>
            <p>
            Con este sencillo trabajo, cada socio podrá organizar su propia <b>Red Personal de Amigos RPA</b>, y <b>LEO</b> le proporcionará un ingreso (cashback) que puede ser muy importante y permanente.
            </p>
            
            <br />
            <h3 id="titulo" align="center"> <b>Principios básicos del Plan Amigos Leo
            </b> 
            </h3>
            <br />
            <p>
            •	La participación de los socios es libre y voluntaria. Un socio puede no participar, y seguir disfrutando los programas de promoción de la lectura, escritura y multilingüismo.
            </p>
            <p>
            •	Se puede invitar a cualquier institución y a cualquier persona mayor de 14 años. No existen requisitos ni condiciones previas diferentes.
            </p>
            <p>
            •	Los amigos pueden residir en cualquier país del mundo.
            </p>
            <p>
            •	Por cada invitado que ingrese como socio, y los que éstos a su vez inviten, <b>LEO</b> reconoce un % de la cuota de afiliación (hasta el 60%).
            </p>
            <p>
            •	La Red Personal de Amigos que organice, es propiedad del socio de por vida, con sus ingresos y beneficios. 
            </p>
            <p>
            •	La RPA es heredable. Una vez complete los 20 invitados, el socio podrá designar a la persona que lo sustituirá en caso de fallecimiento
            </p>
            <p>
            •	El retiro libre y voluntario, en cualquier momento, sin ningún requisito.
            </p>
            <br />
            <div>
                <img
                className="d-block w-100"
                src={afiliados2}
                height="450"            
                alt="..."
                />
                </div>
            <br />
            <h3 id="titulo" align="center"> <b>Cómo funciona el Plan Amigos LEO <br />

            El principio es sencillo: invitar, y obtener ingresos crecientes, de por vida

            </b> 
            </h3>
            <br />
            <p>
            •	Al vincularse diligenciando el formulario por internet, cada socio crea su usuario y contraseña; el programa automáticamente le crea “Mi Cuenta” para que realice seguimiento en tiempo real a sus invitados e ingresos.           </p>
            <p>
            •	El socio invita a otras personas a vincularse a <b>LEO</b>, y al diligenciar el formulario, registran el usuario del socio promotor; el sistema los vincula en su red personal de amigos RPA, de por vida.           </p>
            <p>
            •	El sistema automáticamente distribuye el 60% del valor de la cuota de afiliación ($30.000) entre la RPA del nuevo socio. Este ingreso se acumula en tiempo real en su Cuenta Personal, y al fin de mes es girado a su cuenta financiera. Durante el mes, con sus ingresos, el socio pude comprar los libros, bienes y servicios ofrecidos por los aliados de LEO.           </p>
            <br />
            <h3 id="titulo" align="center"> <b>Cuanto puedo ganar si organizo mí RPA?<br />
            </b> 
            </h3>
            <br />
            <p>
            De los $60.000 de cuota de afiliación, <b>LEO</b> destina el 60% ($36.000) para retribuir el trabajo de invitación que realizan sus socios, ingreso que crecerá sucesivamente con los nuevos invitados, generando un ingreso anual muy importante, como se detalla en el siguiente cuadro:           </p>
            
            
            <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Nivel de mi RPA</th>
                    <th className="table_3" align="center">% Ingreso vinculación</th>
                    <th className="table_3" align="center">Ingreso por invitado nivel</th>
                    <th className="table_3" align="center">Número de socios nivel</th>
                    <th className="table_3" align="center">Ingreso por invitación RPA</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Yo</td>
                    <td className="table_4" align="center">6%</td>
                    <td className="table_4" align="center">$ 3.600</td>
                    <td className="table_4" align="center">1</td>
                    <td className="table_4" align="center">$ 3.600</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">I (Mis 20 invitados) </td>
                    <td className="table_4" align="center">9%</td>
                    <td className="table_4" align="center">$ 5.400</td>
                    <td className="table_4" align="center">20</td>
                    <td className="table_4" align="center">$ 108.000</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">II</td>
                    <td className="table_4" align="center">12%</td>
                    <td className="table_4" align="center">$ 7.200</td>
                    <td className="table_4" align="center">400</td>
                    <td className="table_4" align="center">$2'880.000</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">III</td>
                    <td className="table_4" align="center">15%</td>
                    <td className="table_4" align="center">$ 9.000</td>
                    <td className="table_4" align="center">8.000</td>
                    <td className="table_4" align="center">$72'000.000</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">IV</td>
                    <td className="table_4" align="center">18%</td>
                    <td className="table_4" align="center">$ 10.800</td>
                    <td className="table_4" align="center">160.000</td>
                    <td className="table_4" align="center">$1.728'000.000</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Totales</td>
                    <td className="table_4" align="center">60%</td>
                    <td className="table_4" align="center">$36.000</td>
                    <td className="table_4" align="center">168.421</td>
                    <td className="table_4" align="center">$1.802'991.600</td>
                </tr>


                </table>






                
                <br />
                <p>
                Este será el resultado de mi trabajo: Una vez organice mi b <b>RPA</b>, podré tener un ingreso anual de $1.500 millones, que será de por vida, porque <b>LEO</b> nos reconoce tanto el ingreso como las renovaciones anuales.
                </p>
                <p>
                Un trabajo fácil, sencillo y rápido, para lograr un gran objetivo:<b>la independencia económica, de por vida.</b>
                </p>
                <p>
                <b>Cómo lograrlo?</b>
                </p>
                <p>
                Sólo hay que hacer 2 cosas muy sencillas: <br />
                <b> 1. Invitar a mis 20 amigos a vincularse a ClubLeo</b> (familiares, vecinos, compañeros de estudio y trabajo, contactos en redes sociales, instituciones educativas y sociales, etc.) <br />
                <b>2. Hacer seguimiento y apoyar a mi RPA,</b> aprovechando la internet. Hay técnicas sencillas, gratuitas y efectivas: <br />
                •	Crear grupo propio en facebook y whatsapp con mis 20 invitados. <br />
                •	Crear y enviar mensajes motivacionales a los socios de mi RPA. <br />
                </p>
                <p>
                <b> El Plan Amigos está concebido como una alianza estratégica gana-gana: LEO</b> crece en todo el mundo y cuenta con los recursos para desarrollar sus programas educativos y culturales, y los socios pueden asegurar un importante ingreso, de por vida.
                </p>

                <br />
            <h3 id="titulo" align="center"> <b>Por qué el Plan Amigos?<br />
            </b> 
            </h3>
            <br />
            <p>
            <b> El fenómeno económico más importante del Siglo XXI son las redes sociales por internet,</b> que en pocos años hacen presencia en todos los países con miles de millones de usuarios, convirtiéndose en las empresas más valiosas y rentables (este año twitter fue vendida en US$44.000 millones, mientras facebook está valorada en US$226.000 millones). De acuerdo a cifras de Smart Insights, en 2022 el 58.4% de la población mundial utiliza redes sociales (4,062 millones de personas).           </p>
            <h5 id="titulo" align="center"> <b>Cómo crecen las redes sociales? Qué estrategia utilizan para llegar a todo el mundo?<br />
            </b> 
            </h5>
                <br />
                <p>
                Es sencilla. Se llama la <b><a href="https://www.tiempo.com/noticias/ciencia/el-mundo-es-un-panuelo-conoce-la-teoria-de-los-6-grados-de-separacion.html#:~:text=Se%20cree%20que%20cada%20persona%20conoce%20en%20promedio%20a%20unas%20100%20personas.&text=La%20teor%C3%ADa%20de%20los%206%20grados%">teoría de los seis grados de separación</a></b>: indica que todos estamos conectados a cualquier otra persona del planeta a través de una cadena con sólo 6 enlaces. Según las estadísticas, cada uno conoce en promedio a 100 personas, por lo que con solo 6 enlaces o pasos de integración, se puede conectar a toda la humanidad. Y esto es posible gracias a internet, en tiempo real.             </p>
                <br />
            <div>
                <img
                className="d-block w-100"
                src={afiliados3}
                height="450"
                alt="..."
                />
                </div>

                <br />
                <p>
                Aprovechando esta exitosa experiencia, el <b> Plan Amigos LEO</b> está concebido como una <b>red social mundial</b>, educativa, cultural y de negocios, en donde los socios pueden invitar a personas de todo el mundo a vincularse a través de internet, y obtener una participación por cada nuevo socio, construyendo un ingreso acumulado que garantice su independencia económica, de por vida.
                </p>
            <h3 id="titulo" align="center"> <b>Mercado Objetivo LEO. Socios potenciales<br />
            </b> 
            </h3>
            <br />
            <p>
            <b>Bibliomobil</b>, la Biblioteca Digital Familiar de <b>LEO</b> ofrece a sus socios más de 15.000 obras en 5 idiomas, utilizados en más de 100 países del mundo (Anexo), con una población de 1.900 millones de personas, con 1.500 millones mayores de 14 años con capacidad lectora y 380 millones de estudiantes primaria y secundaria.
                </p>



           


            
                <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Idioma</th>
                    <th className="table_3" align="center">No. de obras</th>
                    <th className="table_3" align="center">Hablantes nativos</th>
                    <th className="table_3" align="center">Mayores de 14 años</th>
                    <th className="table_3" align="center">Estudiantes</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Español</td>
                    <td className="table_4" align="center">8.169</td>
                    <td className="table_4" align="center">580</td>
                    <td className="table_4" align="center">464</td>
                    <td className="table_4" align="center">116</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Inglés</td>
                    <td className="table_4" align="center">5.013</td>
                    <td className="table_4" align="center">678</td>
                    <td className="table_4" align="center">542</td>
                    <td className="table_4" align="center">136</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Francés</td>
                    <td className="table_4" align="center">711</td>
                    <td className="table_4" align="center">300</td>
                    <td className="table_4" align="center">240</td>
                    <td className="table_4" align="center">60</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Italiano</td>
                    <td className="table_4" align="center">607</td>
                    <td className="table_4" align="center">85</td>
                    <td className="table_4" align="center">68</td>
                    <td className="table_4" align="center">17</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Portugués</td>
                    <td className="table_4" align="center">614</td>
                    <td className="table_4" align="center">260</td>
                    <td className="table_4" align="center">208</td>
                    <td className="table_4" align="center">52</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Totales</td>
                    <td className="table_4" align="center">15.114</td>
                    <td className="table_4" align="center">1.903</td>
                    <td className="table_4" align="center">1.522</td>
                    <td className="table_4" align="center">381</td>
                </tr>


                </table>










                
                <br />
                <p>
                La prioridad de <b>LEO</b> son los 380 millones de estudiantes y sus familias en los diferentes países, para quienes la lectura y escritura son actividades rutinarias asociadas al proceso de formación académica, y el fortalecimiento de sus competencias comunicativas es clave para el éxito del proceso educativo. Con la membrecía anual de $60.000, cada socio accede a la biblioteca digital descargable con 15.000 obras en 5 idiomas, valorada en más de CO$150 mills, US$40.000.            </p>
                <br />
                <h4 id="titulo" align="center"> <b> <h2> <b>Plan Amigos</b></h2>
                Una valiosa oportunidad para construir la independencia económica, de por vida <br />
                Con un trabajo sencillo, fácil y rápido, que todos podemos realizar
                </b> 
                </h4>
                <br />
        </div>
    </div>
    );
}