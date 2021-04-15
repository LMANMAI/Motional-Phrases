import React, { useState } from "react";
import styled from "styled-components";
import {CopyToClipboard} from 'react-copy-to-clipboard';
const BoxContainer = styled.div`
  width: 350px;
  height: 200px;
  //border: 1px solid red;
  border-radius: 35px;
  background-color: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    width: 35vw;
    height: 35vh;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;
const Header = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 5px;
`;
const Titulo = styled.h1`
  text-align: center;
`;
const Input = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  padding-left: 15px;
  width: 80%;
  border-radius: 25px;
  background-color: #f2f2f2;
`;
const Boton = styled.button`
  border: none;
  outline: none;
  background-color: #97cdac;
  padding: 7px 13px;
  margin: 10px 0;
  color: white;
  border-radius: 25px;
  cursor: pointer;
`;
const Mensaje = styled.div`
  position: absolute;
  bottom: 6%;
  padding: 8px;
  border-radius: 15px;
  background-color: #e2e2e2;
`;
const MensajeContainer = styled.div`
  margin: 10px;
`;
const MensajeSpan = styled.input`
  border: none;
  background-color: #f2f2f2;
  backdrop-filter: opacity(20%);
  padding: 5px;
  border-radius: 15px;
`;
const Box = () => {
  const [mensaje, setMensaje] = useState({
    frase: ''
  });
  const [copy, setCopy] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  };
 const { frase } = mensaje;
  return (
    <>
      <MensajeContainer>
      {frase=== '' ?null  :<MensajeSpan type="text" value={`✨${frase}✨`} disabled />}    
      </MensajeContainer>
      <BoxContainer>
        <Form>
          <Header>
            ✨
            <Titulo>
              Convirtiendo frases negativas en frases motivacionales
            </Titulo>
            ✨
          </Header>
          <Input type="text" onChange={handleChange} name="frase" value={frase}/>
          <CopyToClipboard text={`✨${frase}✨`}   onCopy={() =>setCopy(true)} >
             <Boton type="submit">Generar</Boton>
          </CopyToClipboard>  
         
           {copy ?(  <Mensaje><p>Copiado al portapapeles ✅</p>  </Mensaje>) :null}
        
        </Form>
      </BoxContainer>
    </>
  );
};

export default Box;
