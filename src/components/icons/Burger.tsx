import React from 'react'

interface IBurger {
  fill: string
  className?: string
}

const Burger = ({ fill, className }: IBurger): JSX.Element => {
  return (
    <div>
      <svg
        className={className}
        width='31'
        height='24'
        viewBox='0 0 35 27'
        fill={fill}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0.384033 2.21002C0.384033 1.08661 1.29474 0.175903 2.41815 0.175903H32.9128C34.0362 0.175903 34.9469 1.08661 34.9469 2.21002C34.9469 3.33343 34.0362 4.24413 32.9128 4.24413H2.41815C1.29474 4.24413 0.384033 3.33343 0.384033 2.21002Z'
          fill={fill}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0.384033 13.108C0.384033 11.9846 1.29474 11.0739 2.41815 11.0739H32.9128C34.0362 11.0739 34.9469 11.9846 34.9469 13.108C34.9469 14.2314 34.0362 15.1421 32.9128 15.1421H2.41815C1.29474 15.1421 0.384033 14.2314 0.384033 13.108Z'
          fill={fill}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0.384033 24.0059C0.384033 22.8825 1.29474 21.9718 2.41815 21.9718H32.9128C34.0362 21.9718 34.9469 22.8825 34.9469 24.0059C34.9469 25.1293 34.0362 26.04 32.9128 26.04H2.41815C1.29474 26.04 0.384033 25.1293 0.384033 24.0059Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default Burger
