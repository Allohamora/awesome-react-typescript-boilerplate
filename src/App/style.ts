import styled, { keyframes } from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  padding: 20px;

  overflow: hidden;

  font-size: ${(p) => p.theme.pxToRem(16)};

  background-color: ${(p) => p.theme.palette.blue};
`;

export const Title = styled.h1`
  padding-bottom: 40px;

  color: ${(p) => p.theme.palette.white};
  text-align: center;
`;

const logoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(365deg);
  }
`;

export const Logo = styled.img`
  display: block;
  width: 300px;
  height: 300px;

  animation: ${logoAnimation} 10s linear infinite;
`;
