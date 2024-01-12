import { OrderStatus, PaymentGateway, PaymentStatus } from '@type/index';

/**
 * Utility method to find out is payment action pending or not
 *
 * @param paymentGateway
 * @param orderStatus
 * @param paymentStatus
 */
export function isPaymentPending(
  paymentGateway: PaymentGateway,
  orderStatus: OrderStatus,
  paymentStatus: PaymentStatus
) {
  const isPaymentCOD = ![PaymentGateway.COD].includes(paymentGateway);
  const isOrderPending = ![OrderStatus.CANCELLED].includes(orderStatus);
  return (
    isPaymentCOD &&
    isOrderPending &&
    paymentStatus !== PaymentStatus.SUCCESS &&
    paymentStatus !== PaymentStatus.AWAITING_FOR_APPROVAL
  );
}
