const PaymentSuccess = () => {
    return (
      <div className="flex justify-center items-center mt-6">
        <div className="border rounded-lg p-6 shadow-lg flex flex-col items-center">
          <span className="text-green-500 text-4xl mb-2">✔</span>
          <p className="text-lg font-semibold">Payment made successfully</p>
        </div>
      </div>
    );
  };
  
  export default PaymentSuccess;
  