import { Router } from 'express';
import product from '../routes-handller/product';
import { authMiddleware } from '../helper/utilityMethods';

const router = Router();

router.get('/', product.getAllProductsHandler);
router.get('/:id', product.getProduct);
router.post('/', product.getProducts);
router.post('/search', product.getSearchProducts);
export default router;
