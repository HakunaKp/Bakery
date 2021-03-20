export default function TierDescription(shape_choice, tier_choice) {
    if (shape_choice === "Circle") {
        if (tier_choice === "6 Inches") return "A 6-inch circle-shaped cake to serve 5-6 people. Base price: $15.00"
        if (tier_choice === "7 Inches") return "A 7-inch circle-shaped cake to serve 6-7 people. Base price: $17.00"
        if (tier_choice === "8 Inches") return "A 8-inch circle-shaped cake to serve 8-12 people. Base price: $23.00"
        if (tier_choice === "10 Inches") return "A 10-inch circle-shaped cake to serve 15-20 people. Base price: $30.00"
        if (tier_choice === "12 Inches") return "A 12-inch circle-shaped cake to serve 30-35 people. Base price: $50.00"
    } else if (shape_choice === "Rectangle") {
        if (tier_choice === "square") return "An (8\" x 8\") square cake which serves about 12 people. Base price: $22.00"
        if (tier_choice === "quarter") return "An (8\" x 12\") quarter sheet cake which serves about 25 people. Base price: $45.00"
        if (tier_choice === "half") return "A (16\" x 24\") half sheet cake to which serves about 50 people. Base price: $80.00"
    } else if (shape_choice === "Heart") {
        if (tier_choice === "5 Inches") return "A 5-inch heart-shaped cake to serve 4-5 people. Base price: $15.00"
        if (tier_choice === "8 Inches") return "An 8-inch heart-shaped cake to serve 10-12 people. Base price: $25.00"
        if (tier_choice === "11 Inches") return "An 11-inch heart-shaped cake to serve 20-25 people. Base price: $35.00"
    }
}