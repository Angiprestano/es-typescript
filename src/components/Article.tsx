import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import reservationArticle from '../interface/reservationArticle';
import { Col, Row } from 'react-bootstrap';



const Article = () => {
  const [news, setNews] = useState<reservationArticle[]>([])
  useEffect(() => {
fetch(' https://api.spaceflightnewsapi.net/v4/articles')
.then((res) => {
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Error')
  }
})
.then((data) => {
console.log('data trovata', data)
  setNews(data.results)
})
.catch((err) => {
  console.log('Error nella fetch', err)
})
  })
  return (
    <div>
      <h2 className='fw-800  text-primary text-center mb-3'>Space Flight Article</h2>
 {news.map((r) => { 
       return(
        <Row className=' pb-3 justify-content-center'>
          <Col xs={12} md={4} lg={3} >
<Card key = {r.id} className='d-flex' >
      <Card.Img variant="top" src={r.image_url} />
      <Card.Body>
        <Card.Title>{r.title}</Card.Title>
        <Card.Text>{r.published_at}</Card.Text>
        <Card.Text>{r.summary}</Card.Text>
        <Card.Text>{r.news_site}</Card.Text>
        <Button variant="info text-dark border border-1 border-secondary ">Clicca qui</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    
       ) 
      }
      )}
    
    </div>
  );
}

export default Article;