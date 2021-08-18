const database = firebase.database()

let getPosts =() =>{
    let url = "http://localhost:8080/posts"
    $.ajax({
        method: "GET",
        url: url,
        success: response => {
            console.log(response)
            generatePostViews(response.data.posts)
        },
        error: error => {
            console.log("hay un error ")
            console.log(error)
        },
        async: true
    })
}

const generatePostViews = (rawDataOfArticles)=>{
    
    const sortedArticles = 
    rawDataOfArticles.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        //return new Date(a.published_at).getTime() > new Date(b.published_at).getTime() ;
        new Date(a.created).getTime() - new Date(b.created).getTime() 
      });
    
      
    tabFilters = [
        {
            domComponent: $("#nav-feed"),
            filterFunction: (article) =>{
                return article.commentsCount > 0;
            }
        },
        {
            domComponent: $("#nav-week"),
            filterFunction: (article) =>{
                let publishedDate = new Date(article.created)
                let currentDate = new Date(new Date() - 7);
                let evaluation =  publishedDate.getTime() < currentDate.getTime()
                return evaluation;
            }
        },
        {
            domComponent: $("#nav-month"),
            filterFunction: (article) =>{
                let publishedDate = new Date(article.created)
                let currentDate = new Date(new Date() - 30);
                let evaluation =  publishedDate.getTime() < currentDate.getTime()
                return evaluation;
            }
        },
        {
            domComponent: $("#nav-year"),
            filterFunction: (article) =>{
                let publishedDate = new Date(article.created)
                let currentDate = new Date(new Date() - 365);
                let evaluation =  publishedDate.getTime() < currentDate.getTime()
                return evaluation;
            }
        },
        {
            domComponent: $("#nav-infinity"),
            filterFunction: (article) =>{
                return true;
            }
        },
        {
            domComponent: $("#nav-latest"),
            filterFunction: (article,index) =>{
                return index < 10;
            }
        },
        //nav-month
    ]
    
   
    for (filterIndex in tabFilters){
        var tabContainertabFilters = tabFilters[filterIndex].domComponent
        let count = 0;
        var articles = sortedArticles.filter( tabFilters[filterIndex].filterFunction )
        for(articleId  in articles){
            let template = createArticleTemplate(articles[articleId], count == 0)
            tabContainertabFilters.prepend(template)
            count++
        }
    }

/*
        for(index  in rawData){
            let template = createArticleTemplate(rawData[index], index == 0)
            tabContainertabFilters.prepend(template)
            count++
        }*/
    
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//var user = randomUsers[getRandomInt(randomUsers.length)]
/*
database.ref("/articles").on("value",snapshot=>{
    const rawDataOfArticles = snapshot.val()
    
})
*/


const createArticleTemplate = (post,displayFeaturedImage) => {
    let {commentsCount=0, featuredImage="", summary="", created="" ,_id ,tags=[] ,title="" ,user={},  } = post
    let articleTemplate = `
    <div class="card br-post post-card featured-post-card mb-3">
        ${displayFeaturedImage ? `<img src="${featuredImage}" class="card-img-top" alt="...">`:''}
        <div class="card-body">
            <div class="d-flex c-header">
                <img src="${user.profileImage}" alt="" class="br-100">
                <div class="d-flex c-name">
                    <h6 class="nickname mb-0">${user.firstName + user.lastName}</h6>
                    <p>${new Date(created)}</p>
                </div>
            </div>
            <div class="card-content pl-5 pt-2">
                <a href="postDetail.html?articleId=${_id}&devToId=${_id}" class="post-list">
                    <h4 class="card-title">${title}</h4>
                </a>
                <div class="d-flex h-order">
                    <nav class="card-post-tags">
                        ${ tags.map(text => `<a>#${text}</a>`).join("") }
                    </nav>
                </div>
                <div class=" d-flex read">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" role="img"
                            aria-labelledby="aavwx5vmqdgx8wvzfg593jo469ge3dnz"
                            class="crayons-icon mb-1">
                            <title id="aavwx5vmqdgx8wvzfg593jo469ge3dnz">
                                Comments</title>
                            <path
                                d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                            </path>
                        </svg>
                        <button class="comment">Add comment</button>
                    </div>
                    <div class="d-flex">
                        <p class="card-text mb-0"><small class="text-muted">7
                                min read</small></p>
                        <button class="save">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    return articleTemplate
}
getPosts()