import userRouter from './user';
import product from './product';
import cart from './cart';

/**
 *
 * @param server
 *
 * Add new routes here
 */
const routesHandler = (server) => {
  server.use('/api/user', userRouter);
  server.use('/api/products', product);
  server.use('/api/cart', cart);
};

export default routesHandler;
