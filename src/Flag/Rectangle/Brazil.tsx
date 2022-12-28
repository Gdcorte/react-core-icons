import styled from "styled-components";
import { BaseSvg, IconComponent } from "../../Base";

const StyledBaseSvg = styled(BaseSvg)`
  .flag-brazil-white {
    fill: #fff;
  }

  .flag-brazil-green {
    fill: #056729;
  }

  .flag-brazil-yellow {
    fill: #fedf00;
  }

  .flag-brazil-blue {
    fill: #002776;
  }
`;

const Brazil: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/brazil-flag-icon/

  return (
    <StyledBaseSvg
      iconName="flag-rectangle-brazil"
      className={className}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 169.701 127.846"
      {...props}
    >
      <g transform="matrix(1, 0, 0, 1, -3.3241489435202993, -6.458581293597177)">
        <path
          className="flag-brazil-green"
          d="M 12.322 6.325 L 163.801 6.325 C 168.95 6.325 173.143 10.855 173.143 16.418 L 173.143 124.114 C 173.143 129.677 168.95 134.208 163.801 134.208 L 12.322 134.208 C 7.173 134.241 2.98 129.711 2.98 124.148 L 2.98 16.418 C 2.98 10.855 7.173 6.325 12.322 6.325 Z"
        />
        <polygon
          className="flag-brazil-yellow"
          points="16.053 70.283 88.077 119.95 160.101 70.283 88.077 20.615 16.053 70.283"
        />
        <g transform="matrix(0.357725, 0, 0, 0.340583, -17.758181, -32.284908)">
          <path
            className="flag-brazil-blue"
            fillRule="nonzero"
            d="M 294.297 214.664 C 340.097 214.664 377.217 251.784 377.217 297.584 C 377.217 343.384 340.097 380.524 294.297 380.524 C 248.497 380.524 211.367 343.384 211.367 297.584 C 211.367 251.784 248.497 214.664 294.297 214.664 Z"
          />
          <path
            className="flag-brazil-white"
            fillRule="nonzero"
            d="M 218.447 264.094 C 227.707 262.744 237.207 262.064 246.907 262.064 C 296.227 262.064 341.347 279.834 376.377 309.214 C 375.797 313.754 374.777 318.124 373.437 322.344 C 339.927 292.204 295.547 273.844 246.907 273.844 C 235.707 273.844 224.667 274.864 213.977 276.714 C 215.147 272.344 216.667 268.134 218.447 264.094 Z"
          />
          <path
            className="flag-brazil-green"
            d="M 223.397 271.914 C 224.587 271.744 225.347 270.574 225.177 269.224 C 224.997 267.874 223.907 266.864 222.817 267.034 C 221.717 267.194 220.887 268.384 221.057 269.734 C 221.217 271.074 222.227 271.994 223.397 271.914 Z M 367.037 312.414 C 367.957 313.074 369.397 312.834 370.237 311.724 C 371.077 310.634 371.077 309.214 370.137 308.534 C 369.297 307.784 367.797 308.114 367.037 309.214 C 366.097 310.224 366.097 311.724 367.037 312.414 Z M 366.097 313.584 C 367.617 314.844 369.977 314.434 371.327 312.744 C 372.677 311.064 372.497 308.704 370.997 307.434 C 369.477 306.184 367.117 306.594 365.767 308.294 C 364.427 309.974 364.597 312.334 366.097 313.584 Z M 358.107 304.494 C 357.697 305.174 358.027 305.934 358.947 306.514 C 359.877 307.184 360.547 307.184 360.797 306.774 C 361.727 305.424 356.857 303.244 358.527 300.964 C 359.957 299.024 362.157 300.704 362.997 301.294 C 363.837 301.894 365.107 303.404 363.997 304.924 L 362.567 303.904 C 363.077 303.244 362.567 302.564 361.907 301.974 C 361.227 301.464 360.637 301.214 360.127 301.894 C 359.287 302.894 364.087 305.254 362.487 307.534 C 361.307 309.214 359.367 308.374 358.197 307.434 C 357.107 306.694 355.587 304.924 356.757 303.324 L 358.107 304.494 Z M 349.697 298.854 C 349.267 299.534 349.697 300.274 350.617 300.884 C 351.547 301.464 352.217 301.464 352.467 301.044 C 353.307 299.694 348.347 297.684 349.857 295.324 C 351.197 293.294 353.477 294.894 354.317 295.404 C 355.157 295.904 356.507 297.334 355.487 298.934 L 354.067 298.014 C 354.497 297.254 353.987 296.584 353.227 296.164 C 352.467 295.734 351.877 295.484 351.457 296.164 C 350.697 297.254 355.587 299.364 354.147 301.724 C 353.057 303.474 351.117 302.734 349.777 301.884 C 348.677 301.214 347.077 299.534 348.097 297.844 L 349.697 298.854 Z M 338.147 294.994 L 344.297 298.524 L 345.057 297.254 L 340.007 294.384 L 341.017 292.634 L 344.977 294.814 L 345.557 293.644 L 341.697 291.444 L 342.447 290.094 L 347.157 292.714 L 347.917 291.444 L 342.027 288.164 L 338.147 294.994 Z M 335.207 293.474 C 335.597 292.674 336.357 291.154 335.937 290.164 C 336.737 290.064 337.467 289.594 337.897 288.844 C 338.497 287.574 337.987 286.134 336.807 285.474 L 332.767 283.444 L 329.157 290.444 L 330.497 291.114 L 331.747 288.494 L 334.537 289.934 L 334.587 289.954 C 334.887 291.034 334.287 292.254 333.957 292.884 L 335.207 293.474 Z M 332.437 287.154 L 335.127 288.494 C 335.627 288.754 336.217 288.594 336.467 288.084 C 336.727 287.574 336.547 286.974 335.967 286.744 L 333.277 285.394 L 332.437 287.154 Z M 327.047 285.144 L 328.137 285.644 L 328.067 285.834 L 327.967 286.014 L 326.547 289.254 L 325.447 288.754 L 325.827 287.884 C 325.037 288.184 324.147 288.184 323.347 287.834 C 321.487 287.074 320.727 284.794 321.647 282.784 C 322.487 280.754 324.687 279.744 326.447 280.594 C 327.887 281.184 328.647 282.684 328.477 284.284 L 327.047 283.624 C 326.957 282.864 326.547 282.194 325.857 281.944 C 324.847 281.434 323.497 282.104 322.997 283.364 C 322.407 284.634 322.757 285.984 323.847 286.484 C 324.627 286.774 325.467 286.584 326.117 285.984 L 324.947 285.474 L 325.357 284.454 L 326.777 285.064 L 326.797 285.044 L 327.047 285.154 L 327.047 285.144 Z M 314.487 282.684 C 315.597 283.114 316.847 282.354 317.277 281.084 C 317.787 279.834 317.277 278.394 316.187 278.064 C 315.097 277.634 313.827 278.394 313.397 279.664 C 312.887 280.924 313.397 282.274 314.487 282.684 Z M 313.997 284.034 C 315.857 284.714 317.947 283.624 318.707 281.594 C 319.467 279.584 318.627 277.304 316.767 276.634 C 314.917 275.954 312.807 277.044 312.057 279.074 C 311.287 281.184 312.147 283.364 313.997 284.034 Z M 307.507 281.764 C 307.777 280.914 308.297 279.294 307.747 278.374 C 308.587 278.204 309.327 277.574 309.617 276.714 C 310.037 275.444 309.277 274.024 308.017 273.594 L 303.717 272.244 L 301.107 279.744 L 302.547 280.164 L 303.467 277.384 L 306.427 278.294 C 306.887 279.294 306.477 280.614 306.257 281.334 L 307.507 281.764 Z M 303.797 275.954 L 306.667 276.894 C 307.177 277.044 307.757 276.794 307.937 276.204 C 308.116 275.666 307.804 275.089 307.257 274.944 L 304.407 274.024 L 303.797 275.954 Z M 293.947 273.264 L 296.897 274.024 C 297.407 274.104 298.007 273.844 298.167 273.264 C 298.257 272.754 298.007 272.174 297.407 271.994 L 294.457 271.234 L 293.947 273.264 Z M 291.437 277.144 L 292.857 277.474 L 293.617 274.604 L 296.657 275.374 C 298.007 275.704 299.347 274.944 299.687 273.594 C 300.017 272.244 299.257 270.904 297.907 270.574 L 293.537 269.394 L 291.437 277.144 Z M 276.457 274.184 L 282.247 275.194 L 282.497 273.844 L 277.957 273.084 L 278.307 271.334 L 281.917 271.914 L 282.167 270.654 L 278.557 269.984 L 278.717 268.714 L 283.107 269.474 L 283.357 268.134 L 277.627 267.194 L 276.457 274.184 Z M 260.027 272.344 L 261.377 272.504 L 261.887 267.034 L 262.977 272.584 L 264.237 272.754 L 266.257 267.454 L 265.747 272.834 L 267.097 272.934 L 267.857 265.094 L 265.837 264.934 L 263.817 270.144 L 262.717 264.674 L 260.787 264.504 L 260.027 272.344 Z M 250.007 271.914 L 257.167 272.174 L 257.167 270.744 L 251.447 270.494 L 251.527 268.464 L 255.987 268.634 L 256.067 267.294 L 251.527 267.114 L 251.607 265.514 L 257.007 265.774 L 257.087 264.254 L 250.357 263.994 L 250.007 271.914 Z M 241.417 270.494 L 243.527 270.494 C 244.697 270.494 245.637 269.474 245.637 268.294 L 245.637 267.624 C 245.637 266.434 244.617 265.514 243.447 265.514 L 241.247 265.594 L 241.417 270.494 Z M 239.997 271.994 L 243.707 271.914 C 245.557 271.834 247.057 270.314 247.057 268.464 L 247.057 267.374 C 247.057 265.514 245.457 263.994 243.607 263.994 L 239.897 264.094 L 239.997 271.994 Z M 236.707 272.174 C 236.637 271.314 236.517 269.554 235.637 268.944 C 236.307 268.464 236.737 267.654 236.627 266.784 C 236.547 265.444 235.357 264.424 234.007 264.504 L 229.557 264.834 L 229.977 272.674 L 231.397 272.584 L 231.237 269.634 L 234.277 269.384 C 235.137 270.124 235.247 271.534 235.357 272.344 L 236.707 272.174 Z M 231.157 268.134 L 234.187 267.954 C 234.767 267.874 235.197 267.454 235.107 266.864 C 235.107 266.274 234.617 265.854 234.007 265.934 L 230.987 266.184 L 231.157 268.134 Z M 223.577 273.344 C 225.507 273.084 226.947 271.154 226.597 268.974 C 226.347 266.784 224.587 265.264 222.557 265.514 C 220.627 265.774 219.287 267.704 219.537 269.884 C 219.867 271.994 221.647 273.594 223.577 273.344 Z"
          />
          <path
            className="flag-brazil-white"
            fillRule="nonzero"
            d="M 226.597 279.154 L 227.407 281.594 L 229.977 281.594 L 227.917 283.114 L 228.707 285.554 L 226.617 284.074 L 224.507 285.554 L 225.647 283.364 L 223.247 281.594 L 225.807 281.594 L 226.597 279.154 Z M 317.947 274.784 L 318.767 272.294 L 316.597 270.824 L 319.227 270.824 L 320.047 268.294 L 320.807 270.824 L 323.427 270.824 L 321.267 272.294 L 322.077 274.784 L 320.017 273.264 L 317.947 274.784 Z M 236.037 320.404 L 235.247 317.964 L 237.307 316.444 L 234.727 316.444 L 233.927 314.014 L 233.157 316.444 L 230.557 316.444 L 232.617 317.964 L 231.827 320.404 L 233.927 318.924 L 236.037 320.404 Z M 293.617 363.434 L 293.877 362.564 L 293.207 362.084 L 294.047 362.084 L 294.297 361.234 L 294.537 362.084 L 295.397 362.084 L 294.707 362.574 L 294.967 363.434 L 294.297 362.944 L 293.617 363.434 Z M 258.937 344.474 L 259.727 341.974 L 257.667 340.534 L 260.237 340.534 L 261.047 338.004 L 261.847 340.534 L 264.397 340.534 L 262.297 342.004 L 263.147 344.474 L 261.007 342.954 L 258.937 344.474 Z M 311.217 345.994 L 311.707 344.364 L 310.297 343.384 L 312.007 343.384 L 312.557 341.704 L 313.117 343.384 L 314.837 343.384 L 313.427 344.364 L 313.907 345.994 L 312.557 344.974 L 311.217 345.994 Z M 324.847 348.024 L 325.337 346.364 L 323.927 345.334 L 325.667 345.334 L 326.197 343.734 L 326.737 345.334 L 328.477 345.334 L 327.077 346.364 L 327.637 348.024 L 326.207 347.024 L 324.847 348.024 Z M 317.357 355.844 L 318.037 353.774 L 316.267 352.474 L 318.487 352.474 L 319.127 350.464 L 319.777 352.474 L 321.907 352.474 L 320.197 353.754 L 320.807 355.844 L 319.117 354.564 L 317.357 355.844 Z M 289.157 325.454 L 289.517 324.284 L 288.487 323.604 L 289.707 323.604 L 290.087 322.434 L 290.517 323.604 L 291.687 323.604 L 290.717 324.274 L 291.097 325.454 L 290.137 324.734 L 289.157 325.454 Z M 284.527 320.234 L 285.097 318.614 L 283.687 317.634 L 285.397 317.634 L 285.957 315.944 L 286.527 317.634 L 288.237 317.634 L 286.807 318.634 L 287.297 320.234 L 285.937 319.254 L 284.527 320.234 Z M 302.127 320.744 L 302.817 318.684 L 301.107 317.464 L 303.217 317.464 L 303.897 315.354 L 304.577 317.464 L 306.667 317.464 L 304.977 318.664 L 305.657 320.744 L 303.897 319.474 L 302.127 320.744 Z M 292.197 337.674 L 292.987 335.234 L 290.927 333.714 L 293.507 333.714 L 294.297 331.274 L 295.087 333.714 L 297.657 333.714 L 295.597 335.234 L 296.407 337.674 L 294.297 336.184 L 292.197 337.674 Z M 334.107 345.164 L 334.607 343.594 L 333.197 342.544 L 334.907 342.544 L 335.457 340.864 L 336.027 342.544 L 337.737 342.544 L 336.347 343.574 L 336.897 345.164 L 335.477 344.174 L 334.107 345.164 Z M 348.937 343.054 L 349.597 341.024 L 347.917 339.774 L 350.027 339.774 L 350.697 337.744 L 351.377 339.774 L 353.477 339.774 L 351.797 341.024 L 352.467 343.054 L 350.707 341.834 L 348.937 343.054 Z M 342.617 346.764 L 343.167 345.114 L 341.777 344.144 L 343.507 344.144 L 344.037 342.464 L 344.607 344.144 L 346.327 344.144 L 344.907 345.124 L 345.407 346.764 L 344.037 345.764 L 342.617 346.764 Z M 334.287 361.664 L 334.837 360.014 L 333.447 359.044 L 335.157 359.044 L 335.707 357.364 L 336.217 359.044 L 337.897 359.044 L 336.587 360.014 L 337.057 361.664 L 335.697 360.674 L 334.287 361.664 Z M 334.107 353.834 L 334.727 351.744 L 333.017 350.464 L 335.127 350.464 L 335.807 348.434 L 336.467 350.464 L 338.657 350.464 L 336.897 351.744 L 337.567 353.834 L 335.827 352.554 L 334.107 353.834 Z M 354.067 336.404 L 354.727 334.434 L 352.977 333.124 L 355.077 333.124 L 355.747 331.094 L 356.427 333.124 L 358.607 333.124 L 356.857 334.394 L 357.517 336.404 L 355.797 335.184 L 354.067 336.404 Z M 362.487 329.414 L 363.047 327.754 L 361.647 326.724 L 363.377 326.724 L 363.917 325.124 L 364.387 326.724 L 366.097 326.724 L 364.767 327.744 L 365.267 329.414 L 363.897 328.374 L 362.487 329.414 Z M 350.277 329.594 L 351.087 327.094 L 349.017 325.634 L 351.577 325.634 L 352.387 323.174 L 353.177 325.634 L 355.747 325.634 L 353.687 327.094 L 354.497 329.594 L 352.387 328.044 L 350.277 329.594 Z M 247.317 335.994 L 247.867 334.324 L 246.477 333.284 L 248.227 333.284 L 248.757 331.684 L 249.217 333.284 L 250.937 333.284 L 249.557 334.354 L 250.097 335.994 L 248.707 334.964 L 247.317 335.994 Z M 249.497 328.234 L 250.117 326.154 L 248.407 324.874 L 250.517 324.874 L 251.197 322.844 L 251.857 324.874 L 254.057 324.874 L 252.287 326.144 L 252.947 328.234 L 251.197 326.964 L 249.497 328.234 Z M 222.057 327.394 L 222.737 325.334 L 220.957 324.114 L 223.127 324.114 L 223.747 322.084 L 224.417 324.114 L 226.597 324.114 L 224.837 325.314 L 225.507 327.394 L 223.777 326.104 L 222.057 327.394 Z M 241.087 313.834 L 241.437 312.714 L 240.407 311.984 L 241.657 311.984 L 242.107 310.814 L 242.467 311.984 L 243.707 311.984 L 242.677 312.714 L 243.027 313.834 L 242.057 313.124 L 241.087 313.834 Z M 292.527 313.324 L 293.207 311.224 L 291.517 309.974 L 293.617 309.974 L 294.297 307.944 L 294.967 309.974 L 297.067 309.974 L 295.377 311.224 L 296.057 313.324 L 294.297 312.064 L 292.527 313.324 Z M 315.507 295.324 L 316.007 293.704 L 314.587 292.714 L 316.317 292.714 L 316.847 291.034 L 317.417 292.714 L 319.127 292.714 L 317.707 293.704 L 318.197 295.324 L 316.847 294.344 L 315.507 295.324 Z M 260.947 303.404 L 261.627 301.324 L 259.857 300.044 L 262.057 300.044 L 262.717 298.014 L 263.407 300.044 L 265.497 300.044 L 263.797 301.324 L 264.397 303.404 L 262.717 302.134 L 260.947 303.404 Z"
          />
        </g>
      </g>
    </StyledBaseSvg>
  );
};

export default Brazil;