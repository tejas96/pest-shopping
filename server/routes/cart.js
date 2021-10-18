import { Router } from 'express';
import { authMiddleware } from '../helper/utilityMethods';
import { cartController } from '../routes-handller';

const router = Router();

router.get('/', authMiddleware, cartController.getCartItemHandler); //
router.get('/:id', authMiddleware, cartController.getSingleCartItemHandler);
router.post('/', authMiddleware, cartController.postCartItemHandler);
router.put('/', authMiddleware, cartController.updateCartItemHandler);
router.delete('/:id', authMiddleware, cartController.deleteCartItemHandler);
export default router;
