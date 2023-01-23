// Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми. Створює DOM-елемент наступної структури.

import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';


export const SearchBar =({onSubmit})=> {
  
  const handleSubmit = evt => {
    evt.preventDefault()
    onSubmit(evt.currentTarget.elements.query.value)
  };
   
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search!</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarContainer>
    );
  
}
