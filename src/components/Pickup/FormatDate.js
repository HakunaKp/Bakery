export default function formatDate(date) {
    var month = date.substring(0, 2);
    var day = date.substring(3, 5);
  
    if (month === "01") return ("January" + day);
    if (month === "02") return ("February" + day);
    if (month === "03") return ("March" + day);
    if (month === "04") return ("April" + day);
    if (month === "05") return ("May" + day);
    if (month === "06") return ("June" + day);
    if (month === "07") return ("July" + day);
    if (month === "08") return ("August" + day);
    if (month === "09") return ("September" + day);
    if (month === "10") return ("October" + day);
    if (month === "11") return ("November" + day);
    if (month === "12") return ("December" + day);
}