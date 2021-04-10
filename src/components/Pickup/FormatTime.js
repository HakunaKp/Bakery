// remove all whitespace and : characters from time before routing
export default function formatTime(time) {
    var formattedTime = "";
    for (let i in time) {
      if (time[i] !== ":" && time[i] !== " ") formattedTime += time[i];
    }
    return formattedTime;
}