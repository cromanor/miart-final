// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var mime = require('mime');
var methodOverride = require('method-override');


// configure app
app.use(bodyParser.urlencoded({ extended: true }));

var port     = process.env.OPENSHIFT_NODEJS_PORT || 8080; // set our port
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users



var mongoose   = require('mongoose');
mongoose.connect('mongodb://root:123456@ds039000.mongolab.com:39000/miart'); // connect to our database





var Bear     = require('./app/models/bear');
var Artist = require('./app/models/artist');
var Museum = require('./app/models/museum');
var Gallery = require('./app/models/gallery');
var Poi = require('./app/models/poi');
var Trivia = require('./app/models/trivia');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening 2.');
	console.log(next);
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// on routes that end in /bears
// ----------------------------------------------------
router.route('/bears')


	// create a bear (accessed at POST http://localhost:8080/bears)
	.post(function(req, res) {

		var bear = new Bear();		// create a new instance of the Bear model
		bear.name = req.body.name;  // set the bears name (comes from the request)

		bear.save(function(err) {
			if (err){
				console.log("Error here");
				res.send(err);
			}

			res.json({ message: 'Bear created!' });
		});

		
	})

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err)
				res.send(err);

			res.json(bears);
		});
	});

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/bears/:bear_id')

	// get the bear with that id
	.get(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			if (err)
				res.send(err);
			res.json(bear);
		});
	})

	// update the bear with this id
	.put(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name;
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
	})

	// delete the bear with this id
	.delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


<!-- ARTISTS API -->
router.route('/artists')
// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		Artist.find(function(err, artists) {
			if (err)
				res.send(err);

			res.json(artists);
		});
	})

	.post(function(req, res) {

		var artist = new Artist();		// create a new instance of the Bear model
		artist.name = req.body.name;  // set the bears name (comes from the request)
		artist.age = req.body.age;
		artist.location = req.body.location;

		artist.save(function(err) {
			if (err){
				res.send(err);
			}

			res.json({ message: 'Artist created!' });
		});

		
	});


<!-- Museum APIS -->

router.route('/museums')
.get(function(req, res) {
		Museum.find(function(err, artists) {
			if (err)
				res.send(err);

			res.json(artists);
		});
	})

<!-- GALLERIES APIS -->

router.route('/galleries')
.get(function(req, res) {
		Gallery.find(function(err, galleries) {
			if (err)
				res.send(err);

			res.json(galleries);
		});
	})

<!-- location APIS -->

router.route('/pois')
.get(function(req, res) {
		Poi.find(function(err, pois) {
			if (err)
				res.send(err);

			res.json(pois);
		});
	})


<!-- Trivias APIS -->

router.route('/trivias')
.get(function(req, res) {
		Trivia.find(function(err, pois) {
			if (err)
				res.send(err);

			res.json(pois);
		});
	})


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

// START THE SERVER
// =============================================================================
app.listen(port,server_ip_address);
console.log('Magic happens on port ' + port);
