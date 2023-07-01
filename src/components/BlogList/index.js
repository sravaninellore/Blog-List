import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-list-container">
      {blogsList.map(eachBlogItem => {
        if (blogsList[blogsList.length - 1].id === eachBlogItem.id) {
          return (
            <BlogItem
              key={eachBlogItem.id}
              blogItemDetails={eachBlogItem}
              hrLine="false"
            />
          )
        }
        return (
          <BlogItem
            key={eachBlogItem.id}
            blogItemDetails={eachBlogItem}
            hrLine="true"
          />
        )
      })}
    </ul>
  )
}

export default BlogList
