import { Card } from 'react-bootstrap'
import Result from '../interface/reservationArticle'
import { Link } from 'react-router-dom'

interface newArticle {
  ArticleDetails: Result
}

const SingleArticle = (props: newArticle) => {
  return (
    <Card>
      <Link to={'/' + props.ArticleDetails.id}>
        <Card.Img variant="top" src={props.ArticleDetails.image_url} />
      </Link>
      <Card.Body>
        <Card.Title>{props.ArticleDetails.title}</Card.Title>
        <Card.Text>{props.ArticleDetails.summary}</Card.Text>
        <Card.Text>
          {props.ArticleDetails.published_at} | {props.ArticleDetails.news_site}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleArticle