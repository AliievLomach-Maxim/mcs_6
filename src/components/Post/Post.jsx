import css from './Post.module.css'

const Post = ({ id, title, body }) => {
  return (
    <>
      {false}
      {undefined}
      {null}
      {''}
      {id && <p>2</p>}
      <h2 className={css.title}>Title: {title}</h2>
      <p>Description: {body}</p>
    </>
  )
}
export default Post
