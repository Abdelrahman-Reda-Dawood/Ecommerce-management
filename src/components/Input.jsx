function Input({ title, placeholder, type, value, onChange }) {
  return (
    <div className="relative justify-center font-semibold">
      <h3 className="mb-1 xl:mb-2 text-black dark:text-white">{title}</h3>
      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-multiline
        className="text-sm border w-[400px] xl:h-12 h-10 border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
      />
    </div>
  );
}

export default Input;
