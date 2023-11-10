import {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Container, Row, Col} from "react-bootstrap"
import Result from '../interface/reservationArticle'

type ArticleDetailParams = {
    articleId: string
  }

const ArticleDetail = () => {
    const params = useParams<ArticleDetailParams>()

    const [detail, setDetail] = useState<Result | null>(null)

  useEffect(() => {
fetch ('https://api.spaceflightnewsapi.net/v4/articles/' + params.articleId)
.then((res) => {
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Error')
  }
})
.then((data) => {
console.log('data trovata', data)
  setDetail(data.results)
})
.catch((err) => {
  console.log('Error nella fetch', err)
})
  })
    return(
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default ArticleDetail