import styled from 'styled-components';

const Section = styled.div`
  height: 100%;
  background: ${props => props.light ? props.theme.primaryColor : props.theme.secondaryColor};
  padding-left: 25%;
  padding-right: 25%;
  display: flex;

  &:first-child {
    height: calc( 100% - 4rem );
  }
`

Section.defaultProps = {
  theme: {
    primaryColor: "yellow",
    secondaryColor: "red"
  }
}


export default Section