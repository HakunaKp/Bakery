import CreateNotification from '../../notifications/Notification';

export default function PickTier(e) {

    // Clear all buttons
    var elements = document.getElementsByClassName("tier-button");
    for (var i = 0; i < elements.length; i++) {
      elements[i].checked = false;
    }
    
    // Recheck chosen button
    e.target.checked = true;
  
    // Saved Tier Notification
    CreateNotification("Saved Tier", "Circle - " + e.target.id);

  //  document.getElementById("pick-extras").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}