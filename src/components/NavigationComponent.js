import React, { Component } from 'react';

function NavigationComponent({items}) {
    return (
      <ul>
          {items.map(({ label, name, ...rest }) => (
          <li key={name} button {...rest}>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    )
  }
  
  export default NavigationComponent
  
