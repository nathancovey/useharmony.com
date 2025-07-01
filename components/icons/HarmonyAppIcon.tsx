import { SVGProps } from 'react'

interface HarmonyAppIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function HarmonyAppIcon({ size = 644, className, ...props }: HarmonyAppIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 644 644" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_1_56)">
        <mask id="mask0_1_56" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="-3" width="644" height="650">
          <path d="M644 -2.14026H0V646.389H644V-2.14026Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_1_56)">
          <path d="M556.899 0H87.101C38.9965 0 0 38.9965 0 87.101V556.899C0 605.004 38.9965 644 87.101 644H556.899C605.004 644 644 605.004 644 556.899V87.101C644 38.9965 605.004 0 556.899 0Z" fill="#6A25FF"/>
          <path d="M279.659 374.991C279.119 355.062 292.332 338.61 312.581 339.13C334.129 339.01 345.184 353.842 344.904 374.991V501.943H426.02V357.94C426.32 327.516 414.147 299.711 388.84 284.179C352.56 261.471 301.927 275.544 279.659 312.244V374.991Z" fill="url(#paint0_linear_1_56)"/>
          <path d="M198.48 501.944H279.597V374.991C278.338 221.593 389.319 208.64 426.019 207.361V126.244C252.692 126.244 198.48 281.341 198.48 356.741V501.924V501.944Z" fill="white"/>
        </g>
      </g>
      <defs>
        <linearGradient id="paint0_linear_1_56" x1="279.639" y1="387.564" x2="426.02" y2="387.564" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="0.11" stopColor="white" stopOpacity="0.25"/>
          <stop offset="0.21" stopColor="white" stopOpacity="0.55"/>
          <stop offset="0.32" stopColor="white"/>
          <stop offset="1" stopColor="white"/>
        </linearGradient>
        <clipPath id="clip0_1_56">
          <rect width="644" height="644" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
} 