import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

// Assets
import logo from './assets/Melon.svg';
import './App.css';

// Template Components
import NavigationSimple, { melonTemplate } from './components/navigation/navigation-simple/NavigationSimple'
import Slogan,  { melonTemplateSlogan } from './components/content/Slogan/Slogan'

import { analyseMarkdown, getFile } from './network.js'
const markdownTemplate = require('./Definition.md')

var AllComponents = {
  NavigationSimple,
  Slogan
}

var templates = {
  NavigationSimple: melonTemplate,
  Slogan: melonTemplateSlogan
}

let template = {
  "NavigationSimple": [
    {
      "hLevel": 2,
      "type": "heading",
      "content": "Melon",
      "raw": "Melon"
    },
    {
      "type": "paragraph",
      "content": "<p>logo</p>\n",
      "raw": logo
    },
    {
      "type": "bullet_list",
      "content": [
        {
          "type": "paragraph",
          "content": "<p>Rohkost?</p>\n",
          "raw": "Rohkost?"
        },
        {
          "type": "paragraph",
          "content": "<p>Features</p>\n",
          "raw": "Features"
        }
      ]
    }
  ],
  "Slogan": [
    {
      "hLevel": 2,
      "type": "heading",
      "content": "That is supposed to be the second section",
      "raw": "That is supposed to be the second section"
    },
    {
      "type": "heading",
      "hLevel": 2,
      "content": "Hell yeah!!",
      "raw": "Hell yeah!!"
    },
    {
      "type": "paragraph",
      "content": "<p>logo</p>\n",
      "raw": logo
    },
    {
      "type": "paragraph",
      "content": "<p>true</p>\n",
      "raw": true
    }
  ]
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        primaryColor: "#EC5953",
        secondaryColor: "#5d5d5d",
        tertiaryColor: "red",
        fontColor: "white"
      }
    }
    console.log(markdownTemplate)
    getFile(markdownTemplate)
      .then(analyseMarkdown)
      .then((template) => {
        this.setState({
          template: template
        })
      })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          {
            this.state.template
            ?  this.state.template.map( (component) => {
                let props = mapComponent( component.content, templates[component.type] )
                var comp = AllComponents[component.type]
                console.log(props)
                return React.createElement(comp, Object.assign({}, props, { component }));
              })
            : null
          }

        </div>
      </ThemeProvider>
    );
  }
}

export default App;

function mapComponent(componentDefinition, template) {
  var props = {}
  var usedTemplates = []
  for(var i=0; i<componentDefinition.length; i++){

    for(var j=0; j<template.length; j++){
      if(componentDefinition[i].type in template[j] && usedTemplates.indexOf(j) == -1){
        console.log(componentDefinition[i])
        if(componentDefinition[i].type === "list"){
          componentDefinition[i].content = componentDefinition[i].content.map( el => el.content )
        }
        props[ template[j][componentDefinition[i].type] ] = componentDefinition[i].content
        usedTemplates.push(j)
        // When match was found continue with next componentDefinition Object
        break;
      }
    }

  }
  return props
}
