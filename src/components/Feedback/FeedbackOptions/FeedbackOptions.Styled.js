import styled from 'styled-components';

const Button = styled.button`
  width: ${p => p.theme.space[7]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.mm};
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: ${p => p.theme.shadows.small};
  cursor: pointer;
  transition: all 500ms;
  :not(:last-child) {
    margin-right: ${p => p.theme.space[5]}px;
  }
  :hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    letter-spacing: ${p => p.theme.space[2]}px;
  }
`;

export { Button };
