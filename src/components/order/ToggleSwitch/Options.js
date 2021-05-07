import React, { Component } from 'react';
import classnames from 'classnames';
import snakeCase from 'lodash/snakeCase';
import Switch from './';
import CreateNotification from '../../notifications/Notification';

// List of optionals that can be toggled
const ACTIVITIES = [
    'Eggless', 'Fondant', 'Topper', 'Characters',
];

class Options extends Component {

    // Initialize app state, all activities are disabled by default
    state = { enabled: true, only: [] }

    toggleActivityEnabled = activity => ({ enabled }) => {

        // Show notification banners
        switch (activity) {

            case 'eggless':
                if (enabled) {
                    CreateNotification("Added Customization", "Eggless");
                    document.getElementById("extras-selected").style.color = "white";
                }
                break;

            case 'fondant':
                if (enabled) {
                    CreateNotification("Added Customization", "Fondant");
                    document.getElementById("extras-selected").style.color = "white";
                }
                break;

            case 'topper':
                if (enabled) {
                    CreateNotification("Added Customization", "Topper");
                    document.getElementById("extras-selected").style.color = "white";
                }
                break;

            case 'characters':
                if (enabled) {
                    CreateNotification("Added Customization", "Characters");
                    document.getElementById("extras-selected").style.color = "white";
                }
                break;
            default:
                break;
        }

        // Set new state
        let { only } = this.state;
        if (enabled && !only.includes(activity)) {
            only.push(activity);
            return this.setState({ only });
        }
        
        if (!enabled && only.includes(activity)) {
          only = only.filter(item => item !== activity);
          return this.setState({ only });
        }
    }

    renderNotifiableActivities() {
        const { only } = this.state;
    
        return ACTIVITIES.map((activity, index) => {
            const key = snakeCase(activity);
            const enabled = only.includes(key);

            const activityClasses = classnames('extra-choices', enabled ? 'text-custom' : 'text-secondary');
    
            return (
                <div key={index} className="col-5 d-flex mb-3">
                    <Switch theme="default"
                        className="d-flex"
                        enabled={enabled}
                        onStateChanged={ this.toggleActivityEnabled(key) }
                    />
                    <span id={activity} className={activityClasses}>{activity}</span>
                </div>
            );
        })
    }

    render() {
        const { enabled } = this.state;
    
        return (
            <div>
                { enabled && (
                    <div className="extras">
                        { this.renderNotifiableActivities() }
                    </div>
                ) }
            </div>
        );
    }
}

export default Options;
