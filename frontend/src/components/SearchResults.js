import React from "react";

export default function SearchResults({query, category, count, executionTime}){
    return (
        <div className="search-results">
            <h2>Results</h2>
            {
                query ? (
                    <>
                        <p className="results-info">
                            Your search for "<strong>{query}</strong>"
                            {category !== 'all' && <span> in category <strong>{category}</strong></span>}
                            found <strong>{count}</strong> products.
                        </p>

                        <div className="metadata">
                            <p className="timing">Query execution time: {executionTime.toFixed(4)} seconds</p>
                        </div>
                    </>
                ) : (
                    <p>Please enter a search term.</p>
                )}
        </div>
    );
}