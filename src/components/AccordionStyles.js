import styled from 'styled-components';
import {
  Accordion as AccordionComponent,
  AccordionItem as AccordionItemC,
  AccordionItemTitle as AccordionItemTitleC,
  AccordionItemBody as AccordionItemBodyC,
} from 'react-accessible-accordion';
import { Link } from 'gatsby';

import media from '../utils/media';

export const Accordion = styled(AccordionComponent)`
  .accordion__body {
    max-height: 100%;
    transition: max-height 5s ease-in;
  }

  .accordion__body--hidden {
    max-height: 0;
    padding: 0;
    transition: max-height 0.5s ease-out;
  }
`;

export const AccordionItem = styled(AccordionItemC)``;

export const AccordionItemTitle = styled(AccordionItemTitleC)`
  cursor: pointer;
  user-select: none;
  border: 0.1rem solid #f1f1f1;
`;

export const AccordionItemBody = styled(AccordionItemBodyC)`
  padding: 1rem 2rem;
  overflow: hidden;
`;

export const JobPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.phone`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const JobDescription = styled.div`
  flex: 0.9;
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border-bottom: 0.1rem solid #f1f1f1;

  .item-1 {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .item-2 {
    grid-column: 3/4;
    grid-row: 1/2;
  }

  .item-3 {
    grid-column: 5/6;
    grid-row: 1/2;
  }

  .item-4 {
    grid-column: 1/5;
    grid-row: 2/3;
    color: #b3b1b1;
  }
`;

export const JobButton = styled(Link)`
  background-color: #ff4133;
  color: #ffffff;
  text-decoration: none;
  padding: 0.8rem;
  cursor: pointer;
  width: 11rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  border: 0;
  box-shadow: none;
  font-weight: 400;
  text-align: center;
`;
