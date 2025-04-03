import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

export default function HomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [searchResults, setSearchResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const initialQuery = queryParams.get("q") || "";
    const initialCategory = queryParams.get("category") || "all";
    console.log(initialQuery);

    const performSearch = useCallback(async (query, category) => {
        setLoading(true);
        try {
            navigate(`/?q=${encodeURIComponent(query)}&category=${encodeURIComponent(category)}`, { replace: true });

            const response = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}&category=${encodeURIComponent(category)}`);
            if (!response.ok) {
                throw new Error("Search Failed");
            }

            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            navigate('/error', { state: { message: error.message } });
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        if (initialQuery) {
            performSearch(initialQuery, initialCategory);
        }
    }, [initialQuery, initialCategory, performSearch]); 

    return (
        <div className="container">
            <Header />
            <SearchForm onSearch={performSearch} initialQuery={initialQuery} initialCategory={initialCategory} />
            {loading ? (
                <p>Loading...</p>
            ) : searchResults ? (
                <SearchResults 
                    query={searchResults.query} 
                    category={searchResults.category} 
                    count={searchResults.products_count} 
                    executionTime={searchResults.execution_time} 
                />
            ) : null}
        </div>
    );
}
