import PropTypes from "prop-types";

const ProgressBar = ({ label, percentage, color }) => {
  return (
    <div className="font-sans">
      <div className="flex justify-between mb-1">
        <span className="text-sm md:text-base lg:text-lg text-gray-600 font-normal">
          {label}
        </span>
        <span className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export const ProgressSection = ({ title, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 font-sans">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <ProgressBar
            key={index}
            label={item.label}
            percentage={item.percentage}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

ProgressSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
