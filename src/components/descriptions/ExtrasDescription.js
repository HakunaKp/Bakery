export default function ExtrasDescription(eggless_choice, fondant_choice, topper_choice, characters_choice) {
    
    if (!eggless_choice && !fondant_choice &&!topper_choice && !characters_choice) return 'No Extras Selected.'

    var eggless = ""
    var fondant = ""
    var topper = ""
    var characters = ""

    // cake is eggless and at least one other extra
    if (eggless_choice && (fondant_choice || topper_choice || characters_choice)) {

        eggless = "is eggless"

        // cake has fondant and 1+ extra
        if (fondant_choice && (topper_choice || characters_choice)) {

            fondant = ", has fondant work done, "

            if (topper_choice && characters_choice) {
                topper = "will have decorative toppings, and will have figurine characters for an extra charge."
            }
            else if (topper_choice && !characters_choice) {
                topper = " and will have decorative toppings for an extra charge."
            }
        }

        // cake has fondant and no more extras
        else if (fondant_choice && !(topper_choice || characters_choice)) {
            fondant = " and has fondant work done."
        }

        // cake does not have fondant
        else {
            if (topper_choice && characters_choice) {
                topper = ", will have decorative toppings, and will have figurine characters for an extra charge."
            }
            else if (topper_choice && !characters_choice) {
                topper = " and will have decorative toppings for an extra charge."
            }
            else if (!topper_choice && characters_choice) {
                characters = " and will have figurine characters for an extra charge."
            }
        }
    }

    // cake is eggless no more extras
    else if (eggless_choice && !(fondant_choice || topper_choice || characters_choice)) {
        eggless = "is eggless."
    }

    // cake is not eggless
    else {

        // cake has fondant and 1+ extra
        if (fondant_choice && (topper_choice || characters_choice)) {

            fondant = "has fondant work done"

            if (topper_choice && characters_choice) {
                topper = ", will have decorative toppings, and will have figurine characters for an extra charge."
            }
            else if (topper_choice && !characters_choice) {
                topper = " and will have decorative toppings for an extra charge."
            }
        }
        // cake has fondant and no more extras
        else if (fondant_choice && !(topper_choice || characters_choice)) {
            fondant = "has fondant work done for an extra charge."
        }

        // cake has no fondant
        else {
            // cake has toppers and characters
            if (topper_choice && characters_choice) {
                topper = "will have decorative toppings and figurine characters for an extra charge."
            }
            // cake has toppers no characters
            else if (topper_choice && !characters_choice) {
                topper = "will have decorative toppings for an extra charge."
            }
            // cake has no toppers but has characters
            else if (!topper_choice && characters_choice) {
                characters = " and will have figurine characters for an extra charge."
            }
        }
    }

    return `The selected cake ${eggless}${fondant}${topper}${characters}`
}