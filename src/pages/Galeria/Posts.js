import React from 'react'
import { Image, Card, Button } from 'semantic-ui-react';
import Kandisky from '../../assets/imagenes-layout/kdy.jpg'
import '../../components/Blog/Blog.scss'

export default function Posts({ posts }) {
    return (
        <Card.Group className="group-articles">

            {posts.map(post => (

                <Card key={post.id} >
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={Kandisky}
                        />
                        <Card > {post.title} </Card>
                        <Card.Meta> {post.name} </Card.Meta>
                        <Card.Description className="author">
                            Autor:<strong> {post.description} </strong>
                        </Card.Description>
                        <Card.Content extra>
                            <div className='ui two buttons'>

                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={post.bucket}>

                                    <Button
                                        basic color='green'
                                    >
                                        Leer
                                    </Button>
                                </a>
                            </div>
                        </Card.Content>
                    </Card.Content>
                </Card>
            ))}

        </Card.Group>
    )
}
