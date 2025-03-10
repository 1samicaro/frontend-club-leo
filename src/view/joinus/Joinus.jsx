import React from "react";
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";
import "./Joinus.css"

import afiliados1 from "../../assets/contenido/afiliados1.jpg";
import afiliados2 from "../../assets/contenido/afiliados2.jpg";
import afiliados3 from "../../assets/contenido/afiliados3.jpg";






export default function Joinus() {
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

                <h3 id="titulo" align="center"> <b>LEO FRIENDS PLAN:<br />

            <h5>Help us grow and earn income for life</h5>

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
           In order to fulfill the mission of promoting reading and writing in the world, LEO needs to grow, consolidating a large community focused on improving its levels of education and culture
           </p>
           <p>
           The Friends Plan is an invitation from LEO to its members to support this growth by doing a very simple, easy and quick job: Invite family members, friends and colleagues from school and work to join as LEO Members, with a maximum of 20 guests. Once this number is reached, no one else can be invited.
           </p>
           <p>
           For this simple job that we can all do, we will receive permanent income (for life), which will be immediately available in our account.
           </p>
            <br />
            <h3 id="titulo" align="center"> <b>Basic principles of the Friends Plan
            </b> 
            </h3>
            <br />
            <p>
            • Participation is free and voluntary. A member may not participate and still enjoy the programs to promote reading, writing and multilingualism offered by ClubLeo. <br />
            • Anyone can be invited. There are no different requirements or preconditions. Minors must have the authorization and guardianship of their parents. <br />
            • Members may reside in any country in the world. <br />
            • Withdrawal is free, at any time, without any requirement.


            </p>

            <h3 id="titulo" align="center"> <b>How the LEO Friends Plan works</b> </h3>
            <br />
            <h4 id="titulo" align="center"> <b>The principle is simple: invite, and get increasing income, for life
            </b> </h4>

            <br />
            <p>
            1. When joining, each member creates their username and password; the program automatically creates “My Account” for them to track their guests and benefits in real time. <br />
            2. The member invites their friends and colleagues to enter LEO, providing them with their username or sending them a link to their social networks. <br />
            3. When joining, the guests register their username; and the system links them with the member who invited them for the recognition of the benefits of the Friends Plan. <br />
            4. The system accumulates in your account the members that you invite, until completing the 20 requested. Afterwards, the list closes and you will not be able to continue inviting more people. <br />
            5. In the first step of invitation, when you complete the 20 invitees, you will receive an income of US$100 in your account <br />
            6. In the second step, when your 20 invitees each complete their 20 invitees, you will receive in your personal account US$2,800 <br />
            7. Finally, in the third step, when the new members invite their 20 friends, you will receive US$104,000 <br />

            And most importantly, the CLUBLEO membership is renewed annually, so your income will be permanent, for life. But remember that during your lifetime, you can only invite 20 members.

            </p>
            


            <br />
            <h3 id="titulo" align="center"> <b>The Challenge for LEO members: <br />
             Getting our 20 members in 1 month
             <br />
            </b> 
            </h3>
            <br />
            <p>
            If all members manage to link our 20 guests within the month following their entry into LEO, we will be able to secure a significant average monthly income of US$8,667, which will be permanent thanks to the annual renewal of the CLUBLEO membership
            </p>

            <h3 id="titulo" align="center"> <b>LEO Target Market. Potential Partners<br />
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
            CLUBLEO offers in its Digital Library more than 15,000 works in 5 languages, used in more than 100 countries around the world (Annex), with a population of 1.9 billion people, with 1.5 billion over 14 years of age with reading ability and 380 million primary and secondary school students.            </p>
        
            
            <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Language</th>
                    <th className="table_3" align="center">Number of works</th>
                    <th className="table_3" align="center">Native speakers</th>
                    <th className="table_3" align="center">Age 14+</th>
                    <th className="table_3" align="center">Students</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Spanish</td>
                    <td className="table_4" align="center">8.169</td>
                    <td className="table_4" align="center">580</td>
                    <td className="table_4" align="center">464</td>
                    <td className="table_4" align="center">116</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">English</td>
                    <td className="table_4" align="center">5.013</td>
                    <td className="table_4" align="center">678</td>
                    <td className="table_4" align="center">542</td>
                    <td className="table_4" align="center">136</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">French</td>
                    <td className="table_4" align="center">711</td>
                    <td className="table_4" align="center">300</td>
                    <td className="table_4" align="center">240</td>
                    <td className="table_4" align="center">60</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Italian</td>
                    <td className="table_4" align="center">607</td>
                    <td className="table_4" align="center">85</td>
                    <td className="table_4" align="center">68</td>
                    <td className="table_4" align="center">17</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Portuguese</td>
                    <td className="table_4" align="center">614</td>
                    <td className="table_4" align="center">260</td>
                    <td className="table_4" align="center">208</td>
                    <td className="table_4" align="center">52</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center"> <b>Totals </b></td>
                    <td className="table_4" align="center"><b>15.114</b></td>
                    <td className="table_4" align="center"> <b>1.903</b></td>
                    <td className="table_4" align="center"> <b>1.522</b></td>
                    <td className="table_4" align="center"> <b>381</b> </td>
                </tr>


                </table>
                <br />
                <p>
                Although anyone can join, LEO's priority is the 380 million students and their families in different countries, for whom reading and writing are routine activities associated with the academic training process, and strengthening their communication skills is key to the success of the educational process. With an annual membership fee of US$50, each member has access to the downloadable digital library with 15,000 works in 5 languages, valued at more than US$50,000
                </p>



                <br />
            <h2 id="titulo" align="center"> <b>Friends Plan: <br />
            A valuable opportunity to secure income for life
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
                <h4 id="titulo" align="center"> <b>We are a global community of winners</b><br />            </h4>
                <br />

        </div>
    </div>
    
          
                 
  );
}