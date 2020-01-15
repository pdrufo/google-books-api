import React from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Results from './Components/Results'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      printFilter: "all",
      bookFilter: "",
      results: null,
      loading: false,
      error: null
    };
  }

  handleSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  }

  handlePrintFilter = (printFilter) => {
    this.setState({ printFilter });
  }

  handleBookType = (bookFilter) => {
    this.setState({ bookFilter });
  }

  handleResults = (results) => {
    this.setState({ results });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.bookFilter);
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
    const filter =
      this.state.bookFilter.length > 0
        ? `filter=${this.state.bookFilter}&`
        : "";
    const printType = `printType=${this.state.printFilter}`;
    const q = `q=${this.state.searchTerm}`;

    fetch(`${BASE_URL}${printType}&${filter}${q}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("going to else");
          throw new Error(res.statusText);
        }
      })
      .then(data => this.handleResults(data))
      .catch(e => this.setState({ error: e.message }));
  }

  render() {
    let renderResults = this.state.results ? (
      <Results state={this.state} />
    ) : (
      ""
    );

    return (
      <div className="App">
        <Header />
        {/* <h5>{this.state.error}</h5> */}
        <Form
          state={this.state}
          handleSearchTerm={this.handleSearchTerm}
          handlePrintFilter={this.handlePrintFilter}
          handleBookType={this.handleBookType}
          handleSubmit={this.handleSubmit}
        />
        {renderResults}
      </div>
    );
  }
}

export default App;

