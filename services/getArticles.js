import axios from 'axios'

// The API endpoint where login data is sent to
const newsApiUrl = `https://newsapi.org/v2/everything?q=depression&apiKey=`

const articlesJson = async () => {
  // Send the login credential data to the loginBaseUrl API endpoint as an HTTP POST request
  // Note the async-await
  let response = await axios.get(newsApiUrl)

  // Return .data field of the response object which would contain the logged in user object
  // And the user state would now be updated by the handleLogin() method
  // console.log('Response')
//  console.log(response.data.articles[1])



  return response.data;
}

// Export the method as an object so that it can be accessible outside this file as a service
// const exportObject = { articlesJson }
export default articlesJson;

// { "articles": [{ "author": "Luke Daugherty", "content": "If you or someone you know is in immediate danger, you should call 911 (or your country's local emergency line) or go to an emergency room to get immediate help. Explain that it is a psychiatric emer… [+9057 chars]", "description": "These seven techniques can help you reduce depression symptoms.", "publishedAt": "2023-03-13T14:00:02Z", "source": [Object], "title": "7 Free Ways to Boost Your Mood if You Have Depression - CNET", "url": "https://www.cnet.com/health/mental/7-free-ways-to-boost-your-mood-and-depression/", "urlToImage": "https://www.cnet.com/a/img/resize/b85c7f2edea9a7d1cd127ae2b7b836767d420cf9/hub/2023/03/06/106068fd-aeae-4551-940b-0b569582105c/gettyimages-908001652.jpg?auto=webp&fit=crop&height=675&width=1200" },