var articleObj = {};
            var regex = /^(\d{4})$/;
            $('#submit').on('click', function(event){
                event.preventDefault();
                var startYearResult = regex.test($('#startYear').val());
                var endYearResult = regex.test($('#endYear').val());
                var key = "HcGkGuE1viLK9nlhCg5MtDjEtLw3hqCJ";
                var query = $('#search').val();
                if(startYearResult == true && endYearResult == true){
                    console.log(startYearResult);
                    var startYear = $('#startYear').val();
                    var endYear = $('#endYear').val();
                    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=" + key + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231";
                    var data =[];

                    $.ajax({
                    url: queryURL,
                    method: "GET"
                    }).then(function(response) {
                    console.log(response);
                    articleObj = response.response.docs;
                    console.log(articleObj);
                    var limit = $('#numberOf').val();
                    for(var i=0; i < limit; i++){
                        var data = articleObj[i];
                        var articleEl = ('<article>' + articleObj[i].abstract + '</article>');
                        $('#showArticles').append(articleEl);
                        console.log(data);
                    }
                    });
                }
                if($('#startYear').val() == '' && $('#endYear').val() == ''){
                    console.log(startYearResult);
                    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=" + key;
                    var data =[];

                    $.ajax({
                    url: queryURL,
                    method: "GET"
                    }).then(function(response) {
                    console.log(response);
                    articleObj = response.response.docs;
                    console.log(articleObj);
                    var limit = $('#numberOf').val();
                    for(var i=0; i < limit; i++){
                        var data = articleObj[i];
                        var articleEl = ('<article>' + articleObj[i].abstract + '</article>');
                        $('#showArticles').append(articleEl);
                        console.log(data);
                    }
                    });
                }
            });