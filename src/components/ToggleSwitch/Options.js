import React, { Component } from 'react';
import classnames from 'classnames';
import snakeCase from 'lodash/snakeCase';
import Switch from './';
import { store } from 'react-notifications-component';

// List of optionals that can be toggled
const ACTIVITIES = [
    'Eggless', 'Fondant', 'Topper', 'Characters',
];

// Function to Create notification
function CreateNotification(title_string, message_string) {
    store.addNotification({
        title: title_string,
        message: message_string,
        type: "default",                         // 'default', 'success', 'info', 'warning'
        container: "top-full",                // where to position the notifications
        insert: "top",
        animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        dismiss: {
        duration: 2250,
        showIcon: true
        },
    })
}

class Options extends Component {

    // Initialize app state, all activities are disabled by default
    state = { enabled: true, only: [] }

    toggleActivityEnabled = activity => ({ enabled }) => {

        // Show notification banners
        switch (activity) {

            case 'eggless':
                if (enabled) {
                    CreateNotification("Added Customization", "Cake is now eggless");
                } else {
                    CreateNotification("Removed Customization", "Cake contains eggs");
                }
                break;

            case 'fondant':
                if (enabled) {
                    CreateNotification("Added Customization", "Cake has edible fondant");
                } else {
                    CreateNotification("Removed Customization", "Cake has no edible fondant");
                }
                break;

            case 'topper':
                if (enabled) {
                    CreateNotification("Added Customization", "Cake has topper decorations");
                } else {
                    CreateNotification("Removed Customization", "Cake has no topper decorations");
                }
                break;

            case 'characters':
                if (enabled) {
                    CreateNotification("Added Customization", "Cake has figurine characters");
                } else {
                    CreateNotification("Removed Customization", "Cake has no figurine characters");
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
