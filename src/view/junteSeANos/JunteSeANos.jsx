import React from "react";
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";
import "./JunteSeANos.css"

import afiliados1 from "../../assets/contenido/afiliados1.jpg";
import afiliados2 from "../../assets/contenido/afiliados2.jpg";
import afiliados3 from "../../assets/contenido/afiliados3.jpg";

import tabla from "../../assets/contenido/tabla.png";
import tabla1 from "../../assets/contenido/tabla1.png";




export default function JunteSeANos() {
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

                <h3 id="titulo" align="center"> <b>PLANO DE AMIGOS:<br />

            <h5>Ajude-nos a crescer e receba benefícios para alcançar sua excelência acadêmica</h5>

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
            Para cumprir a missão de promover a leitura entre os estudantes do nosso país e do mundo, a LEO precisa crescer,
            consolidando uma grande comunidade de trabalho focada na excelência acadêmica
            </p>
            <p>
            O Plano Amigos é um convite da LEO aos seus membros para apoiarem este crescimento, fazendo um trabalho muito
            simples e fácil: Convidar amigos e colegas estudantes para aderirem como membros, com um máximo de 20 convidados.
            </p>
            <p>
            Por este trabalho simples que todos podemos realizar em pouco tempo, a LEO reconhece importantes benefícios que nos
            permitirão melhorar o nosso desempenho académico e ter recursos para financiar os nossos estudos.
            </p>
           
            
            <br />
            <h3 id="titulo" align="center"> <b>Princípios básicos do Plano Amigos Leo
            </b> 
            </h3>
            <br />
            <p>
            • A participação é gratuita e voluntária. O associado não poderá participar e continuar aproveitando os programas de
            promoção da leitura, escrita e multilinguismo oferecidos pelo ClubLeo. <br />
            • Qualquer aluno de diferentes níveis poderá ser convidado. Não existem requisitos ou pré-condições diferentes. <br />
            • Os parceiros podem residir em qualquer país do mundo. <br />
            • A retirada é gratuita, a qualquer momento, sem quaisquer requisitos.
            </p>

            <h3 id="titulo" align="center"> <b>Como funciona o Plano Amigos LEO</b> </h3>
            <br />
            <h4 id="titulo" align="center"> <b>O princípio é simples: convide e obtenha benefícios para a nossa atividade acadêmica
            </b> </h4>

            <br />
            <p>
            1. Ao vincular, cada parceiro cria seu nome de usuário e senha; O programa cria automaticamente “Minha Conta” para
            que você possa acompanhar seus convidados e benefícios em tempo real. <br />
            2. O membro convida seus amigos e colegas para entrar no LEO, enviando-lhes o link de suas redes sociais, ou
            fornecendo-lhes seu nome de usuário <br />
            3. Ao vincular, o convidado cadastra seu nome de usuário; e o sistema os conecta ao parceiro que os convida a
            reconhecer os benefícios da excelência acadêmica. <br />

            4. O sistema acumula na sua conta os parceiros que você convida, até completar os 20 solicitados. Depois, a lista é
           fechada e você não poderá mais convidar mais pessoas. <br />
           5. Na primeira etapa do convite, ao completar os 20 convidados, você receberá a notificação de entrega de um Tablet de
           10” com a biblioteca digital bibliomobil e suas 15.000 obras gravadas. <br />
           6. Na segunda etapa, quando seus 20 convidados completarem cada um seus 20 convidados, você receberá um laptop,
           que também terá a biblioteca digital bibliomobil e suas 15 mil obras registradas. <br />
           7. Finalmente, na terceira etapa, quando os novos membros convidarem seus 20 amigos, eles receberão o bônus
           educacional por excelência acadêmica no valor de US$ 2 milhões por mês, que será registrado na conta financeira
           reportada ao LEO. Este bônus será permanente enquanto você mantiver seu status de estudante.

            </p>
            


            <br />
            <h3 id="titulo" align="center"> <b>O Desafio LEO: benefício adicional para membros comprometidos<br />
            </b> 
            </h3>
            <br />
            <p>
            Se um membro conseguir vincular seus 20 convidados no mês seguinte à sua entrada no LEO, receberá um grande
            estímulo adicional: o bônus educacional pela excelência acadêmica será de US$ 4 milhões por mês, suficiente para
            financiar até estudos universitários.            </p>

            <h3 id="titulo" align="center"> <b>Mercado-alvo LEO. Parceiros potenciais<br />
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
            Bibliomobil, a Biblioteca Digital LEO oferece aos seus membros mais de 15.000 obras em 5 idiomas, utilizadas em mais
            de 100 países do mundo (Anexo), com uma população de 1,9 bilhão de pessoas, sendo 1,5 bilhão maiores de 14 anos
            com capacidade de leitura e 380 milhões de estudantes primários e secundários.
            </p>
        
            
            <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Linguagem</th>
                    <th className="table_3" align="center">Número de obras</th>
                    <th className="table_3" align="center">Falantes nativos</th>
                    <th className="table_3" align="center">Mais de 14 anos</th>
                    <th className="table_3" align="center">Alunos</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Espanhol</td>
                    <td className="table_4" align="center">8.169</td>
                    <td className="table_4" align="center">580</td>
                    <td className="table_4" align="center">464</td>
                    <td className="table_4" align="center">116</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Inglês</td>
                    <td className="table_4" align="center">5.013</td>
                    <td className="table_4" align="center">678</td>
                    <td className="table_4" align="center">542</td>
                    <td className="table_4" align="center">136</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Francês</td>
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
                    <td className="table_4" align="center">Português</td>
                    <td className="table_4" align="center">614</td>
                    <td className="table_4" align="center">260</td>
                    <td className="table_4" align="center">208</td>
                    <td className="table_4" align="center">52</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center"> <b>Totais </b></td>
                    <td className="table_4" align="center"><b>15.114</b></td>
                    <td className="table_4" align="center"> <b>1.903</b></td>
                    <td className="table_4" align="center"> <b>1.522</b></td>
                    <td className="table_4" align="center"> <b>381</b> </td>
                </tr>


                </table>



                <br />
                <p>
                Embora qualquer pessoa possa aderir como membro, a prioridade da LEO são os 380 milhões de estudantes e suas
                famílias em diferentes países, para quem a leitura e a escrita são atividades rotineiras associadas ao processo de
                formação académica, e o fortalecimento das suas capacidades comunicativas é fundamental para o sucesso do processo
                educativo. processo. Com a adesão anual de US$ 50.000, cada membro acessa a biblioteca digital para download com
                15.000 obras em 5 idiomas, avaliadas em mais de CO$ 150 milhões, US$ 40.000.
                </p>
            <br />
            <h2 id="titulo" align="center"> <b>Plano de amigos<br />
            </b> 
            </h2>
            <br />
            <h4 id="titulo" align="center"> <b>Uma valiosa oportunidade para garantir a excelência em nossos estudos<br />
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