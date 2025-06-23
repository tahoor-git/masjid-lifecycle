import PropTypes from "prop-types";

export const Card = ({
  title = "New Task",
  count = "0",
  icon = "https://img.icons8.com/color/48/task.png",
  bgColor = "bg-white",
  textColor = "text-gray-700",
  countColor = "text-amber-500",
  className = "",
}) => {
  return (
    <div
      className={`rounded-md shadow-md p-6 ${bgColor} ${className} font-sans`}
    >
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h3
            className={`text-base md:text-lg lg:text-xl font-medium ${textColor}`}
          >
            {title}
          </h3>
          <p
            className={`text-2xl md:text-3xl lg:text-4xl font-bold ${countColor}`}
          >
            {count}
          </p>
        </div>
        <div className="bg-white/50 p-3 rounded-full backdrop-blur-sm">
          <img src={icon} alt={title} className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  countColor: PropTypes.string,
  className: PropTypes.string,
};
