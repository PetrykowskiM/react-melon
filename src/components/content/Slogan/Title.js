import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.fontColor};
`

Title.defaultProps = {
  theme: {
    primaryColor: "yellow",
  }
}


export default Title