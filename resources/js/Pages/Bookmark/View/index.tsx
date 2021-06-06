import React from "react"
import { Layout } from "../../../components/common/layout"

interface Props {
  bookmark: any
}

export const BookmarkViewPage: React.FC<Props> = ({ bookmark }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-12">
          {bookmark && bookmark.title && (
            <div className="card">
              <div className="card-header">{bookmark.title}</div>
              <div className="card-body">
                <p>{bookmark.description} </p>
                <img src={bookmark.image} alt={bookmark.title} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
