import styled from 'styled-components';

const NavigationSegment = styled.div`
  flex: 1;
  padding-right: ${props => props.right ? '25%' : ''};
  padding-left: ${props => props.right ? '' : '25%'};
  display: flex;
  justify-content: ${props => props.right ? 'flex-end' : 'flex-start'}
`

NavigationSegment.defaultProps = {
}


export default NavigationSegment