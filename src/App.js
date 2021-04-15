import { Fragment } from "react";
import "./assets/styles/reset.css";
import styled from "styled-components";
import Footer from "./components/Footer";
import Box from './components/Box';

const Container = styled.div`
  background-color: #f6de61;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica';
  overflow: hidden;
`;
function App() {
  return (
    <Fragment>
      <Container>
        <Box/>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
