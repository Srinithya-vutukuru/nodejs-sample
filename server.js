var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
     'article-one':{
      title:'article-one | nithya',
      heading:'Article One',
      date:'dec 10,2016',
      content:`  
                <p>
                    this is my first webpage.
                </p>`
      
        
    },
    'article-two':{
      title:'article-two | nithya',
      heading:'Article two',
      date:'dec 10,2016',
      content:`  
                <p>
                    this is my second webpage.
                </p>`
      
        
    },
    'article-three':{
      title:'article-three | nithya',
      heading:'Article three',
      date:'dec 10,2016',
      content:`  
                <p>
                    this is my third webpage.
                </p>`
      
        
    }
};
function createTemplate(data){
    var date=data.date;
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title> 
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
           <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="content">
                <div class="center big bold">
                    <a href="/">HOME</a> 
                </div>
                <hr/>
                <h3 class="center text-big bold">
                    ${heading}
                </h3>
                <div class="center text-big bold">
                    ${date}
                </div>
            
                <div class="center text-big bold">
                  ${content}
                    
                </div>
            </div>
        </body>
        
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});
