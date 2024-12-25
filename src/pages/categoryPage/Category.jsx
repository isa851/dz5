import axios from 'axios';
import { useEffect, useState } from 'react';
import { Casual, Filter } from '../../widgets/categoryPage';
import '../../app.css';

export const Category = () => {
    const [product, setProduct] = useState();
    const [filterData, setFilterData] = useState();
    const [pricerRange, setPrice] = useState([0,500]);
    const [select,setSelect] = useState('all');
    

    useEffect(() => {
        axios('https://api.escuelajs.co/api/v1/products')
        .then(({data}) => {
            setProduct(data);
            setFilterData(data);
        })
        .catch((error) => {console.log(error);})
    }, []);
    console.log(select);

    const filterProducts = () =>{
        if(select === 'all'){
            const filtered = product.filter((product)=> product.price >= pricerRange[0]&& product.price <=pricerRange[1]) && product.category.name === select;
           filterData(filtered);
        }else{
            const filtered = product.filter((product)=> product.price >= pricerRange[0]&& product.price <=pricerRange[1]) && product.category.name === select;
           filterData(filtered);
        }
    }
    

    return (
        <div className='container flexCont'>
            <Filter pricerRange={pricerRange}setPrice={setPrice} setSelect={setSelect} filterProducts={filterProducts}/>
            <Casual product={filterData} />
        </div>
    );
}
