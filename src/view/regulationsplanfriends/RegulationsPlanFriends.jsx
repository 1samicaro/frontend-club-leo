import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logoblack.png'
import amigos from "../../assets/contenido/amigos.png";





export default function RegulationsPlanFriends() {
  return (
    <div className="contenedor_joinus">
       <nav className="navbar navbar-light mb-5" id="encabezado">
                <Link to="/" className="container-fluid">
                    <img
                    src={logo}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                </Link>
            </nav>

            <div className="container-fluid">
            <div className="privacy" align="left" id="padding">
              <h3 align="center">ACUERDO 02 DE 2024<br /></h3>
                <h5 align="center"> <b>REGLAMENTO DEL PLAN AMIGOS LEO</b></h5>
                <br />
                <p>
               <b>Artículo 1.</b> Adoptar el Reglamento del Plan Amigos LEO como alternativa de trabajo y negocios que se ofrece a los socios del Club Mundial de Lectura.
                </p>
                <h6 align="center"> <b>CAPITULO I</b></h6>
                <h6 align="center"> <b>DEFINICION, OBJETIVOS Y ALCANCES</b></h6>
                <p> 
                <b>Artículo 2. – Definición.</b> El <b>Plan Amigos LEO</b> es la estrategia para el crecimiento del Club Mundial de Lectura en el país y todo el mundo, a través del apoyo de los socios que invitan a otras personas (naturales y jurídicas) a ingresar como socios, por lo cual reciben un ingreso cashback sobre el valor de la cuota de asociación anual, tanto en la vinculación inicial como en las sucesivas renovaciones de la membrecía.
                </p>
                <p> 
                <b>Artículo 3. – Objetivos.</b> Con el Plan Amigos LEO, se busca lograr los siguientes objetivos: <br />

                1. El crecimiento sostenido del número de socios de LEO Club Mundial de Lectura, para contar con los ingresos operacionales necesarios para el funcionamiento y la prestación de servicios a la comunidad en todo el mundo. <br />

                2. Organizar una comunidad mundial de instituciones y personas promotoras de la lectura, la escritura y el multilingüismo, como hábitos que mejoren el nivel educativo y cultural de las personas y sus competencias comunicativas. <br />

                3. Crear un escenario de trabajo y negocios que permita que los socios apoyen el crecimiento de LEO en el país y el mundo, con lo cual construirán un negocio propio que les generará una remuneración permanente proporcional a los resultados alcanzados. <br />

                4. Aprovechar la internet y su cobertura mundial para facilitar el crecimiento de LEO y el trabajo de invitación que realizan los socios.

                </p>
                <p>
                Artículo 4. - Principios Básicos del Plan Amigos. <br />

                1. Participación Libre y Voluntaria. El ingreso de los socios LEO al Plan Amigos es libre y voluntario, al igual que la permanencia y retiro, que puede darse en cualquier momento, sin  requisitos ni condiciones. <br />

                2. Un socio puede decidir no participar del Plan Amigos, y continuar disfrutando los programas y servicios de LEO. <br />

                3. Cada socio puede invitar a máximo 20 nuevos socios, personas naturales mayores de 14 años o personas jurídicas. Para el efecto, debe proporcionarles su usuario para que lo ingresen en el formulario de registro. <br />

                4. Los socios de LEO pueden residir en cualquier país del mundo. <br />

                5. La vinculación se realiza por internet a través del portal web institucional www.clubleo.net.

                </p>

                <br />
                <h3 align="center">CAPITULO II<br /></h3>
                <h5 align="center"> <b>Red Personal de Amigos RPA</b></h5> 
                <p>
                <b>Artículo 5.</b> - La <b>Red Personal de Amigos RPA</b>, es el resultado del trabajo de los socios de invitar a otras personas naturales y jurídicas a ingresar a LEO.
                </p>
                <p>
                <b>Artículo 6.- Organización.</b> La <b>Red Personal de Amigos RPA</b> se organiza en 5 niveles de integración, iniciando con el mismo socio como primer nivel de integración, sus 20 socios directos, y los socios que estos sucesivamente inviten, hasta el quinto nivel de Integración
                </p>
                <p>
                <b>Artículo 7. - Cashback.</b>  LEO remunera el trabajo que los socios realizan para apoyar su crecimiento mediante la invitación de nuevos socios, reintegrando mediante la modalidad de cashback el 60% del valor de la cuota de asociación, de la siguiente manera:
                </p>
                <br />
                <div className="imagenesTam">
                <img
                className="d-block w-100"
                src={amigos}
                height="250"
                alt="..."
                />
                </div>
                <br />
                <p>
                <b>Parágrafo.</b> Para el año 2024, la participación de los socios del 60% en la cuota de asociación es de COP$30.000. <br />

                El ingreso por cada nuevo socio se calculará en tiempo real y se acumularán en la cuenta personal del socio promotor. <br />

                El acumulado mensual de ingresos será girado a la cuenta que el socio informe a LEO. Del monto a girar, se realizarán los descuentos tributarios que establezcan las normas legales. <br /> 

                Durante el respectivo mes, el saldo acumulado de ingresos le permitirá al respectivo socio comprar los bienes y servicios que se ofrezcan a través de LEO
                </p>
                <p>
                <b>Artículo 8. - La Red Personal de Amigos RPA</b> que cada socio organice será de su propiedad, de por vida, con sus ingresos y beneficios, mientras permanezca como socio de LEO. Si no renueva su vinculación, perderá su RPA, y el acceso a los programas y servicios de LEO para sus socios
                </p>
                <p>
                <b>Artículo 9. - La RPA es heredable.</b> Una vez complete los 20 invitados, el socio podrá designar a la persona que la heredara en caso de fallecimiento, mediante oficio remitido a LEO con su firma y copia del documento de identificación.
                </p>
                <p>
                <b>Artículo 10. - Aprobación.</b> Acuerdo aprobado por la Asamblea General de Accionistas de la Editorial Educativa Bibliocol SAS, el 24 de febrero de 2024.
                </p>
                <br />
                <br />
                <h6 align="center"><b>DIANA MARCELA ROMERO ROJAS</b><br /></h6>
                <p align="center"> Gerente General</p> 
            

          
          

                




        






            </div>
            </div>
              
     <br />


              
             
    </div>
  );
}
