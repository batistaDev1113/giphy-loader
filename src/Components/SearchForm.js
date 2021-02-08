import React, { useState } from 'react';

function SearchForm({ onSearch }) {
	// input state
	const [
		searchText,
		setSearchText
	] = useState('');

	const onSearchChange = (e) => {
		// Update state
		setSearchText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(searchText);
		e.currentTarget.reset();
	};

	return (
		<form className='search-form' onSubmit={handleSubmit}>
			<label className='is-hidden' htmlFor='search'>
				Search
			</label>
			<input type='search' onChange={onSearchChange} name='search' placeholder='Search...' />
			<button type='submit' id='submit' className='search-button'>
				<i className='material-icons icn-search'>search</i>
			</button>
		</form>
	);
}

export default SearchForm;
