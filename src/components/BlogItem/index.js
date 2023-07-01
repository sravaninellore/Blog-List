import './index.css'

const BlogItem = props => {
  const {blogItemDetails, hrLine} = props
  const {title, description, publishedDate} = blogItemDetails

  return (
    <li>
      <div className="title-date-alignment">
        <h1 className="title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
      {hrLine === 'true' && <hr className="hr-line" />}
    </li>
  )
}

export default BlogItem
