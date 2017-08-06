import styled from 'styled-components';

const Title = styled.span`
  line-height: 4rem;
  color: ${props => props.theme.primaryColor};
  padding: 0 1em;
  font-weight: 400;
  font-size: 1.5rem;
`

Title.defaultProps = {
  theme: {
    primaryColor: "yellow",
  }
}


export default Title