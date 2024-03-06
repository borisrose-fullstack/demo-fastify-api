import { SellersService } from "../db/sellers-service.js"

function SellersRoute(fastify, opts, done){

    fastify.get('/sellers', (request, reply) => {
        return {
            sellers: SellersService.fetchSellers() 
        }
    })
    done()

}

export default SellersRoute