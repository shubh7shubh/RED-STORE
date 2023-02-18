import * as types from "./types"

let initialState = {
    users: [],
    products: [],
    isLoading: false,
    laptopProducts: [],
    eyewearProducts: [],
    watchProducts: [],
    appleBanner: [],
    singleProduct: {},
    logInUser: null,
    error: false,
    grid_view: true,
    cart: [],
    sorting_value: "lowest",
    filter_products: [],
    all_products: [],
    filters: {
        text: "",
        categories:["All"],
        maxPrice:0,
        price:0,
        minPrice:0,
        brand:""
    }
};
export const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER:
            return { ...state, users: [...state.users, action.payload] }
        case types.LOGIN:
            return { ...state, logInUser: action.payload }
        case types.LOGOUT:
            return { ...state, logInUser: null }
        case types.APIERROR:
            return { ...state, error: action.payload }

           

        case types.GETPRODUCTS:
            const laptopData = action.payload.filter((curElem) => {
                return  curElem.categories.includes("laptop") });
            const watchData = action.payload.filter((curElem) => {
                return  curElem.categories.includes("watch") });
            const eyewearData = action.payload.filter((curElem) => {
                return  curElem.categories.includes("eyewear")
            });
            const apple = action.payload.filter((curElem) => {
                return  curElem.title.includes("Apple")
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                laptopProducts: laptopData,
                watchProducts: watchData,
                eyewearProducts: eyewearData,
                appleBanner: apple,
            }

        // case types.ADDTOCARTSUCCESS:

        case "AddToCart":
        return {...state, cart:[...state.cart, action.payload]};


        case "removeFromCart":
            const updatedCart = state.cart.filter((item) => {
              return item._id !== action.payload;
            });
            return { ...state, cart: updatedCart };



        case types.SETGRIDVIEW:
            return { ...state, grid_view: true }

        case types.SETLISTVIEW:
            return { ...state, grid_view: false }

        case types.GETDATABYID:
            return { ...state, singleProduct: action.payload }
        case types.ISLOADING:
            return { ...state, isLoading: true }


        case types.GETDATAFROMCART:
            return { ...state, cart: action.payload }

        case types.GET_SORT_VALUE:
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value
            //  console.log(sort_value)
            return { ...state, sorting_value: action.payload }


        case types.SORTING_PRODUCTS:
            let newSortData;
            // let tempSortData = [...action.payload]

            const { products, sorting_value } = state;
            let tempSortData = [...products]

            const sortingItems = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price
                }
                if (sorting_value === "highest") {
                    return b.price - a.price
                }
                if (sorting_value === "a-z") {
                    return a.title.localeCompare(b.title)
                }
                if (sorting_value === "z-a") {
                    return b.title.localeCompare(a.title)
                }
            };

            newSortData = tempSortData.sort(sortingItems)
            return { ...state, filter_products: newSortData }


        case types.UPDATE_FILTERS_VALUE:
            const { name, value } = action.payload;
            return {
                ...state, filters: { ...state.filters, [name]: value }
            }



        // case types.FILTER_PRODUCTS:
        //     let tempFilterProducts = [...action.payload]

        //     const { text } = state.filters;
        //     if (text) {
        //         tempFilterProducts = tempFilterProducts.filter((curElem) => {
        //             return curElem.toLowerCase().includes(text);
        //         })
        //     }

            // return {
            //     ...state,
            //     filter_products: tempFilterProducts
            // }

        case "SEARCH_PRODUCTS":
            return {...state,filter_products:action.payload}


        case "SORT_CATEGORIES":
            return {...state,filter_products:action.payload}

        case "SORT_PRICE":
            return {...state,filter_products:action.payload}


       
        case types.LOAD_FILTER_PRODUCTS:
                let priceArr = action.payload.map((curElem) => curElem.price);

                let maxPrice = Math.max(...priceArr)
                
            return {
                ...state,
                filter_products: action.payload,
                all_products: action.payload,
                filters:{...state.filters, maxPrice, price: maxPrice}
            }



            case types.CLEAR_FILTERS:
                let priceArrr = action.payload.map((curElem) => curElem.price);

                let maxPricee = Math.max(...priceArrr)
                return {...state, filters:{...state.filters,
                    text: "",
                    categories:["All"],
                    price:maxPricee,
                    minPrice:0 },filter_products:action.payload}

 // if (state.sorting_value === "a-z") {
        //     newSortData = tempSortData.sort((a, b) => {
        //         return a.title.localeCompare(b.title)
        //     })
        // }

        // if (state.sorting_value === "z-a") {
        //     newSortData = tempSortData.sort((a, b) => {
        //         return b.title.localeCompare(a.title)
        //     })
        // }

        // if (state.sorting_value === "lowest") {
        //     let sortingItems = (a,b) => {
        //     return a.price - b.price
        //     }
        //     // newSortData = tempSortData.sort(sortingItems)
        // }

        // if (state.sorting_value === "highest") {
        //     let sortingItems = (a,b) => {
        //     return b.price - a.price
        //     }
        //     // newSortData = tempSortData.sort(sortingItems)
        // }
    

        default:
            return state;
    }

} 
