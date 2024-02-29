import React from "react";
import "./ChiSiamo.css"
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";




export default function AcercaDe() {
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

                <h3 id="titulo" align="center"> <b>Leggere e scrivere bene, le competenze fondamentali per avere successo <br />
                    nella moderna società globale dell’informazione e della conoscenza
                </b>
                </h3>

                <br />
                <div>
                    <img
                    className="d-blocco w-100"
                    src={aboutus}
                    larghezza="400"
                    altezza="450"
                    alt="..."
                    />
                    </div>

                    <br />

                    <h3 id="titulo" align="center"> <b>Chi siamo <br />
                </b>
                </h3>
                <br />
                <p>
                <b> Esiste una legge universale dello sviluppo: tutto il progresso e il benessere di una società dipende dalla qualità dell'istruzione che la sua popolazione riceve.</b> Pertanto, i paesi più sviluppati hanno come priorità avere sistemi educativi moderni. , che rafforzano la conoscenza e la competitività dei suoi abitanti. Lo dimostrano i test PISA, che classificano i paesi ad alto reddito con i migliori sistemi educativi al mondo: Singapore, Canada, Cina, Finlandia, Hong Kong, Estonia, Giappone e Corea del Sud.
                </p>
                <p>
                <b>LEO - World Reading Club</b>, è un progetto la cui missione è <b>promuovere la lettura, la scrittura e il multilinguismo</b>, come abitudini che contribuiscono al miglioramento educativo e culturale delle persone e delle famiglie, migliorano la qualità del sistema educativo e contribuire alla costruzione di società più democratiche, pacifiche e progressiste.
                </p>
                <p>
                Per compiere questa missione, <b>LEO</b> opera come una grande rete digitale, che integra istituzioni educative e persone impegnate a costruire un mondo migliore, rafforzando il pilastro chiave dello sviluppo: l'istruzione, che dipende fondamentalmente dalla lettura, dal modo in cui acquisire conoscenze e competenze in diversi ambiti.
                </p>
            

                <br />

            

                <h3 id="titulo" align="center"> <b>Obiettivi <br />
                </b>
                </h3>
                <br />
                <p>
                • Aumentare il numero di persone che leggono e scrivono come attività quotidiana in diversi contesti accademici, lavorativi e sociali.<br />

                • Aumentare il tasso di lettura, per garantire che le persone leggano almeno un libro al mese, dodici libri all'anno, con particolare attenzione agli studenti delle scuole primarie e superiori. <br />

                • Offrire scenari affinché le persone possano scrivere e pubblicare le proprie opere in diversi generi, facendole conoscere nel paese e nel mondo, con particolare attenzione alla comunità accademica.<br />

                • Promuovere il multilinguismo e le capacità comunicative delle persone, per migliorare le loro possibilità di partecipazione e successo nella moderna società tecnologica, attraverso Internet.<br />

                • Rafforzare le famiglie e le istituzioni educative come ambienti di base per instillare l'abitudine di leggere e scrivere negli studenti.

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
                <h3 id="titulo" align="center"> <b>Associati<br />
                    </b>
                    </h3>
                    <br />
                    <p>
                    Possono essere membri del <b>World Reading Club</b> in diversi paesi e città: <br />
                    • Persone (di età superiore a 14 anni) <br />
                    • Istituzioni educative e organizzazioni sociali senza scopo di lucro
                    </p>
                    <p>
                    L'abbonamento annuale costa solo <b>$ 50.000</b>, che garantisce l'accesso gratuito ai programmi educativi e culturali del Club (biblioteca digitale, pubblicazione di opere, vendita di opere, ecc.)
                    </p>
                    <br />

                    <h3 id="titulo" align="center"> <b>Programmi e servizi per gli associati<br />
                    </b>
                    </h3>
                    <br />
                    <p>
                    <b>LEO</b> ha sviluppato strumenti pedagogici con tecnologie web, che consentono in modo efficace ed economico di promuovere e diffondere la lettura, la scrittura e il multilinguismo come competenze chiave per garantire che le persone approfittino delle opportunità di contatto, di istruzione e di business offerte dalla internet in tutto il mondo:
                    </p>
                
                    <h5 id="titulo" align="center"> <b>1. Promozione della lettura e del multilinguismo<br />
                    </b>
                    </h5>
                    <br />

                    <p>
                    Per facilitare la lettura i soci hanno a disposizione 3 strumenti tecnologici:
                    </p>
                    <p>
                    <b>a. Portale web <a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> con notizie educative e culturali attuali e articoli sul i generi, gli autori e le opere più importanti, per informare, motivare e guidare la lettura.
                    </p>
                    <p>
                    <b>b. <a href=" https://www.bibliomobil.com/"> https://www.bibliomobil.com/</a></b>: un'APP che gli utenti possono scaricare sul proprio cellulare, PC o tablet , e accedere a più di 15.000 opere in 5 lingue (spagnolo, inglese, francese, portoghese e italiano), da leggere online o scaricare sul proprio dispositivo, e averle a disposizione in qualsiasi momento e luogo senza connessione Internet. Ogni mese vengono aggiunte alla collezione 50 nuove opere, 600 nuovi libri all'anno. Il download dell'APP è gratuito per i membri registrati
                    </p>
                    <p>
                    <b>c. BiblioTablet</b>, un'applicazione attraverso la quale la biblioteca digitale e le sue 15.000 opere vengono registrate nella memoria del cellulare o del tablet dell'utente, per poterla consultare senza connessione internet. Strumento progettato per servire aree rurali e comuni remoti con limitazioni di connettività web. Il download dell'applicazione è gratuito per i membri registrati
                    </p>
                
                    <p>
                    <h5 id="titulo" align="center"> <b>2. Promozione della scrittura
                    </b>
                    </h5>
                    La scrittura è una delle sfide più importanti per le persone. È un atto creativo e propositivo, che permette di far conoscere idee e creazioni, e di contribuire all’ampliamento della conoscenza e del patrimonio letterario universale. A tal fine, il portale web istituzionale <b><a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> consente agli iscritti creare il proprio profilo di scrittore e pubblicare i propri lavori per essere visibili agli altri membri e alle persone in tutto il mondo. Possono essere opere gratuite o commerciali. Questo è un servizio gratuito per i membri registrati.
                    </p>
                    <p>
                    <h5 id="titulo" align="center"> <b>3. Promozione commerciale degli autori LEO
                    </b>
                    </h5>
                    LEO sta sviluppando il negozio <b><a href="www.libreria.clubleo.co/">www.libreria.clubleo.co/</a></b>, che consentirà ai membri di esporre e commercializzare le opere della sua paternità tra la comunità <b>LEO</b> del paese e del mondo. Ciascun partner è responsabile di tutta la gestione commerciale, in conformità con le norme legali in materia.
                    </p>
                    <br />
                    <br />
                    <h3 id="titulo" align="center"> <b>LEO <br />
                    Una grande comunità globale impegnata nella costruzione <br />
                    di una società più colta e colta

                    </b>
                    </h3>
                    <br />
                    <h3 id="titulo" align="center"> <b>LEO <br />
                    Collegatevi!! <br />
                    Vogliamo che tu sia partner del progetto educativo e culturale <br />
                    più grande del mondo
                </b>
            </h3>
            <br />

        </div>            
    </div>
    );
}
