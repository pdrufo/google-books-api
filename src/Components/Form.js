import React from 'react';
import './Form.css';
 

class Form extends React.Component {
    render () {
        return (
            
                <form className="searchbar__form">
                    <div className="searchbar">
                    <label htmlFor="search">Search:</label>
                    <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Books"
                    onChange={ (e) => this.props.handleSearchTerm(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="submitButton"
                        onClick={this.props.handleSubmit}>
                            Search
                        </button>

                    <div className="filter__bar">
                    <label htmlFor="print__type">Print Type:</label>
                    <select 
                        className="print__type"
                        onChange={(e) => this.props.handlePrintFilter(e.target.value)}>
                            <option value ="all">All</option>
                            <option value ="books">Books</option>
                            <option value ="magazines">Magazines</option>
                    </select>
                    <select 
                        className="book__type"
                        onChange={(e) => this.props.handleBookType(e.target.value)}>
                        <option value ="">No filter</option>
                        <option value ="ebooks">ebooks</option>
                        <option value ="free__ebooks">Free eBooks</option>
                        <option value ="paid__ebooks">Paid eBooks</option>
                        <option value ="full">Full</option>
                        <option value ="partial">Partial</option>
                    </select>
                    
                    </div>
                    </div>
                </form>
            
            
        )
    }
    }



export default Form