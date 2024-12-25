import './filter.css';
import filter from '../../../imgs/filter.svg';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { category } from '../../../pages/categoryPage/Category';

export const Filter = ({pricerRange, setPrice, setSelect, filterProduct}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        axios('https://api.escuelajs.co/api/v1/categories')
        .then(({data}) => setCategories(data))
        .catch((error)=> console.log(error)
        )
    }, [])
    return (
        <aside className='asideBlock'>
            <div className='title'>
                <h2>Filter</h2>
                <img src={filter} alt="" />
            </div>


            <div className='category'>
                <input className='input' type='radio' value='all' id='all' name="category" />
                <label onClick={() => setSelect('all')} htmlFor='all'>all</label>
                {
                    categories && (
                    categories.map((category) =>(
                        <div key={category.id}>
                            <input type='radio' name="category" value={category.name} id={category.id} />
                            <label onClick={()=> setSelect(category.name)} htmlFor={category.id}>{category.name}</label>
                        </div>
                        
                    ))
                )
                }
                 <div>  
                    <input type='radio' name="category" />
                    <label>Item</label>
                </div> 
                 
            </div>

            <div className='price'>
                <h2>Price</h2>

                <h4>${pricerRange[0]} - ${pricerRange[1]}</h4>
                <Slider
                range
                min={0}
                max={500}
                value={pricerRange}
                onChange={setPrice}
                allowCross={false}
                className='custom-slider'
                />
            </div>

            <div className='filterButton'>
                <button onClick={filterProduct}>Go filter</button>
            </div>

        </aside>
    );
}

