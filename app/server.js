import Fastify from "fastify";
import cors from "cors";
import serveStatic from "serve-static";
import path from "node:path";

const fastify = Fastify({
  logger: true,
});

fastify.log.info("✅ registers");

await fastify.register(import("@fastify/express"));
fastify.use(cors());
fastify.use(["/public/(.*)", "/app"], serveStatic(path.join("./", "assets")));

fastify.setErrorHandler(function(error, request, reply){

  request.log.warn(error)
  const statusCode = error.statusCode >= 400
                      ? error.statusCode
                      : 500
  reply
    .code(statusCode)
    .type('text/plain')
    .send(statusCode >= 500 ? 'Internal Server error' : error.message)

})

fastify.setNotFoundHandler(function(request, reply){
  request.log.warn(error)
  reply
    .code(404)
    .type('text/plain')
    .send('404 Not Found')

})

fastify.register(import("./plugins/products.js"), { prefix: "/api" });
fastify.register(import("./routes/sellers.js"), { prefix: "/api" });

try {
  await fastify.listen({ port: 3000 });
} catch {
  fastify.log.error(err);
  process.exit(1);
}



// fastify.get('/stories', function(req, reply){

//   const file = path.resolve('./stories/test.txt');

//   const stream = fs.createReadStream(file, 'utf8');

//   reply
//     .type('application/octet-stream')
//     .send(stream)

// })

// const options = {
//   schema: {
//     response: {
//       200: {
//         type: 'object',
//         properties: {
//           message: { type :'string'}
//         }
//       }
//     }
//   }

// }

// fastify.decorate('test', function test(){
//   return 'Route protected'
// })

// //root path
// fastify.get('/', options, function(req, reply) {

//   reply
//     .code(200)
//     .type('application/json;charset=utf-8')
//     .header('set-cookie', 'BARZ2323232')
//     .send({
//       message: reply.server.test()
//     })

// })

// //exemple de route
// fastify.route({

//   method: 'GET',
//   url: '/api/products',
//   schema: {
//     querystring: {

//     },
//     response: {
//       200: {
//         type:'object',
//         properties: {
//           products : { type:'array' },
//           message: {type: 'string'}
//         }
//       }
//     }
//   },
//   handler: function(request, reply){
//     return {
//       products: ProductsService.fetchProducts(),
//       message: reply.server.test()
//     }
//   }

// })

// //deuxième exemple de route, version abrégée

// const opts = {
//   schema: {
//     response: {
//       200: {
//         type: 'object',
//         properties: {
//           sellers: { type: 'array'}
//         }
//       }
//     }
//   }
// }

// fastify.get('/api/sellers', opts, (request, reply) => {

//   reply.hijack()
//   reply.raw.end('Your need a token to access that data')

//   return {
//     sellers : SellersService.fetchSellers()
//   }
// })
