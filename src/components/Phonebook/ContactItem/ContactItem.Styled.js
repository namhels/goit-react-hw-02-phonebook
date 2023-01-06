import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.halloween[7]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.small};
  /* transition: all 500ms;
  :hover {
    color: ${p => p.theme.colors.halloween[3]};
    background-color: ${p => p.theme.colors.halloween[4]};
    letter-spacing: ${p => p.theme.space[1]}px;
  } */
`;

export { Item };
