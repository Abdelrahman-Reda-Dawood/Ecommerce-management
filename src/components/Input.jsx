function Input({ title, placeholder, type, value, onChange }) {
  return (
    <div className="relative justify-center">
      <h3 className="mb-1 xl:mb-2">{title}</h3>
      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-sm focus:outline-none active:outline-none border border-white w-[400px] h-10 xl:h-12 pl-3 bg-neutral-600 rounded-lg"
      />
    </div>
  );
}

export default Input;
