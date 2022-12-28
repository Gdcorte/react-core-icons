import { BaseSvg, IconComponent } from "../Base";

const RefreshIcon: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/exchange-refresh-icon/

  return (
    <BaseSvg
      iconName="symbols-refresh"
      className={className}
      clipRule="evenodd"
      fillRule="evenodd"
      viewBox="0 0 102.52 122.88"
      {...props}
    >
      <g>
        <path d="M56.9,9.2l-8.75,44.47L39.28,40.3C20.17,47.97,9.44,60.62,7.85,80.09c-15.7-27.44-6.16-52.04,13.73-66.45 L12.52,0L56.9,9.2L56.9,9.2L56.9,9.2L56.9,9.2L56.9,9.2z M45.61,113.68l8.75-44.47l8.87,13.37c19.11-7.67,29.83-20.32,31.43-39.79 c15.7,27.44,6.16,52.04-13.73,66.45l9.05,13.64L45.61,113.68L45.61,113.68L45.61,113.68L45.61,113.68L45.61,113.68z" />
      </g>
    </BaseSvg>
  );
};

export default RefreshIcon;
