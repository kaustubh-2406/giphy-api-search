import BlackButton from './BlackButton';

export default function PaginationComponent({ page, loading, nextPage, prevPage, setPage }) {
    return (
        <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '2rem auto' }}>
            <BlackButton 
                disabled={page == 1 || loading} 
                variant='contained' 
                onClick={prevPage}
            >Back</BlackButton>

            <div>
                {[1,2,3,4,5].map(num => (<BlackButton key={num} onClick={() => {setPage(num)}} px='0.1rem' variant={num == page ? 'contained' : 'outlined'}>{num}</BlackButton>))}
            </div>

            <BlackButton 
                disabled={page >=5 || loading} 
                variant='contained' 
                onClick={nextPage}
            >Next</BlackButton>
        </footer> 
    )
}