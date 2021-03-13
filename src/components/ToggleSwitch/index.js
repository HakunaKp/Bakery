import classnames from 'classnames';
import isString from 'lodash/isString';
import React, { Component } from 'react';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';
import './index.scss';

class ToggleSwitch extends Component {

    state = { enabled: this.enabledFromProps() }
  
    isEnabled = () => this.state.enabled
  
    enabledFromProps() {
      let { enabled } = this.props;
  
      // If enabled is a function, invoke the function
      enabled = isFunction(enabled) ? enabled() : enabled;
  
      // Return enabled if it is a boolean, otherwise false
      return isBoolean(enabled) && enabled;
    }

    toggleSwitch = evt => {
        evt.persist();
        evt.preventDefault();
    
        const { onClick, onStateChanged } = this.props;
    
        this.setState({ enabled: !this.state.enabled }, () => {
          const state = this.state;

          // Augument the event object with SWITCH_STATE
          const switchEvent = Object.assign(evt, { SWITCH_STATE: state });

          const circle = Object.assign(document.getElementById("Circle"));
          const rectangle = Object.assign(document.getElementById("Rectangle"));
          const heart = Object.assign(document.getElementById("Heart"));

          const circleText = Object.assign(document.getElementById("span-circle"));
          const rectangleText = Object.assign(document.getElementById("span-rectangle"));
          const heartText = Object.assign(document.getElementById("span-heart"));

          // Deselect other toggles for shape options
          if (switchEvent.target.id === "Circle" && switchEvent.target.className === "switch-toggle switch-toggle--on"){
            rectangle.className = "switch-toggle switch-toggle--off";
            heart.className = "switch-toggle switch-toggle--off";
            rectangleText.className = "extra-choices text-secondary";
            heartText.className = "extra-choices text-secondary";
          }

          // Deselect other toggles for shape options
          if (switchEvent.target.id === "Rectangle" && switchEvent.target.className === "switch-toggle switch-toggle--on"){
            circle.className = "switch-toggle switch-toggle--off";
            heart.className = "switch-toggle switch-toggle--off";
            circleText.className = "extra-choices text-secondary";
            heartText.className = "extra-choices text-secondary";
          }

          // Deselect other toggles for shape options
          if (switchEvent.target.id === "Heart" && switchEvent.target.className === "switch-toggle switch-toggle--on"){
            rectangle.className = "switch-toggle switch-toggle--off";
            circle.className = "switch-toggle switch-toggle--off";
            rectangleText.className = "extra-choices text-secondary";
            circleText.className = "extra-choices text-secondary";
          }
          
          // Execute the callback functions
          isFunction(onClick) && onClick(switchEvent);
          isFunction(onStateChanged) && onStateChanged(state);
        });
    }

    render() {
        const { enabled } = this.state;
    
        // Isolate special props and store the remaining as restProps
        const { enabled: _enabled, theme, onClick, className, id, onStateChanged, ...restProps } = this.props;
    
        // Use default as a fallback theme if valid theme is not passed
        const switchTheme = (theme && isString(theme)) ? theme : 'default';
    
        const switchClasses = classnames(
          `switch switch--${switchTheme}`,
          className
        )
    
        const togglerClasses = classnames(
          'switch-toggle',
          `switch-toggle--${enabled ? 'on' : 'off'}`
        )
    
        return (
          <div className={switchClasses} onClick={this.toggleSwitch} {...restProps}>
            <div className={togglerClasses} id={id}></div>
          </div>
        )
    }
}

export default ToggleSwitch;
