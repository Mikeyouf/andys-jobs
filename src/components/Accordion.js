import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
  JobPost,
  JobDescription,
  JobButton,
} from './AccordionStyles';

const Title = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeptTitle = styled.h3`
  ${Title}
  text-transform: uppercase;
  padding: 1rem 2rem;
  font-weight: 500;
`;

const JobTitle = styled.h4`
  ${Title}
  text-transform: capitalize;
  font-weight: 500;
  /* justify-self: flex-start; */
`;

const OpenPosts = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
`;

const Accordion = ({ data }) =>
  console.log(data) || (
    <AccordionComponent id="job">
      {data.map(item => (
        <AccordionItem key={item.fieldValue}>
          <AccordionItemTitle>
            <DeptTitle>
              <span>{item.fieldValue}</span>
              <OpenPosts>
                <span>{item.totalCount}&nbsp;</span>
                <span>POSTE{item.totalCount > 1 && 'S'} LIBRE{item.totalCount > 1 && 'S'} &gt;</span>
              </OpenPosts>
            </DeptTitle>
          </AccordionItemTitle>
          <AccordionItemBody>
            {item.edges.map(({ node }) => (
              <JobPost key={node.frontmatter.title}>
                <JobDescription>
                    <JobTitle className="item-1">{node.frontmatter.title}</JobTitle>
                    <JobTitle className="item-2">{node.frontmatter.location}</JobTitle>
                    <JobTitle className="item-3">{node.frontmatter.type}</JobTitle>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} className="item-4"/>
                </JobDescription>
                <JobButton to={node.fields.slug}>Ouvrir</JobButton>
              </JobPost>
            ))}
          </AccordionItemBody>
        </AccordionItem>
      ))}
    </AccordionComponent>
  );

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    })
  ),
};

export default Accordion;
