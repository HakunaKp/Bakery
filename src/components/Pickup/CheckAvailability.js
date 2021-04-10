// Update this function to change pick up date availability
export default function checkAvailability(date) {
    if (date) return false;
    // Return false if Saturday or Sunday
    //  return date.getDay() === 0 || date.getDay() === 6;
}