import React from 'react';
import styled from 'styled-components';

const Modal1 = ({children, estado, cambiarEstado}) => {
    return (

        <>
        { estado &&
        <Overlay>
            <ContenedorModal>
                <EncabezadoModal>
                <h2>ClubLeo</h2>
                </EncabezadoModal>

                <BotonCerrar
                onClick={()=> cambiarEstado(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                </BotonCerrar>

                {children}
            </ContenedorModal>
        </Overlay>
        }
        </>
    )
}

export default Modal1;


const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0.4);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    bordes-radius: 5px;
    box-shadow: rgba(100,100,101, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    marfin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
    h2{
        font-weight: 500;
        font-size: 24px;
        color: rgb(0, 100, 162);
    }
`;


const BotonCerrar = styled.div`
    position: absolute;
    top: 15px;
    right: 20px;
    weight: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;
    &:hover {
        background: f2f2f2;
    }
`;