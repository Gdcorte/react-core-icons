import { BaseSvg, IconComponent } from "../Base";

const Thunder: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/thunder-icon/

  return (
    <BaseSvg
      iconName="nature-thunder"
      className={className}
      clipRule="evenodd"
      fillRule="evenodd"
      viewBox="0 0 82.1 122.88"
      {...props}
    >
      <g>
        <path d="M19.62,0h50.2l-17.5,33.88L82.1,34.4L9.53,122.88l13.96-58.21L0,64.67L19.62,0L19.62,0L19.62,0z M13.92,53.48 l14.65-41.7h22.75L39.49,43.53l17.85,0.3L27.31,88.79l8.95-35.31L13.92,53.48L13.92,53.48L13.92,53.48z" />
      </g>
    </BaseSvg>
  );
};

export default Thunder;
