import React from 'react'
import { PropTypes } from "prop-types"

// Styled Components
import Section from '../Section'
import SectionContent from '../SectionContent'
import Title from './Title'
import Subtitle from './Subtitle'
import StockImage from './StockImage'

export default class Slogan extends React.Component {

onNavItemClick = (navigationTarget) => {
  console.log("On click", navigationTarget)
}

  render() {
    return (
      <Section light={this.props.light}>
        <SectionContent>
          <StockImage src={this.props.image}/>
        </SectionContent>
        <SectionContent>
          <Title>{this.props.title}</Title>
          <Subtitle>{this.props.subtitle}</Subtitle>
        </SectionContent>
      </Section>
    )
  }
}

Slogan.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  light: PropTypes.bool,
  background: PropTypes.string
}

Slogan.defaultProps = {}

export const melonTemplateSlogan = [
  { heading: 'title' },
  { heading: 'subtitle' },
  { paragraph: 'image' },
  { paragraph: 'light' },
]