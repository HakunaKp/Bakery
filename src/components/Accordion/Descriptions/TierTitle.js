export default function TierTitle(tier_choice) {
    if (tier_choice === "square") return "Tier - (8\" x 8\") Square"
    else if (tier_choice === "quarter") return "Tier - (8\" x 12\") Quarter Sheet"
    else if (tier_choice === "half") return "Tier - (16\" x 24\") Half Sheet"
    else return `Tier - ${tier_choice.substr(0, tier_choice.length-2)}`
}