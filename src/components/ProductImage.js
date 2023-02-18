import React, {useEffect, useState} from 'react'

const ProductImage = ({ imgs = [{url:""}], idd }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
    console.log((imgs[0]), "imgsss")

   useEffect(() => {
  setMainImage(imgs[0])
   }, [idd])

    return <>    
        <div  className="one_div w-50 d-flex flex-column justify-content-center align-items-center">
            {imgs.map((cvalue, index) => {
                return <img onClick={()=>setMainImage(cvalue)}  className=' w-75 p-3 ' src= {cvalue} alt= {cvalue.filename} key={index} />
            })}
        </div>
        <div  className="two_div w-50 d-flex justify-content-center align-items-center">
            <img className='w-100' src={mainImage} alt="main image" />
        </div>
    </>     
}

export default ProductImage
