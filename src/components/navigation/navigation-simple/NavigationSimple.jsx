import React from 'react'
import { PropTypes } from "prop-types"

// Styled Components
import NavigationBar from './NavigationBar'
import NavigationItem from './NavigationItem'
import NavigationSegment from './NavigationSegment'
import Title from './Title'
import Logo from './Logo'

export default class NavigationSimple extends React.Component {

onNavItemClick = (navigationTarget) => {
  console.log("On click", navigationTarget)
}

  render() {
    return (
      <NavigationBar>
        <NavigationSegment>
          <Logo src={this.props.logo}/>
          <Title>{this.props.title}</Title>
        </NavigationSegment>
        <NavigationSegment right>
          {
            this.props.items.map( navigationTarget => 
              <NavigationItem 
                key={navigationTarget}
                onClick={() => this.onNavItemClick(navigationTarget)}>
                {navigationTarget}
              </NavigationItem>
            )
          }
        </NavigationSegment>
      </NavigationBar>
    )
  }
}

NavigationSimple.PropTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
}

NavigationSimple.defaultProps = {
  items: []
}

export const melonTemplate = [
  { heading: 'title' },
  { paragraph: 'logo' },
  { list: 'items' }
]