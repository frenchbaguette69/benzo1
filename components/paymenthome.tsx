import { PaymentMethods } from "./paymentmethod";

function PaymentHome() {
    return (<div className="container pt-10">
        <PaymentMethods />
        <h2 className="text-center text-xl mt-4">betaal methodes</h2>
    </div>
    );
}
export default PaymentHome;
