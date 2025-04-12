import React from "react";
import logoblanco from "../../assets/logoleo.png";
import { Link } from "react-router-dom";
import "./Unetenos.css"

import afiliados1 from "../../assets/contenido/afiliados1.jpg";
import afiliados2 from "../../assets/contenido/afiliados2.jpg";
import afiliados3 from "../../assets/contenido/afiliados3.jpg";





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

            <h5>Ayúdanos a crecer, y recibe ingresos de por vida</h5>

            </b> 
            </h3>

            <br />
            <div className="container_bannerus"  align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={afiliados1}
                width="400"
                height="450"
                alt="..."
                />
                <p> <b>Plan amigos <br />
                Unidos <br />
                para progresar juntos<br />
                en todo el mundo</b>
                </p>
                </div>
                  <br />

                <br />
                <p>
                Para cumplir con la misión de promover la lectura y escritura en el mundo, LEO necesita crecer, consolidando una gran comunidad enfocada en mejorar sus niveles de educación y cultura, y en fortalecer sus competencias comunicativas. <br />

                El Plan Amigos, es una invitación de LEO a sus socios para que apoyen este crecimiento, realizando un trabajo muy sencillo, fácil y rápido: Invitar a los familiares, amigos y compañeros de estudio y trabajo a vincularse como Socios LEO, con un máximo de 20 invitados. Una vez se complete este número, no se podrá invitar a nadie más. <br />

                Por este sencillo trabajo que todos podemos realizar, recibiremos ingresos permanentes (de por vida), que estarán disponibles en forma inmediata en nuestra cuenta

                </p>

           
            
            <br />
            <h3 id="titulo" align="center"> <b>Principios básicos del Plan Amigos 
            </b> 
            </h3>
            <br />
            <p>
            • La participación es libre y voluntaria. Un socio puede no participar, y seguir disfrutando los programas de promoción de la lectura, escritura y multilingüismo que ofrece  ClubLeo. <br />
            • Se puede invitar a cualquier persona. No existen requisitos ni condiciones previas. Los menores de edad deberán contar con la autorización y tutoría de sus padres, <br />
            • Se puede invitar a personas en cualquier país del mundo. <br />
            • El retiro es libre, en cualquier momento, sin ningún requisito.
            </p>

            <br />
            <h3 id="titulo" align="center"> <b> Cómo funciona el Plan Amigos LEO <br />
            El principio es sencillo: invitar, y obtener ingresos crecientes, de por vida
            </b> 
            </h3>
            <p>
            1. Al vincularnos como socios, creamos nuestro usuario y contraseña; el programa automáticamente genera nuestro link personal, y nos crea “Mi Cuenta” para que hagamos seguimiento en tiempo real a nuestros invitados e ingresos. <br />

            2. Invitamos a nuestros conocidos a que ingresen como socios de LEO, proporcionándoles nuestro usuario o enviándoles a sus redes sociales el link personal que el sistema nos genera. <br />

            3. Al ingresar como socios las personas que invitamos, registran nuestro usuario; y el sistema los va acumulando en nuestra cuenta, hasta completar los 20 solicitados. Después, la lista se cierra y no podremos seguir invitando a más personas. <br />

            4. Según el principio de los 6 grados de integración que aplica LEO, los invitados seguirán creciendo en el país y el mundo, y por cada uno de ellos LEO nos reconocerá un ingreso, que podrá llegar a los US$96.000 anuales, es decir, un promedio mensual de US$8.275. <br />

            Y lo más importante, la membrecía a CLUBLEO se renueva anualmente, por lo que este ingreso será permanente, de por vida. Solo debemos invitar a 20 socios una vez, pero LEO nos reconoce ingresos de por vida, con la vinculación y las posteriores renovaciones.


            </p>
            


            <br />
            <h3 id="titulo" align="center"> <b>El Reto para los socios LEO: <br />
            Conseguir nuestros 20 socios en 1 mes
            <br />
            </b> 
            </h3>
            <br />
            <p>
            Si todos los socios logramos vincular a nuestros 20 invitados dentro del mes siguiente al ingreso a LEO, a partir del cuarto mes podremos asegurar un importante ingreso promedio mensual de US$8.275, que será permanente gracias a la renovación anual de la membrecía a CLUBLEO. Es sencillo, y todos podemos lograrlo muy fácil: aprovechando nuestros conocidos, y los contactos en las redes sociales.
            </p>

            <h3 id="titulo" align="center"> <b>Mercado Objetivo LEO. <br />
            Socios potenciales
            <br />
            </b> 
            </h3>


            <div className="container_bannerus1"  align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={afiliados2}
                width="400"
                height="450"
                alt="..."
                />
                <p> <b>Somos una <br />
                gran comunidad<br />
                380 mlls de estudiantes<br />
                en más de 100 países <br />
                del mundo</b>
                
                </p>
                </div>
                  <br />

                  
            <br />
            <p>
            CLUBLEO ofrece en su Biblioteca Digital más de 15.000 obras en 5 idiomas, utilizados en más de 100 países del mundo (Anexo), con una población de 1.900 millones de personas, con 1.675 millones mayores de 8 años con capacidad lectora y 476 millones de estudiantes.            </p>
        
            
            <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Idioma</th>
                    <th className="table_3" align="center">No. de obras</th>
                    <th className="table_3" align="center">Hablantes nativos</th>
                    <th className="table_3" align="center">Mayores de 8 años cap. Lectora</th>
                    <th className="table_3" align="center">Estudiantes</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Español</td>
                    <td className="table_4" align="center">8.169</td>
                    <td className="table_4" align="center">580</td>
                    <td className="table_4" align="center">510</td>
                    <td className="table_4" align="center">145</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Inglés</td>
                    <td className="table_4" align="center">5.013</td>
                    <td className="table_4" align="center">678</td>
                    <td className="table_4" align="center">597</td>
                    <td className="table_4" align="center">170</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Francés</td>
                    <td className="table_4" align="center">711</td>
                    <td className="table_4" align="center">300</td>
                    <td className="table_4" align="center">264</td>
                    <td className="table_4" align="center">75</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Italiano</td>
                    <td className="table_4" align="center">607</td>
                    <td className="table_4" align="center">85</td>
                    <td className="table_4" align="center">75</td>
                    <td className="table_4" align="center">21</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Portugués</td>
                    <td className="table_4" align="center">614</td>
                    <td className="table_4" align="center">260</td>
                    <td className="table_4" align="center">229</td>
                    <td className="table_4" align="center">65</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center"> <b>Totales </b></td>
                    <td className="table_4" align="center"><b>15.114</b></td>
                    <td className="table_4" align="center"> <b>1.903</b></td>
                    <td className="table_4" align="center"> <b>1.675</b></td>
                    <td className="table_4" align="center"> <b>476</b> </td>
                </tr>


                </table>



                <br />
                <p>
                Aunque todas las personas pueden asociarse, la prioridad de LEO son los 476 millones de estudiantes y sus familias en los diferentes países, para quienes la lectura y escritura son actividades permanentes asociadas al proceso de formación académica, y el fortalecimiento de sus competencias comunicativas es clave para el éxito del proceso educativo. Con la membrecía anual de US$50, cada socio accede a la biblioteca digital descargable con 15.000 obras en 5 idiomas, valorada en más de US$150 mil. Es decir, la membrecía permite acceder a obras con un costo promedio de 0,33 centavos de dólar cada una.
                </p>
            <br />
            <h2 id="titulo" align="center"> <b>Plan Amigos: <br />
            Una valiosa oportunidad para asegurar ingresos, de por vida

            <br />
            </b> 
            </h2>
            <br />
            
           <br />
            <div   align="center">
                <img 
                id="imagenajustada"
                className="d-block w-100"
                src={afiliados3}
                height="250"
                alt="..."
                />
                </div>
                <br />
            
                <h4 id="titulo" align="center"> <b>CLUBLEO <br />
            Somos una comunidad mundial de ganadores</b>

            </h4>
            <br />
            
           <br />
        </div>
    </div>
    );
}