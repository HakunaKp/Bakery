export default function FlavorDescription(flavor_choice) {
    if (flavor_choice === "Blueberry") {
        return "A rich inner-filling topped with blueberry flavored whipping cream and fresh blueberries."
    } else if (flavor_choice === "Strawberry") {
        return "A rich inner-filling topped with strawberry flavored whipping cream and fresh strawberry slices."
    } else if (flavor_choice === "Mango") {
        return "A rich inner-filling topped with mango flavored whipping cream and fresh mango slices."
    } else if (flavor_choice === "Pineapple") {
        return "A rich inner-filling topped with pineapple flavored whipping cream and fresh pineapple slices."
    } else if (flavor_choice === "Black Forest") {
        return "A rich inner-filling with whipped topping and maraschino cherries in syrup."
    } else if (flavor_choice === "Butterscotch") {
        return "A rich inner-filling topped with butterscotch flavored whipping cream."
    } else if (flavor_choice === "Chocolate Ganache") {
        return "A rich inner-filling coated with a delicious layer of melted chocolate."
    } else return "A scrumptious cake."
}