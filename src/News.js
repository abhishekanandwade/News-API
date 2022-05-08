import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'

const News = ()=>  {

    const [articles, setArticles] = useState([])
    //console.log(articles)

    const updateNews = async()=>{
        console.log("News componentDidMount");
        let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=1ba6f1c4b869400d9a2ea2608c1510ce"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        setArticles( parsedData.articles)

    }

    useEffect(()=>{
        updateNews()
    } ,[])

    /*async componentDidMount(){
        console.log("News componentDidMount");
        let url="https://newsapi.org/v2/everything?q=Apple&from=2022-04-11&sortBy=popularity&apiKey=1ba6f1c4b869400d9a2ea2608c1510ce"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})

    }*/

  
    return (
      <div className = "container my-3" >
          <h1>News Headlines</h1>
          
          <div className="row" >
         { articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
              <NewsItem  title = {element.title} description = {element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>

          })}
                
                

          </div>

          


      </div>
    )
  }


export default News