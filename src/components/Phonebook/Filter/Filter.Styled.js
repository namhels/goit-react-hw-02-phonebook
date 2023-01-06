import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.blues[0]};
`;

const Input = styled.input`
  width: 70%;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.blues[0]};
  outline: none;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: ${p => p.theme.shadows.small};
  transition: all 500ms;
  :focus {
    color: ${p => p.theme.colors.halloween[1]};
  }
  /* &::placeholder {
    color: ${p => p.theme.colors.halloween[1]};
  } */
  /* :focus::placeholder {
    opacity: 0;
  } */
`;

export { Label, Input };
