import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 2rem 0 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 100%;

  @media (max-width: 1044px) {
    flex-direction: column;
  }
`;
