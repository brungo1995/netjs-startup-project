import comments from '../../../comments.json'

export default (req, res) => {
    debugger
    // res.status(200).json({ post: "Hello" })
    res.status(200).json({ post: req.query.id, comments })
}