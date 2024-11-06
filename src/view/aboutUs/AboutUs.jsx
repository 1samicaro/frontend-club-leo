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

                <h3 id="titulo" align="center"> <b>Reading and writing well are the key skills for success<br />
                in the modern global information and knowledge society

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

                <h3 id="titulo" align="center"> <b>We<br />
            </b> 
            </h3>
            <br />
            <p>
            There is a universal law of development: all progress and well-being of a society depends on the quality of education received by its population. Therefore, the most developed countries have as a priority to have modern and efficient educational systems that strengthen the knowledge and competitiveness of their inhabitants. This is demonstrated by the PISA tests, which place high-income countries with the best educational systems in the world in first place: Singapore, Canada, China, Finland, Hong Kong, Estonia, Japan and South Korea.
            </p>
            <p>
            <b>LEO - World Reading Club</b>, is an academic project whose mission is to promote reading, writing and multilingualism as habits that improve the educational and cultural level of students, and strengthen their communicative skills, necessary to be successful in their academic activity and in the modern information and knowledge society, which requires reading and analyzing increasing amounts of information, and writing clear and convincing content for millions of people around the world.            </p>
            <p>
            To fulfill this mission, <b>LEO</b> operates as a digital network, integrating students into a large global community that generates opportunities for academic, professional and social success.            </p>
            <br />

            

            <h3 id="titulo" align="center"> <b>Objectives <br />
            </b> 
            </h3> 
            <br />      
            <p>
            • Facilitate access to books and increase reading rates, so that students read at least one book a month, twelve books a year. <br />
            • Offer scenarios for students to write and publish their works in different genres, making them known in the country and the world. <br />
            • Promote multilingualism and communication skills in students, to improve their chances of participation and success in the modern technological society, through the Internet. <br />
            • Strengthen families and educational institutions as basic scenarios to instill the habit of reading and writing in students.

            </p>
            <br />
            <h3 id="titulo" align="center"> <b>Associates<br />
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
            All students in our country and anywhere in the world can become members of the <b>World Reading Club.</b> Minors must have the authorization and guardianship of their parents or guardians, attaching the authorization form for membership.
            </p>
            <p>
            Annual membership costs only US$15. From the moment they join, members have free access to <b>bibliomobil.com</b>, our digital library with more than 15,000 works in five languages, and to the Club's other educational and cultural programs (publishing works, literary workshop, etc.)
            </p>
            
            

            <br />
            <h3 id="titulo" align="center"> <b>Programs and Services for Members<br />
            </b> 
            </h3>
            <br />
            <p>
            <b>LEO</b> has developed a package of educational tools with web technologies that allow the efficient and economic promotion and popularization of reading, writing and multilingualism as key competencies to improve academic performance and ensure that students take advantage of the networking, education and business opportunities that the Internet offers worldwide:
            </p>
           

            <h4 id="titulo" align="left"> <b>1. Promotion of Reading and Multilingualism<br />
            </b> 
            </h4> 
            <br />  
            <p>
            By joining <b>LEO</b>, members immediately gain free access to bibliomobil.com, our digital library with more than 15,000 works of social sciences and literature in 5 languages (Spanish, English, French, Portuguese and Italian), which they can read online or save on their device, and have them available at any time and place without an internet connection. Every month, 50 new works are added, 600 new books a year. Members can download the bibliomobil.com APP to their cell phone, tablet or PC, to facilitate access to the works. The cost of bibliomobil.com is estimated at US$40.000, but it is free for LEO members.          
            </p>
            <p>
            Members who live in rural and marginal areas without an Internet connection can download BiblioTablet and save the 15.000 works on their cell phone or tablet for reading and working without the need for Internet (disk size 4 GB).            </p>
            <p>
            Additionally, <b>LEO</b> has developed the web portal vamosaleer.com, our virtual newspaper that offers articles on the most important genres, authors and works, with the purpose of informing, motivating and guiding the reading and writing activities carried out by our members.            </p>

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

            <h4 id="titulo" align="left"> <b>2. Promotion of writing<br />
            </b> 
            </h4>
            <br />
            <p>
            Writing is one of the most important intellectual challenges for all people in the world. It is a creative and purposeful act, which allows ideas, creations and proposals to be made known, and contributes to the expansion of knowledge and the universal literary heritage.            </p>
            <p>
            For students, writing well, with elegance, clear arguments and linguistic richness, is one of the most important skills they must develop, because academic, professional and social success depend on it, as well as the possibility of publishing their proposals on the Internet, being read and impacting the millions of users in the global village. Experience shows that success in modern technological society depends on having a good writing ability, on developing and transmitting meaningful messages that are attractive and generate value for the millions of Internet users who are constantly receiving information in all countries of the world.
            </p>
            <p>
            To facilitate and strengthen the communication skills of our members, <b>LEO</b> has created the web portal writersleo.com, our specialized social network that allows them to create their writer profile and publish their works on any topic or genre, so that they are visible to other members and to people around the world. They can be free or commercial works.
            </p>

            <h3 id="titulo" align="center"> <b>CLUBLEO <br />
            The global community of students, committed to building <br />
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
            <h3 id="titulo" align="center"> <b>LEO <br />
            Join us!! <br />
            We want you to be a partner in the largest educational and cultural project<br />
            in the word
            </b> 
            </h3>
            <br />

                </div>
                
                
        </div>

  );
}
