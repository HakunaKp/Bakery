// remove all whitespace and : characters from time before routing
export default function formatTime(time) {
    var hours = time.substring(0, 2);
    var minutes = time.substring(2, 4);
    var meridium = time.substring(4, 6);

    var formattedTime = hours + ":" + minutes + " " + meridium ;
    return formattedTime;
}