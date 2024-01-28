import styled from "styled-components";

export const MiscContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
  }
`;
