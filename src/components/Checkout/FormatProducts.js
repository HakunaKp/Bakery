export default function formatProducts(product) {
    return [
        {id: product.id},
        {flavor: product.flavor},
        {shape: product.shape},
        {tier: product.tier},
        {eggless: product.eggless},
        {fondant: product.fondant},
        {topper: product.topper},
        {characters: product.characters},
        {description: product.description},
        {allergies: product.allergies},
        {price: product.price},
    ];
}