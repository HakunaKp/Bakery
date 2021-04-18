export default function AllergiesTitle(allergies) {

    // cake is eggless and at least one other extra
    if (allergies) return "Allergies - Expand";
    else return "Allergies - None";
}