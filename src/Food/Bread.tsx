import { BaseSvg, IconComponent } from "../Base";

const Bread: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/toast-icon/

  return (
    <BaseSvg
      iconName="food-beef"
      className={className}
      fillRule="evenodd"
      viewBox="0 0 122.88 106.25"
      {...props}
    >
      <path d="M119.25,38.58c1.07,7-1.51,15.92-13.64,22.21V96.56c-.67,4.58-2.81,5.75-8.75,5.77H32.8c-6.76-.12-7.7-1.55-7.93-5.77V60.23C13.75,55.09,11.33,47.1,11.61,40.16c.94-23.23,26.59-36.88,54-36.76,26.79.11,50.16,12.21,53.68,35.18ZM83.23,50A10.75,10.75,0,1,1,72.48,60.73,10.74,10.74,0,0,1,83.23,50ZM76.45,79.41a3.88,3.88,0,1,1-3.88,3.88,3.88,3.88,0,0,1,3.88-3.88Zm-26-14.78a7,7,0,1,1-7,7,7,7,0,0,1,7-7Zm.07-31.87a6.62,6.62,0,1,1-6.62,6.62,6.62,6.62,0,0,1,6.62-6.62Zm-20.21-.52A3.27,3.27,0,1,1,27,35.5a3.26,3.26,0,0,1,3.26-3.26Zm66,2a5.49,5.49,0,1,1-5.49,5.49,5.49,5.49,0,0,1,5.49-5.49Zm-25.55-16A4.72,4.72,0,1,1,66,22.93a4.72,4.72,0,0,1,4.72-4.72Zm22.73,87.54a23.07,23.07,0,0,1-5.15.49H23.92c-3.94-.1-6.35-.69-8-2-2-1.61-2.48-3.67-2.64-6.64v-.15h0V63A24.79,24.79,0,0,1,2.76,53.21,23,23,0,0,1,0,40.9C.52,28.75,7.1,19,17.07,12.25,25.8,6.31,37.16,2.62,49.23,1.55A82.45,82.45,0,0,1,65.59,0c14.6.06,28.29,3.56,38.61,10.33C114,16.73,120.78,26,122.62,38.07a21.71,21.71,0,0,1-3,14.85A29.39,29.39,0,0,1,109,62.79V96.56a3.53,3.53,0,0,1-.08.72c-.5,3.19-1.65,5.3-3.9,6.74-2,1.26-4.56,1.7-8.17,1.71h0v0Z" />
    </BaseSvg>
  );
};

export default Bread;
