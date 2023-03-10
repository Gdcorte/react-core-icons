import { BaseSvg, IconComponent } from "../Base";

const Energy: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/power-cord-icon/
  return (
    <BaseSvg
      iconName="nature-energy"
      className={className}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 417 512.17"
      {...props}
    >
      <path d="M387.65 219.35v48.36c0 48-11.65 86.72-36.24 114.61-22.91 25.99-56.78 42.26-102.6 47.51v82.34h-80.62v-81.55c-47.08-6.33-81.34-21.28-104.19-46.45-23.63-26.04-34.64-62.52-34.62-111.2l.02-53.62h-7.46C9.88 219.35 0 209.47 0 197.41v-25.45c0-12.07 9.88-21.94 21.94-21.94H88.9V34.75C88.9 15.63 104.54 0 123.65 0s34.74 15.66 34.74 34.75v115.27h102V34.75C260.39 15.63 276.02 0 295.14 0c19.11 0 34.75 15.66 34.75 34.75v115.27h65.16c12.07 0 21.95 9.87 21.95 21.94v25.45c0 12.06-9.88 21.94-21.95 21.94h-7.4zm-163.53 40.58h21.11a5.537 5.537 0 0 1 4.6 8.62l-50.26 85.75a5.536 5.536 0 0 1-7.58 1.88 5.537 5.537 0 0 1-2.56-5.85l7.41-52.61-24.99.43a5.538 5.538 0 0 1-5.61-5.43c0-1.06.28-2.04.78-2.89l49.43-85.71a5.518 5.518 0 0 1 7.56-1.95 5.518 5.518 0 0 1 2.65 5.53l-2.54 52.23z" />
    </BaseSvg>
  );
};

export default Energy;
