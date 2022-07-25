import { Request, Response } from 'express'
import { createOrderService } from '../services/create.order.service'

class OrdersController {
  async insertOrder(request: Request, response: Response) {
    const { cliente, produto, valor } = request.body
    const newOrder = await createOrderService.execute({
      cliente,
      produto,
      valor,
      entregue: false,
    })
    response.send(newOrder)
  }
}

export const ordersController = new OrdersController()
