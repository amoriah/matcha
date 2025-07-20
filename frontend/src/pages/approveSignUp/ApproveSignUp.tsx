export const ApproveSignUp = () => {
  return (
    <div className="w-full h-full flex items-start pt-36 justify-center ">
      <div className="flex flex-col items-center gap-8 p-6 border border-gray-100 rounded-lg shadow-2xl">
        <div className="gap-2 w-80 text-center">
          <h2 className="text-3xl mb-2">You're almost done!</h2>
          <p className="text-2xl text-gray-600 align-middle">
            We have sent a link to your email to confirm your registration.{' '}
            <p>Please follow the link to complete the procedure.</p>
          </p>
        </div>
      </div>
    </div>
  );
};
