export const SubscriptionForm = () => {
  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter" className="text-lg text-white font-medium">
        Fique por dentro das novidades de hardware e ofertas exclusivas.
      </label>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          id="newsletter"
          name="newsletter"
          placeholder="email@email.com"
          className="rounded-[30px] bg-white py-3 px-5 placeholder-border-alt text-black flex-1 focus:outline-none focus:ring-2 focus:ring-accent"
        />

        <button
          type="submit"
          className="rounded-[30px] bg-primary hover:bg-accent text-white px-6 py-3 font-medium transition-colors cursor-pointer"
        >
          Receber novidades
        </button>
      </div>
    </form>
  );
};
