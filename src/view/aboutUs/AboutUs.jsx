import React from "react";
import "./AboutUs.css"
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";
import aboutus2 from "../../assets/contenido/aboutus2.jpg";
import aboutus3 from "../../assets/contenido/aboutus3.jpg";





export default function AboutUs() {
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

                <h3 id="titulo" align="center"> <b> Reading and writing well, the fundamental skills to achieve academic success and take advantage of the networking and business opportunities offered by the Internet around the world
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

                <h3 id="titulo" align="center"> <b>LEO A global educational and business community<br />
            </b> 
            </h3>
            <br />
            <p>
            There is a universal law of development: all progress and well-being of a society depends on the quality of education received by its population. For this reason, the most developed countries have as a priority to have modern and efficient educational systems that strengthen the knowledge and competitiveness of their inhabitants. This is demonstrated by the OECD's PISA international tests, which place high-income countries with the best educational systems in the world at the top: Singapore, Canada, China, Finland, Hong Kong, Estonia, Japan and South Korea.  </p>

            <p>LEO - World Reading Club, is a social project whose mission is to promote reading, writing and multilingualism, as habits that improve the educational and cultural level of people, and strengthen their communication skills, necessary to be successful in their academic activity and in the modern society integrated worldwide by the Internet, which demands reading and taking advantage of increasing amounts of information, and writing clear and convincing content for millions of people around the world.  </p>

            <p> To fulfill this mission, LEO operates as a global digital network, which integrates people from all countries to strengthen their communication skills, and generate permanent income opportunities that improve their quality of life.
            </p>

            

            <h3 id="titulo" align="center"> <b>Objectives <br />
            </b> 
            </h3> 
            <br />      
            <p>
            • Facilitate access to books and increase reading rates, so that everyone reads at least one book a month, twelve books a year. <br />
            • Offer scenarios for LEO Partners to write and publish their works in different genres, making them known in the country and the world. <br />
            • Promote multilingualism and communication skills in people, to improve their chances of participation and success in the modern technological society, through the Internet. <br />
            • Strengthen families and educational institutions as basic scenarios to instill the habit of reading and writing in students.



            </p>
            <br />
            <h3 id="titulo" align="center"> <b>Members<br />
            </b> 
            </h3> 
            <br />  

            
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
            Anyone and any student in any country in the world can become a member of the World Reading Club. Minors must have the authorization and guardianship of their parents or legal guardians, attaching the authorization form for membership. <br />
            Annual membership costs only US$50. Members have free, permanent, and open access to the 15,000 works of literature and social sciences in five languages in our library and to the Club's other educational and cultural programs (publishing works, literary workshops, etc.)

            </p>
            
            

            <br />
            <h3 id="titulo" align="center"> <b>Programs and Services for Partners<br />
            </b> 
            </h3>
            <br />
            <p>
            LEO has developed a package of educational tools with web technologies that allow the efficient and economic promotion and popularization of reading, writing and multilingualism as key competencies to improve academic performance and to ensure that people take advantage of the networking, education and business opportunities that the Internet offers worldwide:
            </p>
           

            <h4 id="titulo" align="left"> <b>1. Promotion of Reading and Multilingualism<br />
            </b> 
            </h4> 
            <br />  
            <p>
            LEO offers its members a digital library with more than 15,000 works of social sciences and literature in 5 languages (Spanish, English, French, Portuguese and Italian). Every month, 50 new works are added, 600 new books a year. Members can download clubleo.net to their cell phone, tablet or PC, to facilitate access to the works. The cost of the bibliographic collection is estimated at US$150,000, but it is free for LEO members. (See Catalog) <br />
            Members who live in rural and marginal areas without an Internet connection can download and save the works on their PC, cell phone or tablet for reading and work without the need for Internet. <br />
            Additionally, LEO has developed the web portal letsallread.com, which offers articles on the most important genres, authors and works, with the purpose of informing, motivating and guiding the reading and writing activities carried out by our members.

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
                <br />

            <h4 id="titulo" align="left"> <b>2. Promotion of writing<br />
            </b> 
            </h4>
            <p>
            Writing is one of the most important intellectual challenges for all people. It is a creative and purposeful act that allows us to make our ideas, creations and proposals known, and contribute to the expansion of knowledge and the universal literary heritage. <br />
            Writing with elegance, clear arguments and linguistic richness is one of the most important skills that we must develop, because academic, professional and social success depend on it, as well as the possibility of publishing our proposals on the Internet, being read and impacting millions of users around the world. Experience shows that success in the modern technological society depends on having a good writing ability, on developing and transmitting meaningful messages that are attractive and generate value for the millions of Internet users who receive the information in all countries of the world. <br />
            To facilitate and strengthen the communication skills of our members, LEO has created the web portal writersleo, a specialized social network that allows members to create their writer profile and publish their works on any topic or genre, so that they can be visible to other members and people around the world. They can be free or commercial works. They can also organize or join groups, publish and send messages, and do all the other activities of a social network.

            </p>

            

            <h3 id="titulo" align="center"> <b>CLUBLEO <br />
            A global community, committed to building <br />
            a more educated and cultured society

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
            <h3 id="titulo" align="center"> <b>
            Join us!! <br />
            We want you to be a partner in the largest educational and cultural project <br />
            in the world <br />

            </b> 
            </h3>
            <br />

                </div>
                
                
        </div>

  );
}
