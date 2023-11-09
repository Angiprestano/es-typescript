import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import reservationArticle from '../interface/reservationArticle';



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
 {news.map((r) => { 
       return(
<Card key = {r.id} className='d-flex' >
      <Card.Img variant="top" src={r.image_url} />
      <Card.Body>
        <Card.Title>{r.title}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Clicca qui</Button>
      </Card.Body>
    </Card>
       ) 
      }
      )}
    
    </div>
  );
}

export default Article;