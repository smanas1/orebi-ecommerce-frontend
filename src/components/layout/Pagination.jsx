import  { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12, 9, 10,11,12 ];

function Items({ currentItems }) {
    return (
      <>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-10 container'>
        {currentItems &&
          currentItems.map((item,i) => (
            <div key={i} className=''>
              <Product  img='/assets/p1.png'
                  title='Basic Crew Neck Tee'
                  price={i}

                  color='black'/> 
            </div>
          ))}
        </div>
      </>
    );
  }

function Pagination({ itemsPerPage }) {
  
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  
  const [itemOffset, setItemOffset] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setEnd(endOffset)
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='relative font-DM '>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item py-3  px-5 border text-base"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="hidden"
        nextClassName="hidden"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item "
        breakLinkClassName="page-link"
        containerClassName="pagination flex gap-4 mt-14 mb-20"
        activeClassName="active bg-primary text-white"
        renderOnZeroPageCount={null}
      />
      <p className='absolute right-0 -bottom-8 md:bottom-0 text-sm text-[#767676]'>Products from {itemOffset} to {end} of {items.length}</p>
      </div>

    </>
  );
}
export default Pagination;
