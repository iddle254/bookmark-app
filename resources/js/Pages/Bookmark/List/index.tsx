import React from "react"
import { Layout } from "../../../components/common/layout"

interface Props {
  bookmarks: Array<any>
}

const BookmarkListPage: React.FC<Props> = ({ bookmarks }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          <div>
            <p>Welcome to the bookmarkListPage</p>
            <ul className="list-group">
              {bookmarks.length > 0 &&
                bookmarks.map((bookmark, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      {bookmark.title}
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BookmarkListPage
