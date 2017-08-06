import styled from 'styled-components';

const NavigationItem = styled.span`
  line-height: 4rem;
  color: ${props => props.theme.fontColor};
  padding: 0 1em;

  &:hover {
    color: ${props => props.theme.primaryColor};
    cursor: pointer;
  } 
`

NavigationItem.defaultProps = {
  theme: {
    primaryColor: "yellow",
    secondaryColor: "red"
  }
}


export default NavigationItem