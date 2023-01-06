import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 435px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.halloween[7]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: ${p => p.theme.shadows.small};
  /* transition: all 500ms;
  :hover {
    color: ${p => p.theme.colors.halloween[3]};
    background-color: ${p => p.theme.colors.halloween[4]};
    letter-spacing: ${p => p.theme.space[1]}px;
  } */
`;

export { List };
