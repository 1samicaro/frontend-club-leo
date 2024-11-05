import React from "react";
import logoblanco from "../../assets/logoblack.png";
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

                <h3 id="titulo" align="center"> <b>PIANO AMICI:<br />

            <h5>Aiutaci a crescere e ricevi vantaggi per raggiungere la tua eccellenza accademica</h5>

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
            Per compiere la missione di promuovere la lettura tra gli studenti del nostro Paese e del mondo, LEO ha bisogno di
            crescere, consolidando una grande comunità di lavoro focalizzata sull’eccellenza accademica.           </p>
            <p>
            Il Piano Amici è un invito di LEO ai suoi membri a sostenere questa crescita, svolgendo un lavoro molto semplice e facile:
            invitare amici e compagni di studio a unirsi come membri, con un massimo di 20 ospiti.      </p>
            <p>
            Per questo semplice lavoro che tutti possiamo svolgere in breve tempo, LEO riconosce importanti benefici che ci
            permetteranno di migliorare il nostro rendimento accademico e di avere le risorse per finanziare i nostri studi.</p>
           
            
            <br />
            <h3 id="titulo" align="center"> <b>Principi base del Piano Amici LEO
            </b> 
            </h3>
            <br />
            <p>
        

            • La partecipazione è gratuita e volontaria. Un membro non può partecipare e continuare a usufruire dei programmi di
            promozione della lettura, della scrittura e del multilinguismo offerti da ClubLeo. <br />
            • Può essere invitato qualsiasi studente di diverso livello. Non ci sono requisiti o precondizioni diverse.  <br />
            • I partner possono risiedere in qualsiasi paese del mondo.  <br />
            • Il recesso è gratuito, in qualsiasi momento, senza alcun obbligo.
            
            </p>

            <h3 id="titulo" align="center"> <b>Come funziona il Piano Amici LEO</b> </h3>
            <br />
            <h4 id="titulo" align="center"> <b>Il principio è semplice: invitare e ottenere benefici per la nostra attività accademica
            </b> </h4>

            <br />
            <p>
            1. Durante il collegamento, ciascun partner crea il proprio nome utente e password; Il programma crea automaticamente
            "Il mio account" in modo da poter monitorare i tuoi ospiti e i vantaggi in tempo reale. <br />
            2. Il membro invita i suoi amici e colleghi ad entrare in LEO, inviando loro il link ai loro social network, o fornendo loro il
            suo nome utente. <br />
            3. Al momento del collegamento, gli ospiti registrano il proprio nome utente; e il sistema li collega al partner che li invita a
            riconoscere i vantaggi dell"eccellenza accademica.
            Il principio è semplice: invitare e ottenere benefici per la nostra attività accademica. <br />
            4. Il sistema accumula nel tuo account i partner che inviti, fino al completamento dei 20 richiesti. Successivamente la lista
            verrà chiusa e non potrai più invitare altre persone. <br />
            5. Nel primo step di invito, al completamento dei 20 invitati, riceverai una notifica di consegna di un Tablet 10” con la
            biblioteca digitale bibliomobil e le sue 15.000 opere censite. <br />
            6. Nella seconda fase, quando i tuoi 20 ospiti completeranno ciascuno i tuoi 20 ospiti, riceverai un laptop, sul quale
            saranno registrate anche la biblioteca digitale bibliomobil e le sue 15.000 opere. <br />
            7. Infine, nella terza fase, quando i nuovi membri inviteranno i loro 20 amici, riceveranno il bonus educativo per
            l"eccellenza accademica per 2 milioni di dollari al mese, che verrà registrato sul conto finanziario che fa capo a LEO.
            Questo bonus sarà permanente finché manterrai il tuo status di studente.

            </p>
            


            <br />
            <h3 id="titulo" align="center"> <b>La LEO Challenge: ulteriore vantaggio per i soci impegnati<br />
            </b> 
            </h3>
            <br />
            <p>
            Se un membro riuscirà a collegare i suoi 20 ospiti entro il mese successivo al suo ingresso in LEO, riceverà un grande
            stimolo aggiuntivo: il bonus formativo per l"eccellenza accademica sarà di 4 milioni di dollari al mese, sufficienti a
            finanziare gli studi universitari,
            </p>

            <h3 id="titulo" align="center"> <b>Mercato target LEO. Potenziali partner<br />
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
            Bibliomobil, la Biblioteca Digitale LEO offre ai suoi membri più di 15.000 opere in 5 lingue, utilizzate in più di 100 paesi del
            mondo (Allegato), con una popolazione di 1,9 miliardi di persone, di cui 1,5 miliardi di età superiore ai 14 anni con
            capacità di lettura e 380 milioni di studenti delle scuole primarie e secondarie.            </p>
        
            
            <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Idioma</th>
                    <th className="table_3" align="center">No. de obras</th>
                    <th className="table_3" align="center">Hablantes nativos</th>
                    <th className="table_3" align="center">Mayores de 14 años</th>
                    <th className="table_3" align="center">Estudiantes</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Español</td>
                    <td className="table_4" align="center">8.169</td>
                    <td className="table_4" align="center">580</td>
                    <td className="table_4" align="center">464</td>
                    <td className="table_4" align="center">116</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Inglés</td>
                    <td className="table_4" align="center">5.013</td>
                    <td className="table_4" align="center">678</td>
                    <td className="table_4" align="center">542</td>
                    <td className="table_4" align="center">136</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Francés</td>
                    <td className="table_4" align="center">711</td>
                    <td className="table_4" align="center">300</td>
                    <td className="table_4" align="center">240</td>
                    <td className="table_4" align="center">60</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Italiano</td>
                    <td className="table_4" align="center">607</td>
                    <td className="table_4" align="center">85</td>
                    <td className="table_4" align="center">68</td>
                    <td className="table_4" align="center">17</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Portugués</td>
                    <td className="table_4" align="center">614</td>
                    <td className="table_4" align="center">260</td>
                    <td className="table_4" align="center">208</td>
                    <td className="table_4" align="center">52</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center"> <b>Totales </b></td>
                    <td className="table_4" align="center"><b>15.114</b></td>
                    <td className="table_4" align="center"> <b>1.903</b></td>
                    <td className="table_4" align="center"> <b>1.522</b></td>
                    <td className="table_4" align="center"> <b>381</b> </td>
                </tr>


                </table>



                <br />
                <p>Anche se chiunque può aderire come membro, la priorità di LEO sono i 380 milioni di studenti e le loro famiglie in diversi
                paesi, per i quali leggere e scrivere sono attività di routine associate al processo di formazione accademica, e il
                rafforzamento delle loro capacità comunicative è fondamentale per il successo del percorso educativo. processo. Con
                l"abbonamento annuale di 50.000 dollari, ogni membro accede alla biblioteca digitale scaricabile con 15.000 opere in 5
                lingue, per un valore di oltre 150 milioni di CO$, 40.000 dollari.</p>
            <br />
            <h2 id="titulo" align="center"> <b>Piano Amici<br />
            </b> 
            </h2>
            <br />
            <h4 id="titulo" align="center"> <b>Una preziosa opportunità per garantire l"eccellenza nei nostri studi<br />
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
            
           <br />
        </div>
    </div>
    );
}