import React,{useEffect,useState} from 'react';

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
//Here we have defined default props so that if user does not define any props then the default value of the props can get execute.
// export default class News extends Component {
  const News=(props)=>
{
  // In Class-based components propTypes are declared at the starting only.

  // static defaultProps = {
  //   country: "in",
  //   pageSize: 8,
  //   category: "general",
  // };
  // Here we have defined the prop type so that user cannot enter invalid value ie in pageSize value should only be number not string.Defining prop types will help us to overcome such problems.
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

  // Statically using the data.If we want to fetch data from our pre defined record ie statically then we will create its object as given below.

  // articles=[
  //   {
  //     "source": { "id": "independent", "name": "Independent" },
  //     "author": "Sports Staff",
  //     "title": "Queen’s death: Cricket and football matches called off as Premier League to make decision on weekend fixtures",
  //     "description": "Does sport still take place now the Queen has died?",
  //     "url": "http://www.independent.co.uk/sport/queen-death-football-premier-league-b2162749.html",
  //     "urlToImage": "https://static.independent.co.uk/2022/09/08/18/SEI124032299-1.jpg?quality=75&width=1200&auto=webp",
  //     "publishedAt": "2022-09-08T21:19:04Z",
  //     "content": "Queen Elizabeth II, Britains longest-serving monarch, has died at the age of 96.\r\nA period of mourning is underway in what is an unprecedented time for the country.\r\nIt may also have an impact on pro… [+3962 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]

  //While declaring constructor we always have to first call the super() function otherwise the program will give the error.
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // Defining states in functional-based components.
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // constructor(props) {
  //   super(props);
  //   // Syntax for declaring state in class based components.
  //   // It is similar to useState hook as in Function Based components.
  //   this.state = {
  //     // articles:this.articles,      //This is when we are statically fetching data.
  //     articles: [], //This is when we are dynamically fetching data.
  //     loading: true,
  //     page: 1,
  //     totalResults: 0,
  //   };
  //   document.title = `${this.capitalizeFirstLetter(
  //     props.category
  //   )}-NewsMonkey`;
  // }

  // componentDidMount is a life-cycle which gets executed after render() function.

  // async function is used bcz it help the program to wait until the promises is resolved.

  // Here we are dynamically fetching our datasets from the API.

  // async componentDidMount()= {
  //     this.updateNews();
  //   }

  // In Functional-based components we use useEffect for performing the task done by the componentDidMount().

  useEffect(() => {
    return () => {
      document.title = `${this.capitalizeFirstLetter(props.category)}-NewsMonkey`;
      updateNews();
    };
  }, []);

  // We have made the async function so that program can wait until the promises is resolved.
  // handlePrevClick = async () => {
  // console.log("Previous");
  // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   props.country
  // }&category=${
  //   props.category
  // }&apiKey=1804682b482645ef97552c4ddda19db0&page=${
  //   this.state.page - 1
  // }&pageSize=${props.pageSize}`;
  // // Here we are reducing the page so that we can return to previous page on clicking previous button.
  // this.setState({ loading: true });
  // // Here we have set loading state to true so that processing/loading of site can be displayed.
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // this.setState({
  //   page: this.state.page - 1,
  //   // Here we are modifying the page in our state.
  //   articles: parsedData.articles,
  //   loading: false,
  //   // After processed we have again set the loading state to false.
  // });

  //   this.setState({ page: this.state.page-1 });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   this.setState({page:this.state.page +1});
  //   this.updateNews();

  // };

  // Here instead of writting same code in componentDidMount,handleNext and handlePrev function we have created a function updateNews() which will be doing the same repeated task with some modification respectively.
  const updateNews = async () => {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1804682b482645ef97552c4ddda19db0&page=${this.state.page}&pageSize=${props.pageSize}`;d093053d72bc40248998159804e0e67d
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });

    setLoading(true);
    // Fetching the data from url.In fetch function always the url is passed as an argument.
    let data = await fetch(url);
    // await allow the program to wait until the promises is resolved.
    props.setProgress(30);
    let parsedData = await data.json();
    // parsing the data into JSON file.
    // Updating or modifying the state data using setState.
    // It is similar to useState hook as in Function Based components.
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    // This is example of setting state in class-based component.

    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    //totalResults is the variable in our API which tells us about the total articles in our API.
    props.setProgress(100);
  };

  // Here we will be using latest concept of Infinite Scrolling instead of old concept of Previous and Next button.

  const fetchMoreData = async () => {
    // this.setState({
    //   page: this.state.page + 1,
    // });

    
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1804682b482645ef97552c4ddda19db0&page=${this.state.page}&pageSize=${props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });
  };

  // render() {
  return (
    <div className="container my-3">
      <h1 className="text-center">
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {/* Here we are checking whether the loading state is true or not.If true then we will show the spinner which will represent the loading */}
      { loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {/* Here we are checking that if our state is not in loading phase ie loading is false then we will display data otherwise we will not display the data. */}
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  // slice is used to limit the characters in the title.
                  // Means it will allow to display 45 characters only.
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* In Old Methods,we were using Previous and Next button concept.But now,we use the concepts of Infinite Scroll.  */}
      {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            //Here we are checking if our page count exceed the required total pages or not.If yes,then we will not move to next page. For required total pages we are first calculating the number of pages required to completely represent our data by dividing the total articles ie totalResult with the number of articles in each page ie 20 and taking its ceil value.Then if our page count exceed that value then we are disabling the button.
          >
            Next&rarr;
          </button>
        </div> */}
    </div>
  );
}
  // }
// }
export default News
// In Functional-based components propTypes are declared at the end of the function.
 News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };



