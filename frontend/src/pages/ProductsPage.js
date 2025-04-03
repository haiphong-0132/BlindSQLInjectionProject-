import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import ProductsTable from "../components/ProductsTable";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error){
                navigate('/error', {state: {message: error.message}});
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [navigate]);

    return (
        <div className="container">
            <Header />
            <div className="search-link">
                <Link to="/">Search Products</Link>
            </div>

            {loading ? (<p>Loading products...</p>): (<ProductsTable products={products} />)}

        </div>
    )
}