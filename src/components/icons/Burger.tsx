import React from 'react'

interface IBurger {
  fill: string
  className?: string
}

const Burger = ({ fill, className }: IBurger) => {
  return (
    <svg
      className={className}
      width='26'
      height='21'
      viewBox='0 0 26 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.384033 2.46729C0.384033 1.63886 1.05561 0.967285 1.88403 0.967285H24.3714C25.1999 0.967285 25.8714 1.63886 25.8714 2.46729C25.8714 3.29571 25.1999 3.96729 24.3714 3.96729H1.88403C1.05561 3.96729 0.384033 3.29571 0.384033 2.46729Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.384033 10.5037C0.384033 9.67524 1.05561 9.00366 1.88403 9.00366H24.3714C25.1999 9.00366 25.8714 9.67524 25.8714 10.5037C25.8714 11.3321 25.1999 12.0037 24.3714 12.0037H1.88403C1.05561 12.0037 0.384033 11.3321 0.384033 10.5037Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.384033 18.54C0.384033 17.7116 1.05561 17.04 1.88403 17.04H24.3714C25.1999 17.04 25.8714 17.7116 25.8714 18.54C25.8714 19.3685 25.1999 20.04 24.3714 20.04H1.88403C1.05561 20.04 0.384033 19.3685 0.384033 18.54Z'
        fill={fill}
      />
    </svg>
  )
}

export default Burger
