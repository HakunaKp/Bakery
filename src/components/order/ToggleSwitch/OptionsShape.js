import React, { Component } from 'react';
import classnames from 'classnames';
import snakeCase from 'lodash/snakeCase';
import Switch from './';
import CircleTierTable from '../tiers/CircleTierTable';
import RectangleTierTable from '../tiers/RectangleTierTable';
import HeartTierTable from '../tiers/HeartTierTable';
import CreateNotification from '../../notifications/Notification';
import GenericSection from '../../sections/GenericSection';
import { Link } from 'react-scroll';

// List of optionals that can be toggled
const ACTIVITIES = [
    'Circle', 'Rectangle', 'Heart'
];

var chosenShape = "";

class OptionsShape extends Component {

    // Initialize app state, all activities are disabled by default
    state = { enabled: true, only: [] }

    toggleActivityEnabled = activity => ({ enabled }) => {

        // Show notification banners
        switch (activity) {

            case 'circle':
                if (enabled) {
                    CreateNotification("Added Shape", "Cake is now circular");
                    chosenShape = "Circle";
                    document.getElementById("shape-selected").style.color = "white";
                }
                break;

            case 'rectangle':
                if (enabled) {
                    CreateNotification("Added Shape", "Cake is now rectangular");
                    chosenShape = "Rectangle";
                    document.getElementById("shape-selected").style.color = "white";
                }
                break;

            case 'heart':
                if (enabled) {
                    CreateNotification("Added Shape", "Cake is now heart-shaped");
                    chosenShape = "Heart";
                    document.getElementById("shape-selected").style.color = "white";
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
                    <Link to="tier" spy={true} smooth={true}>
                        <Switch
                            enabled={enabled}
                            theme="default"
                            className="d-flex"
                            id={activity}
                            onStateChanged={ this.toggleActivityEnabled(key) }
                        />
                        <span id={"span-"+key} className={activityClasses}>{ activity }</span>
                    </Link >
                </div>
            );
        })
    }

    render() {
        const { enabled } = this.state;

        function renderTierTable() {
            if (chosenShape === "Circle") {
                return <CircleTierTable render />;
            } else if (chosenShape === "Rectangle") {
                return <RectangleTierTable render />;
            } else if (chosenShape === "Heart") {
                return <HeartTierTable render />;
            } else {
                return (
                    <div>
                        <h2 class="mt-0 mb-16">Tier</h2>
                        <p class="m-0">Select a shape to display tier options.</p>
                    </div>
                );
            }
        }

        return (
            <div>
                { enabled && (
                    <div className="extras">
                        { this.renderNotifiableActivities() }
                    </div>
                ) }
                <GenericSection topDivider  id="tier" className="center-content" >
                    {renderTierTable()}
                </GenericSection >
            </div>
        );
    }
}

export default OptionsShape;
