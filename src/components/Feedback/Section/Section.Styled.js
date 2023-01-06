import styled from 'styled-components';

const SectionTitle = styled.h1`
  padding-bottom: ${p => p.theme.space[5]}px;
  max-width: 435px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.textSecondary};
  transition: all 300ms;
  :hover {
    color: ${p => p.theme.colors.textPrimary};

    letter-spacing: ${p => p.theme.space[1]}px;
  }
`;

export { SectionTitle };
