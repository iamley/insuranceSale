const jsonServer = require('json-server');
const path = require('path');
const delay = require('express-delay');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = 8080;

// Delay all responses for 1 second
//server.use(delay(1000));

server.use(middlewares);

server.use(jsonServer.rewriter({
  '/ms-vehicle-insurance/api/v1/*': '/$1',
  '/license-plates/:key': '/license-plates?key=:key',
  '/license-plate/price/:typeVehicleId': '/license-plate-price?type_vehicle=:typeVehicleId',
  '/make-vehicles/:typeId': '/make-vehicles?type_vehicle=:typeId',
  '/model-vehicles/:makeVehicleId': '/model-vehicles?make_vehicle=:makeVehicleId'
}));

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

router.render = (req, res) => {
  if (res.locals.data.length === 0){
    res.status(404).send({
      notifications: [
        {
          code: "E422CDNPAYRCPTG001",
          message: "Something is invalid",
          uuid: "aadde-ddddee-eeeedd-eeeedd",
          timestamp: new Date()
        }
      ]
    });
  }

  if (res.locals.data.length === 1){
    res.jsonp(...res.locals.data);
  } else {
    res.jsonp({ data: res.locals.data });
  }
};

server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running in http://localhost:${PORT}/`);
});
