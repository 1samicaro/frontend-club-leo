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

                <h3 id="titulo" align="center"> <b>PLANO LEO FRIENDS:<br />

            <h5>Ajude-nos a crescer e receber renda para o resto da vida
 
 </h5>

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
                <p> <b>Plano dos Amigos <br />
                Juntamo-nos <br />
                para progredirmos juntos <br />
                em todo o mundo </b>
                </p>
              
                <br />
                </div>

                <br />

            <p>
            Para cumprir a missão de promover a leitura e a escrita no mundo, o LEO precisa crescer, consolidando uma grande comunidade focada em melhorar seus níveis de educação e cultura e fortalecer suas habilidades de comunicação.

            </p>
            <p>
            O Plano de Amigos é um convite da LEO aos seus membros para apoiar esse crescimento, realizando um trabalho muito simples, fácil e rápido: Convide familiares, amigos e colegas e trabalhe para se juntar como Membros LEO, com um máximo de 20 convidados. Uma vez que este número é concluído, ninguém mais pode ser convidado.
            </p>
            <p>
            Por este trabalho simples que todos podemos fazer, receberemos rendimentos permanentes (vitalícios), que estarão imediatamente disponíveis na nossa conta.
            </p>
           
            
            <br />
            <h3 id="titulo" align="center"> <b>Princípios básicos do Plano Amigos
            </b> 
            </h3>
            <br />
            <p>
            • A participação é gratuita e voluntária. Um membro pode optar por não participar e ainda aproveitar os programas de promoção de leitura, escrita e multilinguismo oferecidos pelo ClubLeo. <br />
            • Qualquer pessoa pode ser convidada. Não há requisitos ou pré-condições. Os menores devem ter a autorização e tutela dos pais. <br />
            • As pessoas podem ser convidadas em qualquer país do mundo. <br />
            • A retirada é gratuita, a qualquer momento, sem quaisquer requisitos.

            </p>

            <h3 id="titulo" align="center"> <b>Como funciona o Plano de Amigos LEO</b> </h3>
            <br />
            <h4 id="titulo" align="center"> <b>O princípio é simples: convide e ganhe uma renda crescente para o resto da vida
            </b> </h4>

            <br />
            <p>
            1. Quando nos juntamos como parceiros, criamos nosso nome de usuário e senha; o programa cria automaticamente "Minha conta" para rastrearmos nossos hóspedes e renda em tempo real. <br />
            2. Convidamos nossos conhecidos a entrar como membros LEO, fornecendo-lhes nosso nome de usuário ou enviando-lhes para suas redes sociais o link pessoal que o sistema gera para nós. <br />
            3. Ao entrar, os convidados registram nosso nome de usuário; e o sistema os acumula em nossa conta, até completarmos os 20 solicitados. Depois disso, a lista fecha e não poderemos continuar convidando mais pessoas. <br />
            4. Na primeira etapa, após a conclusão dos 20 convidados, receberemos um depósito de US$ 100 em nossa conta. <br />
            5. Na segunda etapa, quando nossos 20 parceiros completarem seus 20 convidados, receberemos uma renda de US$ 3.200. <br />
            6. Na terceira etapa, quando os novos membros convidarem seus 20 amigos, receberemos US$ 96.000, ou seja, uma média mensal de US$ 8.275.

            </p>
            <p>
            E o mais importante, a adesão ao CLUBLEO é renovada anualmente, pelo que este rendimento será permanente, vitalício. Mas só teremos que convidar 20 membros. Depois de concluí-los, não devemos fazer mais nada
            </p>
            


            <br />
            <h3 id="titulo" align="center"> <b>O Desafio de Parceiros LEO:<br />
            Obtenha nossos 20 parceiros em 1 mês
            </b> 
            </h3>
            <br />
            <p>
            Se todos os membros conseguirem vincular nossos 20 hóspedes no mês seguinte à entrada no LEO, a partir do quarto mês poderemos garantir uma renda mensal média significativa de US$ 8.275, que será permanente graças à renovação anual da associação ao CLUBLEO. É simples e todos nós podemos fazer isso com muita facilidade: aproveitando nossos conhecidos e contatos nas redes sociais.
            </p>

            <h3 id="titulo" align="center"> <b>Mercado-alvo LEO. Parceiros em potencial
            <br />
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
            O CLUBLEO oferece em sua Biblioteca Digital mais de 15.000 obras em 5 idiomas, utilizadas em mais de 100 países ao redor do mundo (Anexo), com uma população de 1.900 milhões de pessoas, com 1.675 milhões com mais de 8 anos de idade com capacidade de leitura e 476 milhões de alunos.
            </p>
        
            
            <table className="table_1" align="center"> 
                <tr className="table_2" align="center" >
                    <th className="table_3" align="center">Linguagem</th>
                    <th className="table_3" align="center">Nº de ClubLeo Works</th>
                    <th className="table_3" align="center">Falantes nativos</th>
                    <th className="table_3" align="center">Mais de 8 anos com boné. Leitor</th>
                    <th className="table_3" align="center">Prim./Sec. e Alunos superiores</th>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Espanhol</td>
                    <td className="table_4" align="center">8.169</td>
                    <td className="table_4" align="center">580</td>
                    <td className="table_4" align="center">510</td>
                    <td className="table_4" align="center">145</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Inglês</td>
                    <td className="table_4" align="center">5.013</td>
                    <td className="table_4" align="center">678</td>
                    <td className="table_4" align="center">597</td>
                    <td className="table_4" align="center">170</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center">Francês</td>
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
                    <td className="table_4" align="center">Português</td>
                    <td className="table_4" align="center">614</td>
                    <td className="table_4" align="center">260</td>
                    <td className="table_4" align="center">229</td>
                    <td className="table_4" align="center">65</td>
                </tr>
                <tr className="table_2">
                    <td className="table_4" align="center"> <b>Totais </b></td>
                    <td className="table_4" align="center"><b>15.114</b></td>
                    <td className="table_4" align="center"> <b>1.903</b></td>
                    <td className="table_4" align="center"> <b>1.675</b></td>
                    <td className="table_4" align="center"> <b>476</b> </td>
                </tr>


                </table>



                <br />
                <p>
                Embora todos possam participar, a LEO tem como prioridade os 476 milhões de estudantes e suas famílias em diferentes países, para os quais a leitura e a escrita são atividades permanentes associadas ao processo de formação acadêmica, e o fortalecimento de suas habilidades de comunicação é fundamental para o sucesso do processo educacional. Com a associação anual de US$ 50, cada membro tem acesso à biblioteca digital para download com 15.000 obras em 5 idiomas, avaliadas em mais de US$ 150.000.
                </p>
            <br />
            <h2 id="titulo" align="center"> <b>Plano de amigos:<br />
            </b> 
            </h2>
            <br />
            <h4 id="titulo" align="center"> <b>Uma oportunidade valiosa para garantir renda, para toda a vida<br />
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
                Somos uma comunidade global de vencedores
            </b> 
            </h4>
            
            
           <br />
        </div>
    </div>
    );
}