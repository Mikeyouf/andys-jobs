import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Intro from '../components/Intro';
import Listing from '../components/Listing';
import Logo from '../images/logo-andy-job.svg';
import GraphicsEl from '../images/graphics.svg';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.group;
  const texte = `Change le monde. Un pas après l'autre`;
  return (
    <Layout location={Logo}>
      <SEO title="Andy Jobs" keywords={[`esat`, `entreprise adaptée`, `emploi`, `handicap`]} />
      <Intro 
        ImageSvg={<GraphicsEl/>}
        Logo={<Logo/>}
        Texte={texte}
        TxtBtn="Rejoignez-nous"
      />
      {posts && <Listing data={posts} />}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
      group(field: frontmatter___dept) {
        totalCount
        fieldValue
        edges {
          node {
            id
            excerpt(pruneLength: 160)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM YYYY", locale: "fr")
              title
              published
              location
              type
            }
          }
        }
      }
    }
  }
`;
