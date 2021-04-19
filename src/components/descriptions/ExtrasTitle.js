export default function ExtrasTitle(eggless_choice, fondant_choice, topper_choice, characters_choice){

    if (!eggless_choice && !fondant_choice &&!topper_choice && !characters_choice) return 'Extras - None';

    var eggless = "";
    var fondant = "";
    var topper = "";
    var characters = "";

    // cake is eggless and at least one other extra
    if (eggless_choice && (fondant_choice || topper_choice || characters_choice)) {

        eggless = "Eggless";

        // cake has fondant and 1+ extra
        if (fondant_choice && (topper_choice || characters_choice)) {

            fondant = ", Fondant, ";

            if (topper_choice && characters_choice) {
                topper = "Topper, Characters";
            }
            else if (topper_choice && !characters_choice) {
                topper = "Topper";
            }
        }

        // cake has fondant and no more extras
        else if (fondant_choice && !(topper_choice || characters_choice)) {
            fondant = ", Fondant";
        }

        // cake does not have fondant
        else {
            if (topper_choice && characters_choice) {
                topper = ", Topper, Characters";
            }
            else if (topper_choice && !characters_choice) {
                topper = ", Topper";
            }
            else if (!topper_choice && characters_choice) {
                characters = ", Characters";
            }
        }
    }

    // cake is eggless no more extras
    else if (eggless_choice && !(fondant_choice || topper_choice || characters_choice)) {
        eggless = "Eggless";
    }

    // cake is not eggless
    else {

        // cake has fondant and 1+ extra
        if (fondant_choice && (topper_choice || characters_choice)) {

            fondant = "Fondant";

            if (topper_choice && characters_choice) {
                topper = ", Toppers, Characters";
            }
            else if (topper_choice && !characters_choice) {
                topper = ", Topper";
            }
        }
        // cake has fondant and no more extras
        else if (fondant_choice && !(topper_choice || characters_choice)) {
            fondant = "Fondant";
        }

        // cake has no fondant
        else {
            // cake has toppers and characters
            if (topper_choice && characters_choice) {
                topper = "Topper, Characters";
            }
            // cake has toppers no characters
            else if (topper_choice && !characters_choice) {
                topper = "Topper";
            }
            // cake has no toppers but has characters
            else if (!topper_choice && characters_choice) {
                characters = "Characters";
            }
        }
    }

    return `Extras - ${eggless}${fondant}${topper}${characters}`;
}