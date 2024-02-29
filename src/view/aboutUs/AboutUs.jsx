import React from "react";
import "./AboutUs.css"
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";




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

            <h3 id="titulo" align="center"> <b>Reading and writing well, the fundamental skills to be successful <br />
             in the modern global information and knowledge society
           </b>
           </h3>

           <br />
           <div>
             <img
             className="d-block w-100"
             src={aboutus}
             width="400"
             height="450"
             alt="..."
             />
             </div>

             <br />

             <h3 id="titulo" align="center"> <b>About us <br />
           </b>
           </h3>
           <br />
           <p>
           <b> There is a universal law of development: all progress and well-being of a society depends on the quality of the education its population receives.</b> Therefore, the most developed countries have as a priority having modern educational systems. , that strengthen the knowledge and competitiveness of its inhabitants. This is demonstrated by the PISA tests, which place high-income countries with the best educational systems in the world: Singapore, Canada, China, Finland, Hong Kong, Estonia, Japan and South Korea.
           </p>
           <p>
           <b>LEO - World Reading Club</b>, is a project whose mission is to <b>promote reading, writing and multilingualism</b>, as habits that contribute to the educational and cultural improvement of people and families, improve the quality of the educational system and contribute to the construction of more democratic, peaceful and progressive societies.
           </p>
           <p>
           To fulfill this mission, <b>LEO</b> operates as a large digital network, which integrates educational institutions and people committed to building a better world, by strengthening the key pillar of development: education, which depends fundamentally reading, the way to acquire knowledge and skills in different areas.
           </p>
          
  
           <br />

          

           <h3 id="titulo" align="center"> <b>Objectives <br />
           </b>
           </h3>
           <br />
           <p>
           • Increase the number of people who read and write as daily activities in different academic, work and social settings.<br />

           • Increase reading rates, to ensure that people read at least one book a month, twelve books a year, with emphasis on primary and high school students. <br />
 
           • Offer scenarios for people to write and publish their works in different genres, making them known in the country and the world, with emphasis on the academic community.<br />

           • Promote multilingualism and people's communicative skills, to improve their chances of participation and success in the modern technological society, through the Internet.<br />

           • Strengthen families and educational institutions as basic settings to instill the habit of reading and writing in students.

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
           <h3 id="titulo" align="center"> <b>Associates<br />
           </b>
           </h3>
           <br />
           <p>
           They can be members of the <b>World Reading Club</b> in different countries and cities: <br />
           • People (over 14 years old) <br />
           • Educational institutions and non-profit social organizations
           </p>
           <p>
           Annual membership costs only <b>$50,000</b>, which grants free access to the Club's educational and cultural programs (digital library, publishing works, selling works, etc.)
           </p>
           <br />

           <h3 id="titulo" align="center"> <b>Programs and Services for Associates<br />
           </b>
           </h3>
           <br />
           <p>
           <b>LEO</b> has developed pedagogical tools with web technologies, which allow efficiently and economically to promote and spread reading, writing and multilingualism as key competencies to ensure that people take advantage of opportunities for contacts, education and businesses offered by the internet worldwide:
           </p>
         
           <h5 id="titulo" align="center"> <b>1. Promotion of Reading and Multilingualism<br />
           </b>
           </h5>
            <br />

            <p>
            To facilitate reading, members have 3 technological instruments:
            </p>
            <p>
            <b> a. <a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> web portal with current educational and cultural news, and articles on the most important genres, authors and works, to inform, motivate and guide reading.
            </p>
            <p>
            <b>b. <a href=" https://www.bibliomobil.com/"> https://www.bibliomobil.com/</a></b>: an APP that users can download to their cell phone, PC or tablet , and access more than 15,000 works in 5 languages (Spanish, English, French, Portuguese and Italian), to read online or download to your device, and have them available at any time and place without an internet connection. Monthly, 50 new works are added to the collection, 600 new books a year. Downloading the APP is free for logged in members
            </p>
           <p>
           <b>c. BiblioTablet</b>, an application through which the digital library and its 15,000 works are recorded in the memory of the user's cell phone or tablet, for consultation without an internet connection. Tool designed to serve rural areas and remote municipalities with web connectivity limitations. Downloading the application is free for logged in members
           </p>
          
           <p>
           <h5 id="titulo" align="center"> <b>2. Promotion of writing
           </b>
           </h5>
           Writing is one of the most important challenges for people. It is a creative and purposeful act, which allows ideas and creations to be made known, and contribute to the expansion of knowledge and universal literary heritage. To this end, the institutional web portal <b><a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> allows members create their writer profile and publish their works to be visible to other members and people around the world. They can be free or commercial works. This is a free service for logged in members.
           </p>
           <p>
           <h5 id="titulo" align="center"> <b>3. Commercial promotion of LEO authors
           </b>
           </h5>
           LEO is developing the store <b><a href="www.libreria.clubleo.co/">www.libreria.clubleo.co/</a></b>, which will allow members to display and market the works of his authorship among the <b>LEO</b> community of the country and the world. Each partner is responsible for all commercial management, in accordance with the legal regulations on the matter.
           </p>
           <br />
           <br />
           <h3 id="titulo" align="center"> <b>LEO <br />
           A large global community committed to construction <br />
           of a more educated and cultured society

           </b>
           </h3>
           <br />
           <h3 id="titulo" align="center"> <b>LEO <br />
           Link up!! <br />
           We want you to be a partner of the educational and cultural project <br />
           biggest in the world
           </b>
           </h3>
           <br />

              </div>
              
             
    </div>
  );
}
