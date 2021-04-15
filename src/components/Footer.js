import React from 'react'
import styled from 'styled-components';

const FContainer = styled.div`
    text-align: center;
    padding: 5px;   
`;
const Footer = () => {
    return (
        <FContainer>
           <p>Made with {'</>'} by Lucas Maidana</p>
        </FContainer>
    )
}

export default Footer
