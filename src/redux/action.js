import * as types from './types'
import axios from "axios"
import { getWithtoken, postWithToken } from '../lib/request';

export const userRegister = (payload) => ({ type: types.REGISTER, payload });

const userLogin = (payload) => ({ type: types.LOGIN, payload });

export const userLogout = (payload) => ({ type: types.LOGOUT, payload });

export const apiError = (payload) => ({ type: types.APIERROR, payload });

export const getProducts = (payload) => ({ type: types.GETPRODUCTS, payload });

const getDataById = (payload) => ({ type: types.GETDATABYID, payload })

const isLoading = (payload) => ({ type: types.ISLOADING, payload })

export const setGridView = (payload) => ({ type: types.SETGRIDVIEW, payload })

export const setListView = (payload) => ({ type: types.SETLISTVIEW, payload })

// export const addToCart = (payload) => ({ type: types.ADDTOCART, payload })

const addToCartFailed = (payload) => ({ type: types.ADDTOCARDFAILED, payload })

const getDataFromCart = (payload) => ({ type: types.GETDATAFROMCART, payload })


export const getSortValue = (payload) => ({ type: types.GET_SORT_VALUE, payload })


export const sortingProducts = (payload) => ({ type: types.SORTING_PRODUCTS, payload })


export const loadFilterProducts = (payload) => ({ type: types.LOAD_FILTER_PRODUCTS, payload })


export const updateFiltersValue = (payload) => ({ type: types.UPDATE_FILTERS_VALUE, payload })


export const filterProducts = (payload) => ({ type: types.FILTER_PRODUCTS, payload })


export const clearFilters = (payload) => ({ type: types.CLEAR_FILTERS, payload })


// const sorting = (payload) => ({ type: types.SORTING, payload })



// export const sorting = () => {
       
// }


// "https://api.pujakaitem.com/api/products"

// `https://api.pujakaitem.com/api/products/${id}`



// export const AddToCart = (user_id,product_id,product_price,title,images) => async (dispatch) => { 

//        try {
//         let res = await postWithToken(`http://localhost:8000/cart/${user_id}`,{user_id,product_id,product_price,title,images})   
//          dispatch(addToCartSuccess())

//        return res
       
//        } catch (error) {
//               console.log(error,"error")
//                addToCartFailed()
              
//        }
// }

export const GetDataFromCart = (user_id) => async (dispatch) => {
       try {
              let res = await getWithtoken(`http://localhost:8000/cart/${user_id}`)   
               dispatch(getDataFromCart(res.data.products))
             
             } catch (error) {
                    console.log(error,"error")
                    
             }
}

export const GetProducts = (id) => (dispatch) => {
       axios.get("http://localhost:8000/products").then((res) => {
              console.log(res,"ressss") 
              dispatch(getProducts(res.data))
             
       }).catch((err) => {
              dispatch(apiError(err.message))
       })
   }



export const GetDataById = (id) => (dispatch) => {
    axios.get(`http://localhost:8000/products/${id}`).then((res) => {
           dispatch(getDataById(res.data))
    }).catch((err) => {
           dispatch(apiError(err.message))
    })
}



export const UserLogin = (email,password) => async(dispatch) => {
       try {
       let res =  await postWithToken('http://localhost:7070/login',{email,password})   
       console.log("🚀 ~ file: action.js ~ line 50 ~ UserLogin ~ res", res)
       if(res.status === 200){
              dispatch(userLogin(res.data.user))
       }
       return res
       
       } catch (error) {
              return error.response      
       }
       }

 





// export const UserRegister = () => (dispatch) => {
// dispatch((userRegister))
// }

// export const UserLogin = () => (dispatch) => {
// dispatch((userLogin))
// }

// export const UserLogout = () => (dispatch) => {
// dispatch((userLogout))
// }




