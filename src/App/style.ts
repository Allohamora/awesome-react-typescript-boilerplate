import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(p) => p.theme.palette.red};
  font-size: ${(p) => p.theme.pxToRem(16)};
`;
