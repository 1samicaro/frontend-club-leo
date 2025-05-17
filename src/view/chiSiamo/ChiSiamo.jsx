import React from "react";
import "./ChiSiamo.css"
import logoblanco from "../../assets/logoleo.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";
import aboutus35 from "../../assets/contenido/aboutus35.jpg";
import aboutus3 from "../../assets/contenido/aboutus3.jpg";




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

                <h3 id="titulo" align="center"> <b>Leggere e scrivere bene, le competenze fondamentali per raggiungere il successo accademico <br />
                e sfruttare le opportunità di networking e di business offerte da Internet in tutto il mondo




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

                <h3 id="titulo" align="center"> <b>LEO Una comunità globale di business e formazione<br />
            </b> 
            </h3>
            <br />
                    <p>
            Esiste una legge universale dello sviluppo: ogni progresso e benessere di una società dipendono dalla qualità dell'istruzione che riceve la sua popolazione. Per questo motivo, i paesi più sviluppati danno priorità a sistemi educativi moderni ed efficienti, che rafforzino la conoscenza e la competitività dei loro abitanti. Lo dimostrano i test internazionali PISA dell'OCSE, che pongono ai vertici della classifica i paesi ad alto reddito con i migliori sistemi educativi al mondo: Singapore, Canada, Cina, Finlandia, Hong Kong, Estonia, Giappone e Corea del Sud.
            </p>
            <p>
            LEO - Club di lettura mondiale, è un progetto sociale la cui missione è promuovere la lettura, la scrittura e il multilinguismo come abitudini che migliorano il livello educativo e culturale delle persone e rafforzano le loro capacità comunicative, necessarie per il successo nelle loro attività accademiche e nella società moderna integrata globalmente da Internet, che richiede la lettura e l'utilizzo di quantità crescenti di informazioni e la scrittura di contenuti chiari e avvincenti per milioni di persone in tutto il mondo.
            </p>
            <p>
                Per compiere questa missione, LEO funziona come una rete digitale globale, basata sulla teoria dei sei gradi di separazione, secondo la quale tutte le persone nel mondo possono essere integrate in una rete con soli 6 collegamenti; Cioè, con soli 6 passaggi, possiamo contattare tutta l'umanità. Questa è la base dei social network Facebook, Twitter, Linkedin, ecc., che attraverso Internet ci permettono, partendo solo dai nostri conoscenti, di creare una rete con migliaia di contatti in tutto il mondo, conoscerli attraverso il loro profilo, le loro storie e i loro messaggi, e svolgere con loro molteplici attività culturali, ambientali, imprenditoriali, ecc. <br />

            Con questa filosofia, LEO mira a integrare persone provenienti da tutti i paesi affinché lavorino per raggiungere obiettivi comuni: migliorare il nostro livello educativo e culturale, rafforzare le capacità comunicative e generare opportunità di reddito permanente che migliorino la nostra qualità di vita.
            </p>

            <h3 id="titulo" align="center"> <b>Obiettivi <br />
            </b> 
            </h3> 
            <br />      
            <p>
            • Facilitare l'accesso ai libri e aumentare i tassi di lettura, per garantire che tutti leggano almeno un libro al mese, dodici libri all'anno. <br />
            • Offrire scenari ai membri LEO per scrivere e pubblicare le loro opere in diversi generi, facendole conoscere nel paese e nel mondo. <br />
            • Promuovere il multilinguismo e le competenze comunicativo delle persone, migliorare le loro possibilità di partecipazione e di successo nella moderna società tecnologica, attraverso Internet. <br />
            • Rafforzare le famiglie e le istituzioni educative come ambienti di base per instillare l'abitudine alla lettura e alla scrittura negli studenti.

            


            </p>
           

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
            <h3 id="titulo" align="center"> <b>Associato <br />
            </b> 
            </h3> 

             <p>
             Chiunque e gli studenti di qualsiasi paese del mondo possono essere membri del World Book Club. I minori devono avere l'autorizzazione e la tutela dei genitori o dei tutori, allegando il modulo di autorizzazione di collegamento.            </p>
            <p>
            L'abbonamento annuale costa solo 50 dollari. I membri hanno accesso gratuito, permanente e gratuito alle 15.000 opere di letteratura e scienze sociali in cinque lingue della nostra biblioteca e agli altri programmi educativi e culturali del Club (opere editoriali, laboratorio letterario, ecc.).
            </p>
            

            <br />
            <h3 id="titulo" align="center"> <b>Programmi e servizi per i partner<br />
            </b> 
            </h3>
            <br />
            <p>
            LEO ha sviluppato un pacchetto di strumenti pedagogici con tecnologie web, che permettono in modo efficiente ed economico di promuovere e massificare la lettura, la scrittura e il multilinguismo come competenze chiave per migliorare il rendimento scolastico e far sì che le persone approfittino delle opportunità di contatto, istruzione e business offerte da Internet in tutto il mondo:
            </p>
           

            <h4 id="titulo" align="left"> <b>1. Promozione della lettura e del multilinguismo<br />
            </b> 
            </h4> 
            <br />  
            <p>
            LEO offre ai suoi membri una biblioteca digitale con più di 15.000 opere di scienze sociali e letterarie in 5 lingue (spagnolo, inglese, francese, portoghese e italiano). Ogni mese vengono aggiunte 50 nuove opere, 600 nuovi libri all'anno. I membri possono scaricare clubleo.net sul proprio cellulare, tablet o pc, per facilitare l'accesso alle opere. Il costo della collezione bibliografica è stimato in 150.000 dollari, ma è gratuito per i membri LEO. (Vedi Catalogo)
            </p>
            <p>
            I membri che vivono in aree rurali e marginali senza una connessione a Internet possono scaricare e registrare le opere sul proprio PC, telefono cellulare o tablet per leggere e lavorare senza bisogno di Internet.            </p>
            <p>
            Inoltre, LEO ha sviluppato il portale web letsallread.com, che offre articoli sui generi, gli autori e le opere più importanti, con lo scopo di informare, motivare e guidare le attività di lettura e scrittura svolte dai nostri membri.
            </p>

            <div className="container_bannernos"  align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={aboutus35}
                width="400"
                height="450"
                alt="..."
                />
                
                </div>
                <br />

            <h4 id="titulo" align="left"> <b>2. Promozione della scrittura



            <br />
            </b> 
            </h4>
            <br />
            <p>
            Scrivere è una delle sfide intellettuali più importanti per tutte le persone. È un atto creativo e propositivo, che permette di conoscere idee, creazioni e proposte, e contribuisce all'espansione della conoscenza e del patrimonio letterario universale.            </p>
            <p>
            Scrivere con eleganza, chiarezza argomentativa e ricchezza linguistica è una delle competenze più importanti che dobbiamo sviluppare, perché da essa dipendono il successo accademico, lavorativo e sociale, oltre che la possibilità di pubblicare le nostre proposte su internet, di essere lette e di avere un impatto sui milioni di utenti nel mondo. L'esperienza lo dimostra: il successo nella moderna società tecnologica dipende dall'avere buone capacità di scrittura, dall'elaborazione e dalla trasmissione di messaggi significativi che siano attraenti e generino valore per i milioni di utenti di Internet che ricevono informazioni in tutti i paesi del mondo.             </p>
             <p>
             Per facilitare e rafforzare le capacità comunicative dei nostri membri, LEO ha creato il portale web writersleo, un social network specializzato che permette ai membri di creare il proprio profilo di scrittore e pubblicare le proprie opere in qualsiasi argomento o genere, per essere visibili agli altri membri e a persone provenienti da tutto il mondo. Possono essere opere libere o commerciali. Puoi anche organizzare o collegarti a gruppi, pubblicare e inviare messaggi e altre attività sui social network.
             </p>
            <h3 id="titulo" align="center"> <b>CLUBLEO <br />
            Una comunità globale, impegnata a costruire <br />
            di una società più colta e colta




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
            <h3 id="titulo" align="center"> <b>Collegamento!! <br />
            Vogliamo che tu sia partner del progetto educativo e culturale <br />
            più grande del mondo



            </b> 
            </h3>
            <br />

                </div>
                
                
        </div>

  );
}
