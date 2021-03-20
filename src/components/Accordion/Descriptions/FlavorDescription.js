export default function FlavorDescription(flavor_choice) {
    if (flavor_choice === "Blueberry") {
        return "A rich inner-filling topped with blueberry flavored whipped topping and fresh blueberries."
    } else if (flavor_choice === "Strawberry") {
        return "A rich inner-filling topped with strawberry flavored whipped topping and fresh strawberry slices."
    } else if (flavor_choice === "Mango") {
        return "A rich inner-filling topped with mango flavored whipped topping and fresh mango slices."
    } else if (flavor_choice === "Pineapple") {
        return "A rich inner-filling topped with pineapple flavored whipped topping and fresh mango slices."
    } else if (flavor_choice === "Black Forest") {
        return "A rich inner-filling topped with whipped topping and maraschino cherries in syrup."
    } else if (flavor_choice === "Butterscotch") {
        return "A rich inner-filling topped with butterscotch flavored whipped topping."
    } else if (flavor_choice === "Chocolate Ganache") {
        return "A rich inner-filling coated with a delicious layer of melted chocolate."
    } else return "A scrumptious cake."
}