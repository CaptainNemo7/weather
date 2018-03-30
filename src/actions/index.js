export function selectExampleBook(book) {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}