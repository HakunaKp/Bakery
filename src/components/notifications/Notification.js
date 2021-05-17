import { store } from 'react-notifications-component';
import 'animate.css';

import isMobile from '../Mobile.js'

// Function to Create notification
export default function CreateNotification(title_string, message_string) {
    if (!isMobile()) {
        store.addNotification({
            title: title_string,
            message: message_string,
            type: "default",                         // 'default', 'success', 'info', 'warning'
            container: "top-left",                // where to position the notifications
            insert: "top",
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
            duration: 2250,
            showIcon: true
            },
        })
    }
}