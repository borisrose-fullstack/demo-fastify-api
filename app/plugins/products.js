import { ProductsService } from "../db/products-service.js"


function productsPlugin(ftf, opts, done){

    ftf.decorate('products', function(){
        return 'Products Plugin Decorator'
    })

    ftf.get('/products',(request, reply) => {
        request.log.info('✅ /api/products')
        return {
            products: ProductsService.fetchProducts()
        }

    })

    done()


}

export default productsPlugin



