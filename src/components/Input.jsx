function Input({ title, placeholder }) {
  return (
    <div className="relative justify-center">
      <h3 className="mb-1 xl:mb-2">{title}</h3>
      <input
        type="text"
        placeholder={placeholder}
        className="text-sm focus:outline-none active:outline-none border border-white w-[400px] h-10 xl:h-12 pl-5 bg-neutral-600 rounded-lg"
      />
    </div>
  );
}

export default Input;
