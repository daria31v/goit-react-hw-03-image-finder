import { Component } from 'react';
import { Container } from './App.styled';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchImages } from 'Service/fetchApi';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Button } from './Button/Button';
import {Loader} from './Loader/Loader'

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    totalImage: 0,
    limit: 500,
    hasError: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    
    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page).then(respons => {
        this.setState(({ images }) => ({
          images: page === 1 ? [...respons.hits] : [...images, ...respons.hits],
          totalImage: respons.totalHits,
        }));
      }).finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  
  handleSubmit = query => {
    this.setState({ query, isLoading: true })
  }

  handleLoadMore = () => {
    this.setState((prevState) => ({page: prevState.page + 1, isLoading: true, error:null}))
  }

  renderButtonOrLoader = () => {
    return this.state.isLoading ? (<Loader />) :
      (this.state.images.length !== 0 && this.state.images !== this.limit && this.state.images.length < this.state.totalImage
        && (<Button onClick={this.handleLoadMore} />))         
  }
  
  render() {
    const { images } = this.state;
    
    return (
      <Container>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {this.renderButtonOrLoader()}
        
      </Container>
    );
  }
}
