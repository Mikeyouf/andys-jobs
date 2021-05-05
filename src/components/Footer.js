import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #000000;
  min-height: 8rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  letter-spacing: 1.3;
`;

const ExternalLink = styled.a`
  color: #ff4133;
  text-decoration: none;
`;

const Footer = () => (
  <Container>
    <p>
      © 2021, Créé par{' '}
      <ExternalLink href="https://www.antoine-mikael.fr">Créagency'M</ExternalLink>
    </p>
  </Container>
);

export default Footer;
