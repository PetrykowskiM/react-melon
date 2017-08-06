import styled from 'styled-components';

const NavigationBar = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  z-index: 100;
  background: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.fontColor};
`

NavigationBar.defaultProps = {
  theme: {
    primaryColor: 'yellow'
  }
}

export default NavigationBar