import styled from 'styled-components';

const StatisticsItem = styled.p`
  width: 435px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.textPrimary};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.small};

  transition: all 500ms;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  };
  :hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.textStatistics};
    letter-spacing: ${p => p.theme.space[2]}px;
  };
`;

export { StatisticsItem };
