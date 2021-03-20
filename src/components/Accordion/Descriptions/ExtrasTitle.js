export default function ExtrasTitle(eggless_choice, fondant_choice, topper_choice, characters_choice){
    var eggless = ""
    var fondant = ""
    var topper = ""

    if (eggless_choice && (fondant_choice || topper_choice || characters_choice)) eggless = "Eggless, "
    else if (eggless_choice && !(fondant_choice || topper_choice || characters_choice)) eggless = "Eggless"
    if (fondant_choice && (topper_choice || characters_choice)) fondant = "Fondant, "
    else if (fondant_choice && !(topper_choice || characters_choice)) fondant = "Fondant"
    if (topper_choice && characters_choice) topper = "Topper, Characters"
    else if (topper_choice && !characters_choice) topper = "Topper"

    return `Extras - ${eggless}${fondant}${topper}`
}