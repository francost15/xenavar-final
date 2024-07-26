'use client'
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import {CreateOrderData,CreateOrderActions, OnApproveActions, OnApproveData} from '@paypal/paypal-js'
import { paypalCheckPayment, setTransactionId } from "@/actions";
interface Props {
    orderId:string;
    amount:number;
}
export const PayPalButton = ({amount,orderId}:Props) => {
    const [{isPending}] = usePayPalScriptReducer();
    const roundedAmount = (Math.round(amount * 100)) / 100;
    if (isPending) {
        return (
            <div className="animate-pulse">
                <div className="h-12 bg-gray-300 rounded"/>
                <div className="h-12 bg-gray-300 rounded mt-4"/>
                <div className="mt-2 h-4 bg-slate-200"/>
            </div>
        )
    }
    const createOrder = async(data: CreateOrderData, actions: CreateOrderActions): Promise<string> => {
        const transactionId = await actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {
                    invoice_id: orderId,
                    amount: {
                        value: `${roundedAmount}`,
                        currency_code: "MXN",
                    },
                },
            ],
        });
        const {ok}= await setTransactionId(orderId,transactionId);
        if (!ok){
            throw new Error("No se pudo realizar la orden");
        }
        return transactionId;
    }
    const onAprrove = async(data: OnApproveData, actions: OnApproveActions) => {
        const details = await actions.order?.capture();
        if (!details) return;
        if (details.id) {
            await paypalCheckPayment(details.id);
        } else {
            throw new Error("Transaction details ID is undefined");
        }
    }
    
  return (
    <div className="relative z-0">
        <PayPalButtons
        createOrder={createOrder}
        onApprove={onAprrove} />
    </div>
  )
}
