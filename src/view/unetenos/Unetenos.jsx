import React from "react";
import logoblanco from "../../assets/logoblack.png";
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

            <h5>Ayúdanos a crecer, y recibe beneficios para lograr tu excelencia académica</h5>

            </b> 
            </h3>

            <br />
            <div   align="center">
                <img 
                id="imagenajustada"
                className="d-block w-100"
                src={afiliados1}
                height="250"
                alt="..."
                />
                </div>

                <br />

            <p>
            Para cumplir con la misión de promover la lectura entre los estudiantes de nuestro país y el mundo, <b>LEO</b> necesita crecer, consolidando una gran comunidad de trabajo enfocada en la excelencia académica
            </p>
            <p>
            El <b>Plan Amigos</b>, es una invitación de <b>LEO</b> a  sus socios para que apoyen este crecimiento, realizando un trabajo muy sencillo y fácil: Invitar a los amigos y compañeros de estudio a vincularse como socios, con un máximo de 20 invitados.         </p>
            <p>
            Por este sencillo trabajo que todos podemos realizar en poco tiempo, <b>LEO</b> nos reconoce importantes beneficios que nos permitirán mejorar nuestro desempeño académico y contar con los recursos para financiar los estudios.</p>
           
            
            <br />
            <h3 id="titulo" align="center"> <b>Principios básicos del Plan Amigos Leo
            </b> 
            </h3>
            <br />
            <p>
            • La participación es libre y voluntaria. Un socio puede no participar, y seguir disfrutando los programas de promoción de la lectura, escritura y multilingüismo  que ofrece el ClubLeo. <br />
            • Se puede invitar a cualquier estudiante de los diferentes niveles. No existen requisitos ni condiciones previas diferentes. <br />
            • Los socios pueden residir en cualquier país del mundo. <br />
            • El retiro es libre, en cualquier momento, sin ningún requisito. <br />
            </p>

            <h3 id="titulo" align="center"> <b>Cómo funciona el Plan Amigos LEO </b> </h3>
            <br />
            <h4 id="titulo" align="center"> <b>El principio es sencillo: invitar, y obtener ingresos crecientes, de por vida
            </b> </h4>

            <br />
            <p>

            1.	Al vincularse, cada socio crea su usuario y contraseña; el programa automáticamente le crea “Mi Cuenta” para que realice seguimiento en tiempo real a sus invitados y beneficios. <br />

            2.	El socio invita a sus amigos y compañeros a ingresar a <b>LEO</b>, enviándoles el link a sus redes sociales, o proporcionándoles su usuario. <br />

            3.	Al vincularse, los invitados registran su usuario; y el sistema los vincula con el socio que los invita para el reconocimiento de  los beneficios de excelencia académica. <br />

            4.	El sistema va acumulando en su cuenta los socios que usted invita, hasta completar los 20 solicitados. Después, la lista se cierra y no podrá seguir invitando a más personas. <br />

            5.	En el primer paso de invitación, al completar los 20 invitados, recibirá una notificación de entrega de una <b>Tablet de 10”</b>, con la biblioteca digital <b>bibliomobil</b> y sus 15.000 obras grabada. <br />

            6.	En el segundo paso, cuando sus 20 invitados completen cada uno sus 20 invitados, Usted recibirá un computador portátil, que también tendrá grabada la biblioteca digital <b>bibliomobil</b> y sus 15.000 obras. <br />

            7.	<b>Finalmente, en el tercer paso,</b> cuando los nuevos socios inviten a sus 20 amigos, recibirá el <b>vbono educativo de excelencia académica por $2 millones mensuales,</b> que serán consignados en la cuenta financiera que reporte a LEO. Este bono será permanente mientras mantenga la condición de estudiante. <br />
            </p>
            


            <br />
            <h3 id="titulo" align="center"> <b>El Reto LEO: beneficio adicional para socios pilosos<br />
            </b> 
            </h3>
            <br />
            <p>
            Si un socio logra vincular a sus 20 invitados dentro del mes siguiente a su ingreso a <b>LEO</b>, recibirá un gran estímulo adicional: el <b>bono educativo de excelencia académica será de $4 millones mensuales,</b> suficiente para financiar hasta los estudios universitarios.
            </p>

            <h3 id="titulo" align="center"> <b>Mercado Objetivo LEO. Socios potenciales<br />
            </b> 
            </h3>

            <div   align="center">
                <img 
                id="imagenajustada"
                className="d-block w-100"
                src={afiliados2}
                height="250"
                alt="..."
                />
                </div>
            <br />
            <p>
            <b>Bibliomobil</b>, la Biblioteca Digital de LEO ofrece a sus socios más de 15.000 obras en 5 idiomas, utilizados en más de 100 países del mundo (Anexo), con una población de 1.900 millones de personas, con 1.500 millones mayores de 14 años con capacidad lectora y 380 millones de estudiantes de primaria y secundaria.
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
                    <td className="table_4" align="center"> <b>Totales </b></td>
                    <td className="table_4" align="center"><b>15.114</b></td>
                    <td className="table_4" align="center"> <b>1.903</b></td>
                    <td className="table_4" align="center"> <b>1.522</b></td>
                    <td className="table_4" align="center"> <b>381</b> </td>
                </tr>


                </table>



                <br />
                <p>Aunque cualquier persona puede vincularse como socio, la prioridad de LEO son los 380 millones de estudiantes y sus familias en los
                diferentes países, para quienes la lectura y escritura son actividades rutinarias asociadas al proceso de formación académica, y el
                fortalecimiento de sus competencias comunicativas es clave para el éxito del proceso educativo. Con la membrecía anual de $50.000,
                cada socio accede a la biblioteca digital descargable con 15.000 obras en 5 idiomas, valorada en más de CO$150 mills, US$40.000.</p>
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
            
            <h2 id="titulo" align="center"> <b>Plan Amigos<br />
            </b> 
            </h2>
            <br />
            <h4 id="titulo" align="center"> <b>Una valiosa oportunidad para asegurar la excelencia en nuestros estudios<br />
            </b> 
            </h4>
           <br />
        </div>
    </div>
    );
}