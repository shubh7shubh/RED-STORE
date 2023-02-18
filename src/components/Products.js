import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbaar from './Navbaar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { apiError, getProducts, setGridView, setListView } from '../redux/action'
import { Container, Image } from 'react-bootstrap'
import FormatPrice from '../helpers/FormatPrice'
import { GetProducts } from '../redux/action'
import GridView from './GridView'
import ListView from './ListView'
import { BsList, BsFillGridFill } from 'react-icons/bs'
import AppPagination from './AppPagination'

const Products = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const { products } = useSelector((state) => state.User_Register);


  const { products } = useSelector((state) => state.User_Register);

  const { all_products } = useSelector((state) => state.User_Register);
  const { grid_view } = useSelector((state) => state.User_Register);
  const { sorting_value } = useSelector((state) => state.User_Register);
  const { filter_products } = useSelector((state) => state.User_Register);
  const { filters: { text, categories, maxPrice, minPrice, price, brand } } = useSelector((state) => state.User_Register);


  const sorting = (event) => {
    let userValue = event.target.value;
    console.log(userValue, "user")
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

// -------------------------------------------- ALL useEffects for the filterations---------------------------------------------------------------------
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products })
  }, [sorting_value])


  useEffect(() => {
    searchProducts()
  }, [text])


  useEffect(() => {
    categoriesProducts()
  }, [categories])


  useEffect(() => {
    priceProducts()
  }, [price])
// --------------------------------------------- ALL useEffects for the filterations--------------------------------------------------------------------


// --------------------------------------------------SEARCH VALUES FUNCTION---------------------------------------------------------------
  const compare_text = [...text].join("").toLowerCase();
  
  const searchProducts = () => {

    let result;
    if (text !== "All") {
      result = products.filter((items) => {
        return items.title.toLowerCase().includes(compare_text)
      })
    }else{
      result = [...products]
    }

    dispatch({ type: "SEARCH_PRODUCTS", payload: result })
  }
// --------------------------------------------------SEARCH VALUES FUNCTION---------------------------------------------------------------

// --------------------------------------------------CATEGORIES SORT VALUES FUNCTION---------------------------------------------------------------

const categoriesProducts = () => {
  let categorySort;
  if (categories !== "All") {
    categorySort = all_products.filter((items) => {
        return items.categories[0] === categories
      })} else{
        categorySort = [...all_products]
      }
dispatch({type:"SORT_CATEGORIES", payload:categorySort})
    }

// --------------------------------------------CATEGORIES SORT VALUES FUNCTION---------------------------------------------------------------------
// --------------------------------------------PRICE SORT VALUES FUNCTION---------------------------------------------------------------------
const priceProducts = () => {
  let priceSort;
  if (price) {
    priceSort = all_products.filter((items) => {
        return items.price <= price
      })} else{
        priceSort = [...all_products]
      }
dispatch({type:"SORT_PRICE", payload:priceSort})
    }


// ---------------------------------------------------PRICE SORT VALUES FUNCTION--------------------------------------------------------------



// ----------------------------------------IMP UPDATE FILTER VALUES -------------------------------------------------------------------------
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(name,value)

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  }

// ---------------------------------------------IMP UPDATE FILTER VALUES --------------------------------------------------------------------



  // To get the unique data of each fields imp

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property][0]
    })
    return newVal = ["All", ... new Set(newVal)]
  }

  const getCompanyData = (dataa, propertyy) => {
    let newValue = dataa.map((curElem) => {
      return curElem[propertyy]
    })
    return newValue = ["All", ... new Set(newValue)]
  }


  // We need unique data for right category section
  const categoryOnlyData = getUniqueData(products, "categories");

  // We need unique data for right category section

  const companyOnlyData = getCompanyData(products, "brand");

  console.log(companyOnlyData,"ffffffffffffffffffffffffffffffffffffff")


// To clear filters

const clearFilters = () => {
  // console.log("clear filtersssss")
  dispatch({type:"CLEAR_FILTERS",payload:all_products})
}



  return (<>
    <Navbaar />
    <div className="all_products">
      <div className="mainProductContainer" id='impContainer'>  
      <Container className="mb-5">
        <div className="top_filter_container d-flex justify-content-center">
          <div className="top_product_filter d-flex align-items-center justify-content-center">
            <div className="top_left w-50 d-flex align-items-center justify-content-between mx-2">
              <div className="tl">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input className="w-100" name='text' value={text} onChange={updateFilterValue} type="text" placeholder='Search...' />
                </form>
              </div>
              <div className="tl">
                <button onClick={() => dispatch((setGridView()))} className={grid_view ? "activee sort_btn" : "sort_btn"}>
                  <BsFillGridFill className='mb-1' />
                </button>
                <button onClick={() => dispatch((setListView()))} className={!grid_view ? "activee sort_btn" : "sort_btn"}>
                  <BsList className='mb-1' />
                </button>
              </div>
            </div>
            <div className="top_right w-50 d-flex align-items-center justify-content-between mx-2">
              <div className="tr">{filter_products.length} Products Available</div>

              <div className="tr sort_selection">
                <form action="#">
                  <label htmlFor="sort"></label>
                  <select className='mx-2 my-1 px-2 py-1' name="sort" id="sort" onChange={sorting}>
                    <option value="lowest">Price(lowest)</option>
                    <option value="#" disabled></option>
                    <option value="highest">Price(highest)</option>
                    <option value="#" disabled></option>
                    <option value="a-z">Price(a-z)</option>
                    <option value="#" disabled></option>
                    <option value="z-a">Price(z-a)</option>

                  </select>
                </form>
              </div>


            </div>
          </div>
        </div>
        <div className="product_div_container d-flex justify-content-center">
          <div className="filter_left mt-2 mb-5">
            <h5 className="mx-3">Category</h5>
            <div className='d-flex flex-column  my-3 '>
              {
                categoryOnlyData.map((curElem, index) => {
                  return <button
                    className='categoryButton'
                    key={index}
                    type="button"
                    name='categories'
                    value={curElem}
                    onClick={updateFilterValue} >{curElem.toUpperCase()}
                  </button>
                })
              }
            </div>
            <div className="price_filter my-5">
              <h5 className="mx-3 my-3">Price</h5>
              <p className="mx-4 ">{price}Rs</p>
              <input 
              type="range" 
              min={minPrice} 
              max={maxPrice} 
              value={price} 
              onChange={updateFilterValue} 
              name="price" />
            </div>
            <div className="clear_filter">
              <button className='btn btn-warning' onClick={clearFilters}>
                Clear Filters
              </button>
            </div>

          </div>
          <div  className="product_ccontainer mt-2 mb-5">
            {grid_view ? <GridView /> : <ListView />}
          </div>

        </div>
        {/* <AppPagination /> */}
      </Container>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Products
