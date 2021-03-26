export default function AllergiesDescription(allergies) {

    // cake is eggless and at least one other extra
    if (allergies) return allergies;
    else return "No Allergies Entered.";
}