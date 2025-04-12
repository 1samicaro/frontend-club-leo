import React from "react";
import logoblanco from "../../assets/logoleo.png";
import { Link } from "react-router-dom";
import "./UniscitiANoi.css"

import afiliados1 from "../../assets/contenido/afiliados1.jpg";
import afiliados2 from "../../assets/contenido/afiliados2.jpg";
import afiliados3 from "../../assets/contenido/afiliados3.jpg";

import tabla from "../../assets/contenido/tabla.png";
import tabla1 from "../../assets/contenido/tabla1.png";




export default function UniscitiANoi() {
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

                <h3 id="titulo" align="center"> <b>PIANO AMICI LEO:<br />

            <h5>Aiutaci a crescere e a ricevere un reddito per tutta la vita </h5>

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
                <p> <b>Piano Amici <br />
                Ci uniamo <br />
                per progredire insieme <br />
                nel mondo </b>
                </p>
              
                <br />
                </div>
                <br />

            <p>
            Per adempiere alla missione di promuovere la lettura e la scrittura nel mondo, LEO ha bisogno di crescere, consolidando una grande comunità focalizzata sul miglioramento dei loro livelli di istruzione e cultura e sul rafforzamento delle loro capacità comunicative.
            </p>
            <p>
            Il Piano Amici è un invito da parte di LEO ai suoi membri a sostenere questa crescita, svolgendo un lavoro molto semplice, facile e veloce: invitare familiari, amici e compagni di corso e lavorare per unirsi come Membri LEO, con un massimo di 20 ospiti. Una volta completato questo numero, nessun altro può essere invitato.
            </p>
            <p>
            Per questo semplice lavoro che tutti possiamo fare, riceveremo un reddito permanente (per tutta la vita), che sarà immediatamente disponibile sul nostro conto.
            </p>
            <br />
            <h3 id="titulo" align="center"> <b>Principi di base del Piano Amigos
            </b> 
            </h3>
            <br />
            <p>

            • La partecipazione è gratuita e volontaria. Un membro può scegliere di non partecipare e continuare a godere dei programmi di promozione della lettura, della scrittura e del multilinguismo offerti da ClubLeo. <br />
            • Chiunque può essere invitato. Non ci sono requisiti o presupposti. I minori devono avere l'autorizzazione e la tutela dei genitori. <br />
            • Le persone possono essere invitate in qualsiasi paese del mondo. <br />
            • Il prelievo è gratuito, in qualsiasi momento, senza alcun obbligo.

            </p>

            <h3 id="titulo" align="center"> <b>Come funziona il piano Amici LEO</b> </h3>
            <br />
            <h4 id="titulo" align="center"> <b>Il principio è semplice: invitare e guadagnare un reddito crescente, per tutta la vita
            </b> </h4>

            <br />
            <p>
            1. Unendoci come partner, creiamo il nostro nome utente e password; Il programma genera automaticamente il nostro collegamento personale e crea "Il mio account" in modo che possiamo monitorare i nostri ospiti e le nostre entrate in tempo reale. <br />

            2. Invitiamo i nostri conoscenti ad aderire come membri LEO, fornendo loro il nostro nome utente o inviando loro il collegamento personale che il sistema genera per noi ai loro social network. <br />

            3. Quando le persone che invitiamo si iscrivono come membri, registrano il nostro nome utente; e il sistema li accumula nel nostro conto, fino a completare i 20 richiesti. Successivamente la lista verrà chiusa e non potremo continuare ad invitare altre persone. <br />

            4. Secondo il principio dei 6 gradi di integrazione che LEO applica, gli ospiti continueranno a crescere nel Paese e nel mondo, e per ognuno di loro LEO ci riconoscerà un reddito, che potrà raggiungere i 96.000 dollari all'anno, cioè una media mensile di 8.275 dollari. <br />

            E, cosa più importante, l'iscrizione a CLUBLEO si rinnova ogni anno, quindi questo reddito sarà permanente, per tutta la vita. Dobbiamo invitare 20 soci una sola volta, ma LEO ci riconosce un reddito a vita, con l'allacciamento e i successivi rinnovi.


            </p>


            <br />
            <h3 id="titulo" align="center"> <b>La sfida dei partner LEO: <br />
            Ottieni i nostri 20 partner in 1 mese
            <br />
            </b> 
            </h3>
            <br />
           <p>
           Se tutti i membri riusciranno a collegare i nostri 20 ospiti entro il mese successivo all'ingresso in LEO, dal quarto mese saremo in grado di garantire un reddito medio mensile significativo di 8.275 dollari, che sarà permanente grazie al rinnovo annuale dell'iscrizione a CLUBLEO. È semplice, e tutti possiamo farlo molto facilmente: sfruttando le nostre conoscenze, e i contatti sui social network.
           </p>

            <h3 id="titulo" align="center"> <b>Mercato di riferimento LEO.<br />
            Potenziali partner
            </b> 
            </h3>

            <div className="container_bannerus1"  align="center">
                <img
                id="imagenajustada"
                className="d-block w-100"
                src={afiliados2}
                width="400"
                height="450"
                alt="..."
                />
                <p> <b>Siamo una <br />
                grande comunità <br />
                380 milioni di studenti <br />
                in più di 100 paesi <br />
                in tutto il mondo</b>
                
                </p>
                </div>

            <br />
           <p>
           CLUBLEO offre nella sua Biblioteca Digitale più di 15.000 opere in 5 lingue, utilizzate in più di 100 paesi in tutto il mondo (Allegato), con una popolazione di 1.900 milioni di persone, con 1.675 milioni di persone di età superiore agli 8 anni con capacità di lettura e 476 milioni di studenti.
           </p>
            
            <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Lingua</th>
                    <th className="table_3" align="center">N. di opere ClubLeo</th>
                    <th className="table_3" align="center">Madrelingua</th>
                    <th className="table_3" align="center">Più di 8 anni con berretto. Lettore</th>
                    <th className="table_3" align="center">Studenti di Prim./Sec. e Superior</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Spagnolo</td>
                    <td className="table_4" align="center">8.169</td>
                    <td className="table_4" align="center">580</td>
                    <td className="table_4" align="center">510</td>
                    <td className="table_4" align="center">145</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Inglese</td>
                    <td className="table_4" align="center">5.013</td>
                    <td className="table_4" align="center">678</td>
                    <td className="table_4" align="center">597</td>
                    <td className="table_4" align="center">170</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Francese</td>
                    <td className="table_4" align="center">711</td>
                    <td className="table_4" align="center">300</td>
                    <td className="table_4" align="center">264</td>
                    <td className="table_4" align="center">75</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Italiano</td>
                    <td className="table_4" align="center">607</td>
                    <td className="table_4" align="center">85</td>
                    <td className="table_4" align="center">75</td>
                    <td className="table_4" align="center">21</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Portoghese</td>
                    <td className="table_4" align="center">614</td>
                    <td className="table_4" align="center">260</td>
                    <td className="table_4" align="center">229</td>
                    <td className="table_4" align="center">65</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center"> <b>Totali </b></td>
                    <td className="table_4" align="center"><b>15.114</b></td>
                    <td className="table_4" align="center"> <b>1.903</b></td>
                    <td className="table_4" align="center"> <b>1.675</b></td>
                    <td className="table_4" align="center"> <b>476</b> </td>
                </tr>


                </table>



                <br />
                <p>
                Sebbene tutti possano aderire, la priorità di LEO sono i 476 milioni di studenti e le loro famiglie in diversi paesi, per i quali la lettura e la scrittura sono attività permanenti associate al processo di formazione accademica, e il rafforzamento delle loro capacità comunicative è la chiave per il successo del processo educativo. Con l'iscrizione annuale di 50 dollari, ogni membro ha accesso alla libreria digitale scaricabile con 15.000 opere in 5 lingue, per un valore di oltre 150.000 dollari.
                </p>
            <br />
            <h2 id="titulo" align="center"> <b>Piano Amici:<br />
            </b> 
            </h2>
            <br />
            <h4 id="titulo" align="center"> <b>Una preziosa opportunità per assicurarsi un reddito, per tutta la vita<br />
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
                <h2 id="titulo" align="center"> <b>CLUBLEO<br />
            </b> 
            </h2>
            <br />
            <h4 id="titulo" align="center"> <b>Siamo una comunità globale di vincitori<br />
            </b> 
            </h4>
          
            <br />
            
           <br />
        </div>
    </div>
    );
}