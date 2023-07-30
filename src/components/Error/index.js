const Error = function (props) {
  const { error } = props || {};

  return error ? (
    <div className="w-full text-[20px] text-[#e71919] text-left">{error}</div>
  ) : null;
};

export default Error;
