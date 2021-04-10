export default function printTier(tier) {
    if (tier === "square") return "(8\" x 8\") Square";
    else if (tier === "quarter") return "(8\" x 12\") Quarter Sheet";
    else if (tier === "half") return "(16\" x 24\") Half Sheet";
    else return `${tier.substr(0, tier.length-2)}`;
}