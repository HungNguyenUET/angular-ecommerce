export class Product {
    constructor(public id: number,
                public sku: string,
                public name: string,
                public description: string,
                public unitPrice: number,
                public imageUrl: string,
                public acive: string,
                public unitsInStock: boolean,
                public dateCreated: Date,
                public lastUpdated: Date,) {

    }
}
