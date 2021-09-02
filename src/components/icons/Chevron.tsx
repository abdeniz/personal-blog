import React from 'react'

interface Props {
  fill: string
}

const Chevron = ({ fill }: Props) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill={fill}
        d='M6.11148 10.1174L12.1115 15.7645C12.5025 16.1325 13.1355 16.1325 13.5255 15.7645L19.5255 10.1174C19.9165 9.74944 19.9165 9.15368 19.5255 8.78662C19.1345 8.41956 18.5015 8.41862 18.1115 8.78662L12.8185 13.7683L7.52548 8.78662C7.13448 8.41862 6.50148 8.41862 6.11148 8.78662C5.72148 9.15462 5.72048 9.75038 6.11148 10.1174V10.1174Z'
      />
    </svg>
  )
}

export default Chevron