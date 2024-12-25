import './casual.css';
import {Card} from '../../../entities'
import {Link} from 'react-router-dom';

export const Casual = ({product}) => {
    console.log(product);
    
    return (
        <div className="casualBlock">
            <h1>Casual</h1>  
            <div className="casualCont">
                {
                    product && 
                    product.map((item) => (
                        <div key={item.id}>
                            <Link to={`/detail/${item.id}`}><Card img={item.category.image} title={item.title} rate={item?.rating?.rate} price={item.price} /></Link>
                        </div>
                    ))
                }
            </div>

            <div className="pagination">
                <div className='btnPrevious'>
                    <button>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Previous
                    </button>
                </div>
                <div>
                    <span>Page 1</span>
                </div>
                <div className='btnNext'>
                    <button>
                        Next
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                
            </div>
            
        </div>
    );
}