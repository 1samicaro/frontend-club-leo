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

                <h3 id="titulo" align="center"> <b>PLAN AMIS:<br />

            <h5>Aidez-nous à grandir et recevez des avantages pour atteindre votre excellence académique</h5>

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
            Pour remplir la mission de promouvoir la lecture parmi les étudiants de notre pays et du monde, LEO doit grandir, en
            consolidant une grande communauté de travail axée sur l‘excellence académique.            </p>
            <p>
            Le Plan Amis est une invitation de LEO à ses membres à soutenir cette croissance, en faisant un travail très simple et
            facile : inviter des amis et des camarades étudiants à devenir membres, avec un maximum de 20 invités.  </p>
            <p>
            Pour ce travail simple que nous pouvons tous faire en peu de temps, LEO reconnaît des avantages importants qui nous
            permettront d‘améliorer nos résultats académiques et d‘avoir les ressources nécessaires pour financer nos études.            </p>
           
            
            <br />
            <h3 id="titulo" align="center"> <b>Principes de base du Plan Amis Leo
            </b> 
            </h3>
            <br />
            <p>
            • La participation est gratuite et volontaire. Un membre ne peut pas participer, et continuer à profiter des programmes de
            promotion de la lecture, de l‘écriture et du multilinguisme proposés par ClubLeo. <br />
            • N‘importe quel étudiant de différents niveaux peut être invité. Il n’y a pas d’exigences ou de conditions préalables
            différentes. <br />
            • Les partenaires peuvent résider dans n‘importe quel pays du monde. <br />
            • Le retrait est gratuit, à tout moment, sans aucune condition.
            </p>

            <h3 id="titulo" align="center"> <b>Comment fonctionne le Plan Amis LEO </b> </h3>
            <br />
            <h4 id="titulo" align="center"> <b>Le principe est simple : inviter, et obtenir des bénéfices pour notre activité académique
            </b> </h4>

            <br />
            <p>
            1. Lors de la création de liens, chaque partenaire crée son nom d’utilisateur et son mot de passe ; Le programme crée
            automatiquement « Mon compte » afin que vous puissiez suivre vos invités et leurs avantages en temps réel. <br />
            2. Le membre invite ses amis et collègues à entrer dans LEO, en leur envoyant le lien vers leurs réseaux sociaux, ou en
            leur fournissant son nom d’utilisateur. <br />
            3. Lors de la création de liens, les invités enregistrent leur nom d’utilisateur ; et le système les met en relation avec le
            partenaire qui les invite à reconnaître les bénéfices de l’excellence académique. <br />
            4. Le système accumule dans votre compte les partenaires que vous invitez, jusqu’à compléter les 20 demandés. Par la
            suite, la liste est fermée et vous ne pourrez plus inviter d’autres personnes. <br />
            5. Lors de la première étape d’invitation, après avoir complété les 20 invités, vous recevrez une notification de livraison
            d’une tablette 10" avec la bibliothèque numérique bibliomobil et ses 15 000 œuvres enregistrées. <br />
            6. Dans un deuxième temps, lorsque vos 20 invités auront chacun complété vos 20 invités, vous recevrez un ordinateur
            portable, sur lequel sera également enregistrée la bibliothèque numérique bibliomobil et ses 15 000 ouvrages. <br />
            7. Enfin, dans la troisième étape, lorsque les nouveaux membres inviteront leurs 20 amis, ils recevront la prime éducative
            pour l’excellence académique de 2 millions de dollars par mois, qui sera enregistrée dans le compte financier qui relève
            de LEO. Cette prime sera permanente tant que vous conserverez votre statut d’étudiant.
            </p>
            


            <br />
            <h3 id="titulo" align="center"> <b>Le LEO Challenge : un avantage supplémentaire pour les membres engagés<br />
            </b> 
            </h3>
            <br />
            <p>
            Si un membre parvient à relier ses 20 invités dans le mois suivant son entrée dans LEO, il recevra un formidable stimulus
            supplémentaire : la prime éducative pour l’excellence académique s’élèvera à 4 millions de dollars par mois, de quoi
            financer jusqu’à des études universitaires.            </p>

            <h3 id="titulo" align="center"> <b>Marché cible LEO. Partenaires potentiels<br />
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
            Bibliomobil, la Bibliothèque Numérique LEO propose à ses membres plus de 15 000 ouvrages en 5 langues, utilisés dans
            plus de 100 pays dans le monde (Annexe), avec une population de 1,9 milliard d’habitants, dont 1,5 milliard de plus de 14
            ans ayant une capacité de lecture et 380 millions d’élèves du primaire et du secondaire.            </p>
        
            
            <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Langue</th>
                    <th className="table_3" align="center">Nombre d’œuvres</th>
                    <th className="table_3" align="center">Locuteurs natifs</th>
                    <th className="table_3" align="center">Plus de 14 ans</th>
                    <th className="table_3" align="center">Étudiants</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Espagnol</td>
                    <td className="table_4" align="center">8.169</td>
                    <td className="table_4" align="center">580</td>
                    <td className="table_4" align="center">464</td>
                    <td className="table_4" align="center">116</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Anglais</td>
                    <td className="table_4" align="center">5.013</td>
                    <td className="table_4" align="center">678</td>
                    <td className="table_4" align="center">542</td>
                    <td className="table_4" align="center">136</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Français</td>
                    <td className="table_4" align="center">711</td>
                    <td className="table_4" align="center">300</td>
                    <td className="table_4" align="center">240</td>
                    <td className="table_4" align="center">60</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Italien</td>
                    <td className="table_4" align="center">607</td>
                    <td className="table_4" align="center">85</td>
                    <td className="table_4" align="center">68</td>
                    <td className="table_4" align="center">17</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Portugais</td>
                    <td className="table_4" align="center">614</td>
                    <td className="table_4" align="center">260</td>
                    <td className="table_4" align="center">208</td>
                    <td className="table_4" align="center">52</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center"> <b>Totaux </b></td>
                    <td className="table_4" align="center"><b>15.114</b></td>
                    <td className="table_4" align="center"> <b>1.903</b></td>
                    <td className="table_4" align="center"> <b>1.522</b></td>
                    <td className="table_4" align="center"> <b>381</b> </td>
                </tr>


                </table>



                <br />
                <p>Bien que tout le monde puisse adhérer en tant que membre, la priorité de LEO est les 380 millions d’étudiants et leurs
                familles dans différents pays, pour qui la lecture et l’écriture sont des activités de routine associées au processus de
                formation académique, et le renforcement de leurs compétences communicatives est la clé du succès du programme
                éducatif. processus. Avec une adhésion annuelle de 50 000 $, chaque membre accède à la bibliothèque numérique
                téléchargeable contenant 15.000 ouvrages en 5 langues, d’une valeur de plus de 150 moulins CO$, soit 40 000 $ US.</p>
            <br />
            <h2 id="titulo" align="center"> <b>Forfait amis<br />
            </b> 
            </h2>
            <br />
            <h4 id="titulo" align="center"> <b>Une opportunité précieuse pour assurer l’excellence de nos études<br />
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
            
            
            
           <br />
        </div>
    </div>
    );
}