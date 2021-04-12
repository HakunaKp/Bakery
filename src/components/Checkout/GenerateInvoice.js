import printTier from '../Cart/PrintTier';

export default function generateInvoiceTable(product, doc){
    doc.autoTable({
        head: [['Product ID', 'Flavor', 'Shape', 'Tier', 'Eggless', 'Fondant', 'Topper', 'Characters', 'Base Price']],
        body: [
        [product[0].id, product[1].flavor, product[2].shape, printTier(product[3].tier), product[4].eggless, product[5].fondant, product[6].topper, product[7].characters, '$' + product[10].price],
        ]
    });

    if (product[8].description) {
        doc.autoTable({
            head: [['Description']],
            body: [
                [product[8].description],
            ]
        });
    }

    if (product[9].allergies) {
        doc.autoTable({
            head: [['Allergies']],
            body: [
                [product[9].allergies],
            ]
        });
    }
}