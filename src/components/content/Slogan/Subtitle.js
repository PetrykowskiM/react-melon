import styled from 'styled-components';

const Subtitle = styled.h2`
  margin-top: .5rem;
  color: ${props => props.theme.secondaryColor};
`

Subtitle.defaultProps = {
  theme: {
    primaryColor: "yellow",
  }
}


export default Subtitle