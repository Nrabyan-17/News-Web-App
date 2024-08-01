import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


function NewsBoard( { category } ) {

    const [article, setArticle] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d7803a39bb7b4d1c922640aded30693e`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => setArticle(data.articles))
    },[category])

    return (
        <div>
            <h2 className="text-center mt-5px my-3">Berita <span className="badge bg-danger">Terkini</span> </h2>
            {article.map((news, index) => {
                return <NewsItem 
                        key={index} 
                        title={news.title} 
                        src={news.urlToImage}
                        url={news.url}
                        description={news.description}
                        />
            })}
        </div>
    )

}

export default NewsBoard