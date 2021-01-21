import React, { Fragment, useEffect, useState } from 'react';
import './Galeria.scss';
import ReactPlayer from 'react-player'
import { Image, Card, } from 'semantic-ui-react';


import Paginacion from './Paginacion';

export default function Galeria() {

    const [error] = useState(null);
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState([1]);
    const [postPerPage] = useState([3]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            fetch('http://localhost:3000/comments')
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
    // const indexOfLastPost = currentPage * postPerPage;
    // const indexFirstPost = indexOfLastPost - postPerPage;
    // const currentPosts = posts.slice(indexFirstPost, indexOfLastPost)
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
                <Card.Group className="group-articles cards-list">
                    {posts.map(post => (

                        <Card key={post.id} >
                            <Card.Content className="cards-blog">
                                <Image
                                    floated='center'
                                    size='medium'
                                    src={post.bucket}
                                />
                            </Card.Content>
                        </Card>
                    ))}

                </Card.Group>


                <ReactPlayer
                    style={{ marginTop: 20 }}
                    url="https://youtu.be/ulDwT0ywJwQ"
                    controls
                    width="896px"
                    height="504px"
                />

                <div className="paginationContainer">
                    <Paginacion
                        postPerPage={postPerPage}
                        totalPost={posts.length}
                        paginate={paginate}
                    />
                </div>

            </Fragment>
        )
    }
}
