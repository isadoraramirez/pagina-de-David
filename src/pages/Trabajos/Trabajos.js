import React, { Fragment, useState, useEffect } from 'react';
// Frameworks and local styles
import './Trabajos.scss';


import Posts from './Posts';
import Paginacion from './Paginacion';

export default function Trabajos() {

    const [error] = useState(null);
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState([1]);
    const [postPerPage] = useState([3]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            fetch('http://localhost:3000/profile')
                .then(res => res.json())
                .then(
                    (result) => {
                        setPost(result);
                        setLoading(false);
                    },
                    (error) => {
                        setLoading(true);
                        console.log(error);
                    }
                )
        }
        fetchPosts();
    }, [])

    console.log(posts);

    //GEt current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexFirstPost, indexOfLastPost)
    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    if (error) {
        return <div> Error: {error.message} </div>
    } else if (loading) {
        return <div> Loading ...</div>
    } else {

        return (
            <Fragment>
                <h1 className="title-blog" >
                    Las oportunidades se multiplican a medida que se aprovechan -Sun Tsu-
                 </h1>

                <h4 className="description-blog" >  Descubre en nuestro blog los artículos más interesantes y nuevos sobre la ciencia política  </h4>

                <Posts posts={currentPosts} loading={loading} />

                <div className="paginationContainer">
                    <Paginacion
                        postPerPage={postPerPage}
                        totalPost={posts.length}
                        paginate={paginate}
                    />
                </div>
            </Fragment >
        )
    }
}
