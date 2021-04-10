export default function formatDate(date) {
    var month = date.substring(0, 3);
    var day;
  
    if (month === "Jan") {
        day = date.substring(7, 9);
        return ("January " + day);
    }
    if (month === "Feb") {
        day = date.substring(8, 10);
        return ("February " + day);
    }
    if (month === "Mar") {
        day = date.substring(5, 7);
        return ("March " + day);
    }
    if (month === "Apr") {
        day = date.substring(5, 7);
        return ("April " + day);
    }
    if (month === "May") {
        day = date.substring(3, 5);
        return ("May " + day);
    }
    if (month === "Jun") {
        day = date.substring(4, 6);
        return ("June " + day);
    }
    if (month === "Jul") {
        day = date.substring(4, 6);
        return ("July " + day);
    }
    if (month === "Aug") {
        day = date.substring(6, 8);
        return ("August " + day);
    }
    if (month === "Sep") {
        day = date.substring(9, 11);
        return ("September " + day);
    }
    if (month === "Oct") {
        day = date.substring(7, 9);
        return ("October " + day);
    }
    if (month === "Nov") {
        day = date.substring(8, 10);
        return ("November " + day);
    }
    if (month === "Dec") {
        day = date.substring(8, 10);
        return ("December " + day);
    }
}