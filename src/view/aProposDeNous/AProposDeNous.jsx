import React from "react";
import "./AProposDeNous.css"
import logoblanco from "../../assets/logoleo.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";
import aboutus2 from "../../assets/contenido/aboutus2.jpg";
import aboutus3 from "../../assets/contenido/aboutus3.jpg";




export default function AProposDeNous() {
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

                <h3 id="titulo" align="center"> <b>
                    
            Bien lire et bien écrire, les compétences fondamentales pour réussir à l’école <br />
            et profiter des opportunités de réseautage et d’affaires offertes par Internet dans le monde entier



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

                <h3 id="titulo" align="center"> <b>LEO Une communauté mondiale d’affaires et d’éducation<br />
            </b> 
            </h3>
            <br />
            <p>
            Pour remplir cette mission, LEO fonctionne comme un réseau numérique mondial, basé sur la théorie des six degrés de séparation, selon laquelle toutes les personnes du monde peuvent être intégrées dans un réseau comportant seulement 6 liens ; Autrement dit, en seulement 6 étapes, nous pouvons contacter toute l’humanité. C'est la base des réseaux sociaux Facebook, Twitter, Linkedin, etc., qui grâce à Internet nous permettent, à partir seulement de nos connaissances, de créer un réseau avec des milliers de contacts dans le monde, de les connaître à travers leur profil, leurs histoires et leurs messages, et de réaliser avec eux de multiples activités culturelles, environnementales, commerciales, etc. <br />

            Avec cette philosophie, LEO vise à intégrer des personnes de tous les pays pour travailler à la réalisation d'objectifs communs : améliorer notre niveau éducatif et culturel, renforcer nos compétences en communication et générer des opportunités de revenus permanents qui améliorent notre qualité de vie.

            </p>
            

            <h3 id="titulo" align="center"> <b>Objectifs <br />
            </b> 
            </h3> 
            <br />      
            <p>
            • Faciliter l’accès aux livres et augmenter les taux de lecture, pour s’assurer que tout le monde lit au moins un livre par mois, douze livres par an. <br />
            • Proposer des scénarios aux membres LEO pour écrire et publier leurs œuvres dans différents genres, les faisant connaître dans le pays et dans le monde. <br />
            • Promouvoir le multilinguisme et les compétences communicative des gens, d’améliorer leurs chances de participation et de succès dans la société technologique moderne, grâce à Internet. <br />
            • Renforcer les familles et les établissements d’enseignement en tant que cadres de base pour inculquer l’habitude de lire et d’écrire aux élèves.


           
            
            <br /> 
            <br />
            <h3 id="titulo" align="center"> <b>Associé<br />
            </b> 
            </h3>
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
                    </p>
            <p>
            N’importe qui et les étudiants de n’importe quel pays du monde peuvent être membres du World Book Club. Les mineurs doivent avoir l’autorisation et la tutelle de leurs parents ou tuteurs, en joignant le formulaire d’autorisation de lien.
            </p>
            <p>
            L’adhésion annuelle ne coûte que 50 $ US. Les membres ont un accès gratuit, permanent et gratuit aux 15 000 ouvrages de littérature et de sciences sociales en cinq langues de notre bibliothèque et aux autres programmes éducatifs et culturels du Club (édition d’ouvrages, atelier littéraire, etc.).
            </p>

            
            

            <br />
            <h3 id="titulo" align="center"> <b>Programmes et services partenaires<br />
            </b> 
            </h3>
            <br />
            <p>
            LEO a développé un ensemble d’outils pédagogiques avec les technologies web, qui permettent de manière efficace et économique de promouvoir et de massifier la lecture, l’écriture et le multilinguisme en tant que compétences clés pour améliorer les performances scolaires et amener les gens à profiter des opportunités de contacts, d’éducation et d’affaires offertes par Internet dans le monde entier :           
            </p>
            <h4 id="titulo" align="left"> <b>1. Promotion de la lecture et du multilinguisme<br />
            </b> 
            </h4> 
            <br />  
            <p>
            LEO offre à ses membres une bibliothèque numérique avec plus de 15 000 ouvrages de sciences sociales et de littérature en 5 langues (espagnol, anglais, français, portugais et italien). Chaque mois, 50 nouveaux ouvrages sont ajoutés, 600 nouveaux livres par an. Les membres peuvent télécharger clubleo.net sur leur téléphone portable, leur tablette ou leur PC, afin de faciliter l’accès aux œuvres. Le coût de la collection bibliographique est estimé à 150 000 dollars, mais il est gratuit pour les membres LEO. (Voir Catalogue)
            </p>
            <p>
            Les membres qui vivent dans des zones rurales et marginales sans connexion Internet peuvent télécharger et enregistrer les œuvres sur leur PC, leur téléphone portable ou leur tablette pour les lire et travailler sans avoir besoin d’Internet.
            De plus, LEO a développé le portail web letsallread.com, qui propose des articles sur les genres, les auteurs et les œuvres les plus importants, dans le but d’informer, de motiver et d’orienter les activités de lecture et d’écriture menées par nos membres.

            </p>

            <div className="container_bannernos"  align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={aboutus2}
                width="400"
                height="450"
                alt="..."
                />
                <p><b>Améliorer la lecture; <br />
                Le chemin vers la réussite <br />
                scolaire, social et<br />
                professionnel</b>
                </p>
                </div>

            <h4 id="titulo" align="left"> <b>2. Promotion de l’écriture
            <br />
            </b> 
            </h4>
            <br />
            <p>
            L’écriture est l’un des défis intellectuels les plus importants pour tous. Il s’agit d’un acte créatif et intentionnel, qui permet de faire connaître des idées, des créations et des propositions, et contribue à l’expansion de la connaissance et du patrimoine littéraire universel.
            </p>
            <p>
            Écrire avec élégance, des arguments clairs et une richesse linguistique est l’une des compétences les plus importantes que nous devons développer, car la réussite scolaire, professionnelle et sociale en dépend, ainsi que la possibilité de publier nos propositions sur Internet, d’être lus et d’avoir un impact sur les millions d’utilisateurs dans le monde. L’expérience le prouve : le succès dans la société technologique moderne dépend de bonnes compétences rédactionnelles, de l’élaboration et de la transmission de messages significatifs, attrayants et générateurs de valeur pour les millions d’internautes qui reçoivent des informations dans tous les pays du monde.
            </p>
            <p>
            Pour faciliter et renforcer les compétences de communication de nos membres, LEO a créé le portail web writersleo, un réseau social spécialisé qui permet aux membres de créer leur profil d’écrivain et de publier leurs œuvres dans n’importe quel sujet ou genre, afin d’être visibles par les autres membres et par les personnes du monde entier. Il peut s’agir d’œuvres gratuites ou commerciales. Vous pouvez également organiser des groupes ou créer des liens vers ceux-ci, publier et envoyer des messages, ainsi que d’autres activités sur les réseaux sociaux.
            </p>
           

            <h3 id="titulo" align="center"> <b>CLUBLEO <br />
            Une communauté mondiale, engagée à construire <br />
            d’une société plus éduquée et cultivée



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
            <h3 id="titulo" align="center"> <b>Lien!! <br />
            
            Nous voulons que vous soyez partenaire du projet éducatif et culturel <br />
            le plus grand du monde




            </b> 
            </h3>
            <br />

                </div>
                
                
        </div>

  );
}
