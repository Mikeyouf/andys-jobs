import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Intro from '../components/Intro';
import Logo from '../images/logo-andy-job.svg';
import GraphicsEl from '../images/Humaaans.svg';

const Title = styled.h1 `
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2;
  font-size: 2.8rem;
`;

const About = ({ data }) => {
    const texte = `
        Nous sommes un site de petites annonces de job pour les personnes en situation de handicap désirant travailler en Esat ou en entreprises adaptées.
        Andy Job a été créé dans le but d'aider les personnes possédant une orientation de la MDPH ( Maison départementale des personnes handicapées) dans leurs recherches d'emploi.
        Conscient qu'il peut parfois être difficile de connaitre les opportunités de travail dans le secteur du handicap, cette plateforme vise à mettre en relation les
        Esat (établissement et service d'aide par le travail), les EA (entreprise adaptée) et les personnes ayant une reconnaissance de la MDPH.
        `
    return (
        <Layout location={Logo}>
            <SEO title="A propos" keywords={[`esat`, `entreprise adaptée`, `emploi`, `handicap`]} />
            <Title>Qui sommes-nous?</Title>
                <Intro 
                    ImageSvg={<GraphicsEl/>}
                    Texte={texte}
                />
        </Layout>
    );
};

export default About;