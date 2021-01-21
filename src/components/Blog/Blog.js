//this components works with Paginations.js, Posts.js, and db.json
// Frameworks functions
import React, { Fragment, useEffect, useState } from 'react';
// Frameworks and local styles
import './Blog.scss'
import Posts from './Posts';
import Paginacion from './Paginacion';
import qetzal from '../../assets/logos/qetzal.png'
import qetzall from '../../assets/logos/qetzall.png'


export default function Blog() {
    const [error] = useState(null);
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState([1]);
    const [postPerPage] = useState([4]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            fetch('http://localhost:3000/posts')
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

                <div className="row" style={{ textAlign: "center", display: "flex", position: "relative", bottom: 40 }}>
                    <div className="col-12">
                        <img alt="" src={qetzal} className="d-flex d-sm-inline-block" style={{ marginRight: 200 }} />
                        <img alt="" src={qetzall} className="d-none d-sm-inline-block ml-5 " />
                    </div>
                </div>
            </Fragment>
        )
    }
}
