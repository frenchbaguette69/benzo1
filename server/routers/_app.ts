import { userRouter } from './user/user.router';
import { router } from '../trpc';
import { productRouter } from './product/product.router';
import { orderRouter } from './order/order.router';
import { orderProductRouter } from './order/orderproduct.router';


export const appRouter = router({
    userRouter,
    productRouter,
    orderRouter,
    orderProductRouter
});

export type AppRouter = typeof appRouter;