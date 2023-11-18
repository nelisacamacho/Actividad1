//? Entregable 1
//** Realizar una clase “ProductManager” que gestione un conjunto de productos.

//? Aspectos a incluir
    //* Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
    //* Cada producto que gestione debe contar con las propiedades:
        //? title (nombre del producto)
        //? description (descripción del producto)
        //? price (precio)
        //? thumbnail (ruta de imagen)
        //? code (código identificador)
        //? stock (número de piezas disponibles)
    //* Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
        //? Validar que no se repita el campo “code” y que todos los campos sean obligatorios
        //? Al agregarlo, debe crearse con un id autoincrementable
    //* Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
    //* Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
        //? En caso de no coincidir ningún id, mostrar en consola un error “Not found”

//! Formato del entregable
    //* Archivo de Javascript listo para ejecutarse desde node.
    class ProductManager {
        #products
    
        constructor() {
            this.#products = [];
        }
    
        static id = 0;
    
        addProduct(title, description, price, thumbnail, code, stock) {

            if(!title || !description || !price || !thumbnail || !code || !stock) {
                console.log('All fields are required, please verify.');
                return false;
            }

            if(this.#products.some(product => product.code === code)) {
                console.log(`Code ${code} already exists, please verify.`);
                return false;
            }

            ProductManager.id++;
            const product = {
                id: ProductManager.id,
                title, 
                description, 
                price,
                thumbnail, 
                code, 
                stock
            }
            this.#products.push(product);
        }
    
        getProducts() {
            return this.#products;
        }
        
        getProductById(productId) {
            return this.#products.find(product => product.id === productId) ?? `Not found`;
        }
        
        // getProductByCode(productCode) {
        //     return this.#products.find(product => product.code === productCode)
        // }
    }
    
    const productManager = new ProductManager();
    productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
    productManager.addProduct('producto prueba', 'Este es un producto prueba', 'Sin imagen', 'abc124');
    productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
    productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc124', 50);
    console.log(productManager.getProductById(3));
    console.log(productManager.getProductById(2));
    console.log(productManager.getProducts());
    
    