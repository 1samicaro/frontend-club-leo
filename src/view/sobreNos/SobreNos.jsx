import React from "react";
import "./SobreNos.css"
import logoblanco from "../../assets/logoblack.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";
import aboutus1 from "../../assets/contenido/aboutus1.jpg";




export default function SobreNos() {
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

                <h3 id="titulo" align="center"> <b>Ler e escrever bem, habilidades fundamentais para ter sucesso<br />
                 na moderna sociedade global da informação e do conhecimento
             </b>
             </h3>

             <br />
             <div>
                 <img
                 className="d-bloco w-100"
                 src={aboutus}
                 largura = "400"
                 altura = "450"
                 alt="..."
                 />
                 </div>

                 <br />

                 <h3 id="titulo" align="center"> <b>Sobre nós<br />
             </b>
             </h3>
             <br />
             <p>
             <b> Existe uma lei universal de desenvolvimento: todo progresso e bem-estar de uma sociedade depende da qualidade da educação que sua população recebe.</b> Portanto, os países mais desenvolvidos têm como prioridade ter sistemas educacionais modernos. , que fortalecem o conhecimento e a competitividade dos seus habitantes. Isto é demonstrado pelos testes PISA, que colocam países de rendimento elevado com os melhores sistemas educativos do mundo: Singapura, Canadá, China, Finlândia, Hong Kong, Estónia, Japão e Coreia do Sul.
             </p>
             <p>
             <b>LEO - Clube Mundial de Leitura</b>, é um projeto que tem como missão <b>promover a leitura, a escrita e o multilinguismo</b>, como hábitos que contribuem para a melhoria educacional e cultural das pessoas e famílias, melhorar a qualidade do sistema educativo e contribuir para a construção de sociedades mais democráticas, pacíficas e progressistas.
             </p>
             <p>
             Para cumprir esta missão, <b>LEO</b> funciona como uma grande rede digital, que integra instituições de ensino e pessoas comprometidas com a construção de um mundo melhor, fortalecendo o pilar fundamental do desenvolvimento: a educação, que depende fundamentalmente da leitura, da forma como adquirir conhecimentos e habilidades em diversas áreas.
             </p>
            
    
             <br />

            

             <h3 id="titulo" align="center"> <b>Objetivos<br />
             </b>
             </h3>
             <br />
             <p>
             • Aumentar o número de pessoas que leem e escrevem como atividades diárias em diferentes ambientes acadêmicos, profissionais e sociais.<br />

             • Aumentar as taxas de leitura, para garantir que as pessoas leiam pelo menos um livro por mês, doze livros por ano, com ênfase nos alunos do ensino primário e secundário. <br />
    
             • Oferecer cenários para que as pessoas escrevam e publiquem suas obras em diversos gêneros, tornando-as conhecidas no país e no mundo, com destaque para a comunidade acadêmica.<br />

             • Promover o multilinguismo e as competências comunicativas das pessoas, para melhorar as suas possibilidades de participação e sucesso na sociedade tecnológica moderna, através da Internet.<br />

             • Fortalecer as famílias e as instituições de ensino como ambientes básicos para incutir nos alunos o hábito da leitura e da escrita.

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
            <h3 id="titulo" align="center"> <b>Associados<br />
             </b>
             </h3>
             <br />
             <p>
             Eles podem ser membros do <b>Clube Mundial de Leitura</b> em diferentes países e cidades: <br />
             • Pessoas (maiores de 14 anos)<br />
             • Instituições educacionais e organizações sociais sem fins lucrativos
             </p>
             <p>
             A adesão anual custa apenas <b>$50.000</b>, o que concede acesso gratuito aos programas educacionais e culturais do Clube (biblioteca digital, publicação de obras, venda de obras, etc.)
             </p>
             <br />

             <h3 id="titulo" align="center"> <b>Programas e Serviços para Associados<br />
             </b>
             </h3>
             <br />
             <p>
             <b>LEO</b> desenvolveu ferramentas pedagógicas com tecnologias web, que permitem promover e difundir de forma eficiente e económica a leitura, a escrita e o multilinguismo como competências-chave para garantir que as pessoas aproveitem as oportunidades de contactos, educação e negócios oferecidas pelo Internet em todo o mundo:
             </p>
            
             <h5 id="titulo" align="center"> <b>1. Promoção da Leitura e do Multilinguismo<br />
             </b>
             </h5>
             <br />

             <p>
             Para facilitar a leitura, os associados contam com 3 instrumentos tecnológicos:
             </p>
             <p>
             <b> a. <a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> portal da web com notícias educacionais e culturais atuais e artigos sobre o gêneros, autores e obras mais importantes, para informar, motivar e orientar a leitura.
             </p>
             <p>
             <b>b. <a href=" https://www.bibliomobil.com/"> https://www.bibliomobil.com/</a></b>: um APP que o usuário pode baixar em seu celular, PC ou tablet , e acesse mais de 15.000 obras em 5 idiomas (espanhol, inglês, francês, português e italiano), para ler online ou baixar para o seu dispositivo, e tê-las disponíveis a qualquer hora e lugar sem conexão com a internet. Mensalmente, 50 novas obras são acrescentadas ao acervo, sendo 600 novos livros por ano. O download do APP é gratuito para membros logados
             </p>
             <p>
             <b>c. BiblioTablet</b>, aplicativo por meio do qual a biblioteca digital e suas 15 mil obras ficam gravadas na memória do celular ou tablet do usuário, para consulta sem conexão com a internet. Ferramenta desenvolvida para atender áreas rurais e municípios remotos com limitações de conectividade web. O download do aplicativo é gratuito para membros logados
             </p>
            
             <p>
             <h5 id="titulo" align="center"> <b>2. Promoção da escrita
             </b>
             </h5>
             Escrever é um dos desafios mais importantes para as pessoas. É um ato criativo e proposital, que permite dar a conhecer ideias e criações e contribuir para a expansão do conhecimento e do património literário universal. Para tanto, o portal institucional <b><a href="http://www.vamosaleer.co/">http://www.vamosaleer.co/</a>&nbsp;</b> permite aos membros crie seu perfil de escritor e publique seus trabalhos para ficarem visíveis para outros membros e pessoas ao redor do mundo. Podem ser obras gratuitas ou comerciais. Este é um serviço gratuito para membros logados.
             </p>
             <p>
             <h5 id="titulo" align="center"> <b>3. Promoção comercial de autores LEO
             </b>
             </h5>
             A LEO está desenvolvendo a loja <b><a href="www.libreria.clubleo.co/">www.libreria.clubleo.co/</a></b>, que permitirá aos associados expor e comercializar as obras de sua autoria entre a comunidade <b>LEO</b> do país e do mundo. Cada sócio é responsável por toda a gestão comercial, de acordo com as normas legais sobre a matéria.
             </p>
             <br />
             <br />
             <h3 id="titulo" align="center"> <b>LEO<br />
             Uma grande comunidade global comprometida com a construção<br />
             de uma sociedade mais educada e culta

             </b>
             </h3>
             <br />
             <h3 id="titulo" align="center"> <b>LEO<br />
             Conectar!! <br />
             Queremos que você seja parceiro do projeto educativo e cultural<br />
             maior do mundo
             </b>
            </h3>
            <br />

                </div>
                
                
        </div>
    );
}
