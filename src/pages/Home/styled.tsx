import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 2rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (max-width: 1044px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ThirthSection = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;

export const SecondSection = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1044px) {
    gap: 1rem;
    flex-direction: column-reverse;
  }
`;

export const FirstSection = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;