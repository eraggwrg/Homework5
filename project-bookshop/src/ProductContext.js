import React from "react";
export const ProductContext = React.createContext()

export const initialState = {
    products: [
        { id: 101, title: "Philispohy", price: 20, photo: "https://images.booksense.com/images/551/458/9781465458551.jpg" },
        { id: 102, title: "Biology", price: 14, photo: "https://cdn.gramedia.com/uploads/items/THE_BIOLOGY_BOOK.jpg" },
        { id: 103, title: "Poetry", price: 35, photo: "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/9/7/9780241566237.jpg" },
        { id: 104, title: "Economics", price: 32, photo: "https://m.media-amazon.com/images/I/81c6E2VdT3L._AC_UF1000,1000_QL80_.jpg" },
        { id: 105, title: "Religions", price: 48, photo: "https://images.booksense.com/images/433/408/9781465408433.jpg" },
        { id: 106, title: "Crime", price: 24, photo: "https://i5.walmartimages.com/seo/DK-Big-Ideas-The-Crime-Book-Big-Ideas-Simply-Explained-Hardcover-9781465462862_c8320b84-d782-4e0f-87e3-2bea7be4897b.62f1b6cce42f95f703dcef17ce96fb92.jpeg" },
        { id: 107, title: "Math", price: 16, photo: "https://images.booksense.com/images/248/480/9781465480248.jpg" },
        { id: 108, title: "Asrtonomy", price: 25, photo: "https://www.wordsworth.co.za/cdn/shop/products/7163_60db37de1c60c5.02689925_9780241225936_875bd691-2133-47b4-8267-6ccf854abea1_337x400.jpg?v=1658984714" },
        { id: 109, title: "Architecture", price: 12, photo: "https://bookazine.com.hk/cdn/shop/products/The_Architecture_Book_Big_Ideas_Simply_Explained_9780241415030.jpg?v=1696484182" },
        { id: 110, title: "Art", price: 23, photo: "https://images.booksense.com/images/372/453/9781465453372.jpg" },
        { id: 111, title: "Politics", price: 16, photo: "https://educationalbookshop.com/cdn/shop/products/polbook_1024x1024@2x.jpg?v=1664452905" },
        { id: 112, title: "Islam", price: 16, photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1587653470i/52226400.jpg" },
        { id: 113, title: "Chemistry", price: 23, photo: "https://mphonline.com/cdn/shop/products/9780241515549.jpg?v=1649306652" },

    ],

    basketProducts: [

    ]
}


export const reducer = (state, action) => {

    switch (action.type) {

        case "MOVE":
            const isExtends = state.basketProducts.some(x => x.id == action.payload)
            const bp = state.products.filter(x => x.id == action.payload)
            if (isExtends) {
                state.basketProducts.forEach(elm => elm.id == action.payload ? elm.count = elm.count + 1 : elm.count)
            }
            else {
                state.basketProducts.push(...bp.map(elm => elm = { ...elm, count: 1 }))
            }
            return {
                ...state,
                basketProducts: [...state.basketProducts]
            }

        case "ADD":
            state.basketProducts.forEach(elm => elm.id == action.payload ? elm.count = elm.count + 1 : elm.count)
            return {
                ...state,
                basketProducts: [...state.basketProducts]
            }

        case "UNADD":
            let counter
            state.basketProducts.forEach(elm => {
                elm.count <= 1 ? counter = 0 : counter = 1
                elm.id == action.payload ? elm.count = elm.count - counter : elm.count
            })
            return {
                ...state,
                basketProducts: [...state.basketProducts]
            }

        case "DELETE":
            return {
                ...state,
                basketProducts: [...state.basketProducts.filter(elm => elm.id != action.payload)]
            }

        default:
            return state
    }
}