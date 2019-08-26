
$(document).ready(() => {
    $("#submit").click((e) => {
        e.preventDefault();
        const query = $("#search").val();
        const startyr = $("#startYr").val();
        const endyr = $("#endYr").val();
        const records = $("#records").val();
        let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=PxcY2DIl1gMaBtEvjfHuFRF9vEXgLaKi"
        if(startyr) {
            url+="&begin_date="+startyr+"0101";
        }
        if(endyr) {
            url+="&end_date="+endyr+"1231";
        }
        $.ajax(url).then(
        (a) => {
            console.log(a);
            for(i = 0; i < 10; i++) {
                currentArticle = a.response.docs[i];
                const article = $("<div>");
                const thumbnail = $("<img>");
                const headline = $("<h4>");
                const link = $("<a>");
                const byline = $("<p>");
                const snippet = $("<p>");
                link.text(currentArticle.headline.main);
                link.attr("href", currentArticle.web_url);
                headline.append(link);
                byline.text(currentArticle.byline.original);
                snippet.text(currentArticle.snippet);
                thumbnail.attr("src", "https://nytimes.com/"+currentArticle.multimedia[15].url);
                article.append(thumbnail);
                article.append(headline);
                article.append(byline);
                article.append(snippet);
                $("#toparticles").append(article);
            }
        });
    });            
});
