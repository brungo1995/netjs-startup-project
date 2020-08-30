import posts from '../../posts.json'
import moment from 'moment'

const Post = props => {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>Published on {props.date}</p>
            <p>{props.post.content}</p>
        </div>
    )
}

Post.getInitialProps = async ({ query }) => {
    const moment = (await import('moment')).default()
    let date = moment.format('dddd D MMMM YYYY');

    return {
        date: moment.format('dddd D MMMM YYYY'),
        post: posts[query.id]
    }
}

export default Post