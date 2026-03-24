export const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-white py-5">
      <p className="text-center text-lg text-surface-alt">
        {year} TechStation. Todos os direitos reservados.
      </p>
    </div>
  );
};
