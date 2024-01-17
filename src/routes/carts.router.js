import { Router } from 'express';
import { createCart, getCart,updateCart,deleteCart,deleteProductFromCart,addProductToCart,updateProductInCart, purchase} from '../controllers/carts.controller.js';
import {updateFullCartSchema, getCartByIdSchema,productCartSchema} from "../schemas/carts.schema.js"
import validator from '../middlewares/validator.js';
import {accessRolesEnum} from "../config/enums.js";
import {authorization} from '../utils.js';
import { addLogger } from '../loggers.js';

const router = Router();

router.get("/:cid",validator.params(getCartByIdSchema),addLogger, getCart);

router.post('/',addLogger, createCart);

router.post('/:cid/product/:pid',validator.params(productCartSchema),addLogger,addProductToCart);

router.delete("/:cid", validator.params(getCartByIdSchema),addLogger,deleteCart);

router.delete('/:cid/product/:pid', validator.params(productCartSchema),addLogger,deleteProductFromCart);
        
router.put("/:cid",validator.params(getCartByIdSchema),validator.body(updateFullCartSchema), addLogger,updateCart);
//router.put("/:cid",validator.params(getCartByIdSchema), updateCart);

router.put('/:cid/product/:pid', authorization(accessRolesEnum.USER),addLogger,updateProductInCart);

router.post('/:cid/purchase',validator.params(getCartByIdSchema),addLogger,purchase);

export default router;

// import { Router } from 'express';
// import { createCart, getCart,updateCart,deleteCart,deleteProductFromCart,addProductToCart,updateProductInCart} from '../controllers/carts.controller.js';
// import {updateProductInCartSchema, getCartByIdSchema,productCartSchema} from "../schemas/carts.schema.js"
// import validator from '../middlewares/validator.js';

// const router = Router();

// router.get("/:cid",validator.params(getCartByIdSchema), getCart);

// router.post('/', createCart);

// router.post('/:cid/product/:pid',validator.params(productCartSchema), addProductToCart);

// router.delete("/:cid", validator.params(getCartByIdSchema),deleteCart);

// router.delete('/:cid/product/:pid', validator.params(productCartSchema),deleteProductFromCart);
        
// // router.put("/:cid",validator.params(getCartByIdSchema),validator.body(updateFullCartSchema), updateCart);
// router.put("/:cid",validator.params(getCartByIdSchema), updateCart);

// router.put('/:cid/product/:pid', updateProductInCart);

// export default router;