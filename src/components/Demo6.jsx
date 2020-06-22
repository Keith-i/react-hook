import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const response = await fetch(url)  // 'http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php'
      const data = await response.json()
      setData(data)
      setLoading(false)
      console.log(data)
    })()
  }, [])

  return {
    data,
    loading
  }
}

const Demo6 = () => {
  const {data, loading} = useFetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')

  return(
    <div>
      {
        loading? <div>...loading</div> : data.chengpinDetails[0].title
      }
    </div>
  )
}

export default Demo6