import React, { useEffect, useState } from 'react'
import './CompNewsticker.css'
import { newsTicker } from '../data/newsData'

const CompNewsTicker = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    setNews(newsTicker)
  }, [])

  return (
    <div className="news-spacing news-ticker-wrapper mt-5 pt-5 bg-info">
      <div className="news-ticker">
        {news.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ticker-item"
            key={index}
          >
            <img src={item.image} alt="News" className="ticker-img" />
            <span className="ticker-text">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default CompNewsTicker
