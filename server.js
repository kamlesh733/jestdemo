const restify = require('restify');
const addController = require('./controller/add_controller.js');
const server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.post('/add', (req, res) => {

  // addController.add.bind(addController);

  try {
    const result = addController.add(req.body);
    return res.send(200, { result:result });
  }catch (error){
    switch (error.message){
      case "REST_ERROR_INVALID_INPUT":
       return res.send(400, { messge: error.message });
      default:
       return res.send(500, {code: "UNKNOWN", message: "UNKNOWN"})
    }
  }

});



module.exports = server;
