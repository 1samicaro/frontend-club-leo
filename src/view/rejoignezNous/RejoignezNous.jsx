import React from "react";
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";
import "./RejoignezNous.css"

import afiliados1 from "../../assets/contenido/afiliados1.jpg";
import afiliados2 from "../../assets/contenido/afiliados2.jpg";
import afiliados3 from "../../assets/contenido/afiliados3.jpg";






export default function RejoignezNous() {
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

                <h3 id="titulo" align="center"> <b>PLAN AMIS LEO:<br />

            <h5>Aidez-nous à croître et à recevoir un revenu à vie</h5>

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
                <p> <b>Plan des amis <br />
                Nous nous unissons <br />
                pour progresser ensemble <br />
                dans le monde entier </b>
                </p>
              
                <br />
                </div>
                <br />

           <p>
           Pour remplir sa mission de promouvoir la lecture et l’écriture dans le monde, LEO doit se développer, consolider une grande communauté axée sur l’amélioration de leurs niveaux d’éducation et de culture, et le renforcement de leurs compétences en communication
           </p>
           <p>
           Le Plan des Amis est une invitation de LEO à ses membres à soutenir cette croissance, en effectuant un travail très simple, facile et rapide : Invitez la famille, les amis et les autres étudiants et travaillez à rejoindre en tant que membres LEO, avec un maximum de 20 invités. Une fois ce nombre atteint, personne d’autre ne peut être invité.
           </p>
           <p>
            Pour ce travail simple que nous pouvons tous faire, nous recevrons un revenu permanent (à vie), qui sera immédiatement disponible sur notre compte.
           </p>
            
            <br />
            <h3 id="titulo" align="center"> <b>Principes de base du Plan Amigos
            </b> 
            </h3>
            <br />
            <p>
            • La participation est gratuite et volontaire. Un membre peut se désinscrire et continuer à profiter des programmes de promotion de la lecture, de l’écriture et du multilinguisme offerts par ClubLeo. <br />
            • Tout le monde peut être invité. Il n’y a pas d’exigences ou de conditions préalables. Les mineurs doivent avoir l’autorisation et la tutelle de leurs parents <br />
            • Les gens peuvent être invités dans n’importe quel pays du monde. <br />
            • Le retrait est gratuit, à tout moment, sans aucune condition.

            </p>

            <h3 id="titulo" align="center"> <b>Comment fonctionne le plan LEO Friends </b> </h3>
            <br />
            <h4 id="titulo" align="center"> <b> Le principe est simple : inviter, et gagner un revenu croissant, pour la vie
            </b> </h4>

            <br />
            <p>
            1. Lorsque nous nous inscrivons en tant que partenaires, nous créons notre nom d’utilisateur et notre mot de passe ; le programme crée automatiquement « Mon compte » pour nous permettre de suivre nos invités et nos revenus en temps réel. <br />
            2. Nous invitons nos connaissances à s’inscrire en tant que membres LEO, en leur fournissant notre nom d’utilisateur ou en leur envoyant sur leurs réseaux sociaux le lien personnel que le système génère pour nous. <br />
            3. Lors de l’entrée, les invités enregistrent notre nom d’utilisateur ; Et le système les accumule dans notre compte, jusqu’à ce que nous remplissions les 20 demandés. Après cela, la liste se ferme et nous ne pourrons pas continuer à inviter plus de personnes. <br />
            4. Dans un premier temps, à l’arrivée des 20 invités, nous recevrons un dépôt de 100 $ US sur notre compte. <br />
            5. Dans un deuxième temps, lorsque nos 20 partenaires auront chacun complété leurs 20 invités, nous recevrons un revenu de 3200 $ US. <br />
            6. Dans la troisième étape, lorsque les nouveaux membres inviteront leurs 20 amis, nous recevrons 96000 $ US, soit une moyenne mensuelle de 8275 $ US. <br />
 
            Et surtout, l’adhésion à CLUBLEO est renouvelée annuellement, donc ce revenu sera permanent, à vie. Mais nous n’aurons qu’à inviter 20 membres. Une fois que nous les avons terminés, nous ne devons plus rien faire.

            </p>
            


            <br />
            <h3 id="titulo" align="center"> <b>Le LEO Partner Challenge :<br />
            Rejoignez nos 20 partenaires en 1 mois
            </b> 
            </h3>
            <br />
            <p>
            Si tous les membres parviennent à lier nos 20 invités dans le mois suivant l’entrée en LEO, à partir du quatrième mois, nous serons en mesure d’assurer un revenu mensuel moyen significatif de 8 275 $ US, qui sera permanent grâce au renouvellement annuel de l’adhésion à CLUBLEO. C’est simple, et nous pouvons tous le faire très facilement : en profitant de nos connaissances, et de nos contacts sur les réseaux sociaux.          </p>

            <h3 id="titulo" align="center"> <b>LEO Marché cible. Partenaires potentiels<br />
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
            CLUBLEO propose dans sa bibliothèque numérique plus de 15 000 ouvrages en 5 langues, utilisés dans plus de 100 pays à travers le monde (annexe), avec une population de 1 900 millions de personnes, avec 1 675 millions de plus de 8 ans ayant la capacité de lecture et 476 millions d’étudiants.          </p>
        
            
            <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Langue</th>
                    <th className="table_3" align="center">Nombre de ClubLeo Works</th>
                    <th className="table_3" align="center">Locuteurs natifs</th>
                    <th className="table_3" align="center">Plus de 8 ans avec casquette. Lecteur</th>
                    <th className="table_3" align="center">Élèves du primaire/secondaire et supérieurs</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Espagnol</td>
                    <td className="table_4" align="center">8.169</td>
                    <td className="table_4" align="center">580</td>
                    <td className="table_4" align="center">510</td>
                    <td className="table_4" align="center">145</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Anglais</td>
                    <td className="table_4" align="center">5.013</td>
                    <td className="table_4" align="center">678</td>
                    <td className="table_4" align="center">597</td>
                    <td className="table_4" align="center">170</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Français</td>
                    <td className="table_4" align="center">711</td>
                    <td className="table_4" align="center">300</td>
                    <td className="table_4" align="center">264</td>
                    <td className="table_4" align="center">75</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Italien</td>
                    <td className="table_4" align="center">607</td>
                    <td className="table_4" align="center">85</td>
                    <td className="table_4" align="center">75</td>
                    <td className="table_4" align="center">21</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Portugais</td>
                    <td className="table_4" align="center">614</td>
                    <td className="table_4" align="center">260</td>
                    <td className="table_4" align="center">229</td>
                    <td className="table_4" align="center">65</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center"> <b>Totaux </b></td>
                    <td className="table_4" align="center"><b>15.114</b></td>
                    <td className="table_4" align="center"> <b>1.903</b></td>
                    <td className="table_4" align="center"> <b>1.675</b></td>
                    <td className="table_4" align="center"> <b>476</b> </td>
                </tr>


                </table>



                <br />
                <p>
                Bien que tout le monde puisse y adhérer, la priorité de LEO est les 476 millions d’étudiants et leurs familles dans différents pays, pour qui la lecture et l’écriture sont des activités permanentes associées au processus de formation académique, et le renforcement de leurs compétences en communication est la clé du succès du processus éducatif. Avec une adhésion annuelle de 50 $ US, chaque membre a accès à la bibliothèque numérique téléchargeable avec 15 000 œuvres en 5 langues, d’une valeur de plus de 150 000 $ US.
                </p>
            <br />
            <h2 id="titulo" align="center"> <b>Plan des amis :<br />
            </b> 
            </h2>
            <br />
            <h4 id="titulo" align="center"> <b>Une opportunité précieuse d’obtenir un revenu, pour la vie<br />
            </b> 
            </h4>
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

                <h4 id="titulo" align="center"> <b>CLUBLEO<br />
                Nous sommes une communauté mondiale de gagnants
            </b> 
            </h4>
            
            
            
           <br />
        </div>
    </div>
    );
}