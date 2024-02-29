import React from "react";
import "./AProposDeNous.css"
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";




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

                <h3 id="titulo" align="center"> <b>Bien lire et écrire, les compétences fondamentales pour réussir <br />
                 dans la société mondiale moderne de l’information et de la connaissance
             </b>
             </h3>

             <br />
             <div>
                 <img
                 className = "d-bloc w-100"
                 src={aboutus}
                 largeur="400"
                 hauteur="450"
                 alt="..."
                 />
                 </div>

                 <br />

                 <h3 id="titulo" align="center"> <b>À propos de nous <br />
             </b>
             </h3>
             <br />
             <p>
             <b> Il existe une loi universelle du développement : tout progrès et tout bien-être d'une société dépend de la qualité de l'éducation que reçoit sa population.</b> Par conséquent, les pays les plus développés ont pour priorité de disposer de systèmes éducatifs modernes. , qui renforcent la connaissance et la compétitivité de ses habitants. C’est ce que démontrent les tests PISA, qui classent les pays à revenu élevé dotés des meilleurs systèmes éducatifs au monde : Singapour, le Canada, la Chine, la Finlande, Hong Kong, l’Estonie, le Japon et la Corée du Sud.
             </p>
             <p>
             <b>LEO - World Reading Club</b>, est un projet dont la mission est de <b>promouvoir la lecture, l'écriture et le multilinguisme</b>, en tant qu'habitudes qui contribuent à l'amélioration éducative et culturelle des personnes et des familles, améliorent la qualité du système éducatif et contribuer à la construction de sociétés plus démocratiques, pacifiques et progressistes.
             </p>
             <p>
             Pour remplir cette mission, <b>LEO</b> fonctionne comme un grand réseau numérique, qui intègre des établissements d'enseignement et des personnes engagées dans la construction d'un monde meilleur, en renforçant le pilier clé du développement : l'éducation, qui dépend fondamentalement de la lecture, de la manière dont acquérir des connaissances et des compétences dans différents domaines.
             </p>
            
    
             <br />

            

             <h3 id="titulo" align="center"> <b>Objectifs <br />
             </b>
             </h3>
             <br />
             <p>
             • Augmenter le nombre de personnes qui lisent et écrivent dans le cadre d'activités quotidiennes dans différents contextes académiques, professionnels et sociaux.<br />

             • Augmenter les taux de lecture, pour garantir que les gens lisent au moins un livre par mois, douze livres par an, en mettant l'accent sur les élèves du primaire et du secondaire. <br />
    
             • Proposer des scénarios permettant aux gens d'écrire et de publier leurs œuvres dans différents genres, en les faisant connaître dans le pays et dans le monde, en mettant l'accent sur la communauté universitaire.<br />

             • Promouvoir le multilinguisme et les compétences communicatives des personnes, pour améliorer leurs chances de participation et de réussite dans la société technologique moderne, grâce à Internet.<br />

             • Renforcer les familles et les établissements d'enseignement en tant que cadres de base pour inculquer l'habitude de lire et d'écrire aux étudiants.

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
            <h3 id="titulo" align="center"> <b>Associés<br />
              </b>
              </h3>
              <br />
              <p>
              Ils peuvent être membres du <b>Club Mondial de Lecture</b> dans différents pays et villes : <br />
              • Personnes (plus de 14 ans) <br />
              • Établissements d'enseignement et organismes sociaux à but non lucratif
              </p>
              <p>
              L'adhésion annuelle ne coûte que <b>50 000$</b>, qui donne accès gratuitement aux programmes éducatifs et culturels du Club (bibliothèque numérique, édition d'ouvrages, vente d'ouvrages, etc.)
              </p>
              <br />

              <h3 id="titulo" align="center"> <b>Programmes et services pour les associés<br />
              </b>
              </h3>
              <br />
              <p>
              <b>LEO</b> a développé des outils pédagogiques avec les technologies Web, qui permettent de promouvoir et de diffuser de manière efficace et économique la lecture, l'écriture et le multilinguisme en tant que compétences clés pour garantir que les gens profitent des opportunités de contacts, d'éducation et d'affaires offertes par le internet dans le monde :
              </p>
            
              <h5 id="titulo" align="center"> <b>1. Promotion de la lecture et du multilinguisme<br />
              </b>
              </h5>
              <br />

              <p>
              Pour faciliter la lecture, les membres disposent de 3 instruments technologiques :
              </p>
              <p>
              <b> a. <a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> portail Web proposant des actualités éducatives et culturelles actuelles et des articles sur le genres, auteurs et œuvres les plus importants, pour informer, motiver et guider la lecture.
              </p>
              <p>
              <b>b. <a href=" https://www.bibliomobil.com/"> https://www.bibliomobil.com/</a></b> : une application que les utilisateurs peuvent télécharger sur leur téléphone portable, leur PC ou leur tablette , et accédez à plus de 15 000 ouvrages en 5 langues (espagnol, anglais, français, portugais et italien), pour lire en ligne ou télécharger sur votre appareil, et les avoir disponibles à tout moment et en tout lieu sans connexion Internet. Chaque mois, 50 nouveaux ouvrages s'ajoutent à la collection, soit 600 nouveaux livres par an. Le téléchargement de l'application est gratuit pour les membres connectés
              </p>
              <p>
              <b>c. BiblioTablet</b>, une application grâce à laquelle la bibliothèque numérique et ses 15 000 ouvrages sont enregistrés dans la mémoire du téléphone portable ou de la tablette de l'utilisateur, pour une consultation sans connexion Internet. Outil conçu pour desservir les zones rurales et les municipalités éloignées présentant des limitations de connectivité Web. Le téléchargement de l'application est gratuit pour les membres connectés
              </p>
            
              <p>
              <h5 id="titulo" align="center"> <b>2. Promotion de l'écriture
              </b>
              </h5>
              L'écriture est l'un des défis les plus importants pour les gens. Il s'agit d'un acte créatif et ciblé, qui permet de faire connaître les idées et les créations et de contribuer à l'expansion des connaissances et du patrimoine littéraire universel. A cet effet, le portail web institutionnel <b><a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> permet aux membres créez leur profil d'écrivain et publiez leurs œuvres pour être visibles par les autres membres et les personnes du monde entier. Il peut s'agir d'œuvres gratuites ou commerciales. Il s'agit d'un service gratuit pour les membres connectés.
              </p>
              <p>
              <h5 id="titulo" align="center"> <b>3. Promotion commerciale des auteurs LEO
              </b>
              </h5>
              LEO développe le magasin <b><a href="www.libreria.clubleo.co/">www.libreria.clubleo.co/</a></b>, qui permettra aux membres d'exposer et de commercialiser les œuvres de sa paternité parmi la communauté <b>LEO</b> du pays et du monde. Chaque partenaire est responsable de toute la gestion commerciale, conformément aux dispositions légales en la matière.
              </p>
              <br />
              <br />
              <h3 id="titulo" align="center"> <b>LEO <br />
              Une grande communauté mondiale engagée dans la construction <br />
              d'une société plus instruite et plus cultivée

              </b>
              </h3>
              <br />
              <h3 id="titulo" align="center"> <b>LEO <br />
              Relier!! <br />
              Nous souhaitons que vous soyez partenaire du projet éducatif et culturel <br />
              le plus grand du monde
              </b>
              </h3>
              <br />

                </div>
                
                
        </div>
    );
}
