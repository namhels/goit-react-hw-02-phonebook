import styled from 'styled-components';

const Headline = styled.h1`
  padding-bottom: ${p => p.theme.space[4]}px;
  max-width: 200px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.halloween[6]};
  transition: all 300ms;
  :hover {
    color: ${p => p.theme.colors.halloween[5]};
    letter-spacing: ${p => p.theme.space[2]}px;
  }
`;

export { Headline };
