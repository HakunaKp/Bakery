import CreateNotification from '../../notifications/Notification';
import printTier from '../../cart/PrintTier';

export default function PickTier(e) {

    // Clear all buttons
    var elements = document.getElementsByClassName("tier-button");
    for (var i = 0; i < elements.length; i++) {
      elements[i].checked = false;
    }
    
    // Recheck chosen button
    e.target.checked = true;
  
    // Saved Tier Notification
    CreateNotification("Saved Tier", printTier(e.target.id));

    // Indicate that tier is selected
    document.getElementById("tier-selected").style.color = "white";

  }