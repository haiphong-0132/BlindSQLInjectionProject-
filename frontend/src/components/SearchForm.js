import React, {useState, useEffect} from 'react';

export default function SearchForm({onSearch, initialQuery = '', initialCategory = 'all'}) {
    const [query, setQuery] = useState(initialQuery);
    const [category, setCategory] = useState(initialCategory);

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'query') {
            setQuery(value);
        } else if (name === 'category') {
            setCategory(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query, category);
    };

    const formatQuery = (query, category) => {
        let sqlQuery = `SELECT * FROM products WHERE name LIKE '%${query}%' AND category = '${category}'`;
        const commentIndex = sqlQuery.indexOf('--');
        if (commentIndex !== -1){
            const query = sqlQuery.slice(0, commentIndex);
            const comment = sqlQuery.slice(commentIndex);
            return (
                <>
                    <span>{query}</span>
                    <span className="comment">{comment}</span>
                </>
            );
        }
        return <span>{sqlQuery}</span>
    }

    useEffect(() => {
        
    }, [query, category]);
    
    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" value={query} onChange={handleChange} placeholder='Search for Products...'/>
                <select value={category} onChange={handleChange}>
                    <option value="all">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Household">Household Supplies</option>
                </select>
                <button type="submit">Search</button>
            </form>


            <div className="sql-injection-query">
                <h2>SQL Query</h2>
                <p>{formatQuery(query, category)}</p>
            </div>
        </div>
    )
}