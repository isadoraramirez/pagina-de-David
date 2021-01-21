import React from 'react'
// import { Pagination } from 'semantic-ui-react'
export default function Paginacion({ postPerPage, totalPost, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (

        // <div className="paginationContainer">
        //     <Pagination
        //         {...pageNumbers.map(number => (
        //             <li key={number} className="page-item" >
        //                 <a
        //                     onClick={() => paginate(number)}
        //                     href="!#"
        //                     className="page-link"
        //                 >
        //                     {number}
        //                 </a>
        //             </li>))}

        //         defaultActivePage={1} totalPages={4}

        //     />
        // </div>

        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" >
                        <a
                            onClick={() => paginate(number)} className='page-link'
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>


    )
}
