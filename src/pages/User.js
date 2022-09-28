import { Link } from 'react-router-dom';
import { useState } from 'react'


function Index(props) {

    const [newForm, setNewForm] = useState({
        name: '',
        image: '',
        content: '',
        author: '',
        createdByUser: '',
        tags: [],
        comments: [],
        likes: 0,
        dislikes: 0,
    })

    if (!props.user) return <h1>Please Login to see your data.</h1>;

    const loaded = () => {

        return props.poems.map(poem => (
            <div className='poem' key={poem._id} >

                <h2>
                    <Link to={`/poems/${poem._id}`}>
                        {poem.name}
                    </Link>
                </h2>

                <img className='limiter'
                    src={poem.image} alt={poem.name}></img>
                <p>{poem.title}</p>
                <p>{poem.content}</p>

            </div>

        ));
    };

    const loading = () => {
        return <h1> Poems On The Way... </h1>
    };
    const handleChange = (e) => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPoems(newForm);
        setNewForm({
            name: '',
            content: '',
            author: '',
            createdByUser: '',
            tags: [],
            comments: [],
            likes: 0,
            dislikes: 0,
        })
    };

    return (
        <section>
            {props.poems ? loaded() : loading()}
        </section>
    );

}

export default Index;