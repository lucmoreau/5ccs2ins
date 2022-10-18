var express = require('express')
var app = express()
const bodyParser = require('body-parser');


app.set('port', (process.env.PORT || 9090));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.send('Hello World!')
});

app.counters={count:0};

function hostname_and_port(request) {
    return request.hostname;
}

app.post('/resource', function(request, response) {
    console.log("post");
    app.counters.count=app.counters.count+1;
    const v=app.counters.count;
    const protocol="https"; //request.protocol
    response.redirect(303, protocol + "://" + hostname_and_port(request) + request.path + "/" + v);
});

app.get('/resource', function(request, response) {
    console.log("get");
    response.send( "<html>" +
        " <form action='/resource' method='post'>\n" +
        "  <input type='submit' value='Create Resource'>\n" +
        "</form> \n" +
        "<p/>" +
        "<a href='/resource'>Go back to form</a>" +
        "</html>")
});


app.get('/resource/:id', function(request, response) {
    console.log("get");
    let id = request.params.id;


    response.format({

        'text/html': function () {
            response.send('<p>resource indexed: ' + id + '</p>'  +
            "<a href='/resource'>Go back to form</a>" );
        },

        'application/json': function () {
            response.send({resource: id})
        },

        default: function () {
            // log the request and respond with 406
            response.status(406).send('Not Acceptable')
        }
    });
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});



app.get('/exit', function(request, response) {
    response.send('Exiting!')
    process.exit(0);
})


//// example using PUT as requested in class on 13/10/2022
//// we consider here the resource identified by URL path /resource/state/:id
//// GET is used to obtain a JSON representation
//// PUT is used to modify the JSON representation

app.state={};

app.get('/resource/state/:id', function(request, response) {
    console.log("get state");
    let id = request.params.id;


    response.format({


        'application/json': function () {
            response.send(app.state[id])
        },

        default: function () {
            // log the request and respond with 406
            response.status(406).send('Not Acceptable')
        }
    });
});


app.put('/resource/state/:id', function(request, response) {
    console.log("put");
    let id = request.params.id;

    let old_state=app.state[id];


    app.state[id]=request.body;

    response.send(old_state);


});
