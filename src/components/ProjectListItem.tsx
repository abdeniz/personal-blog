import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'
import Tag from './Tag'

export interface IProjectListItem {
  title: string
  tags: string[]
}

const ProjectListItem = ({ title, tags }: IProjectListItem) => {
  return (
    <Project>
      <TitleWrapper>
        <img src={arrow} alt='arrow' />
        <ProjectTitle>{title}</ProjectTitle>
      </TitleWrapper>
      <TagWrapper>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </TagWrapper>
    </Project>
  )
}

const Project = styled.div`
  margin: 32px 0;
`

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const ProjectTitle = styled.h3`
  font-weight: 500;
  margin-left: 4px;
`

const TagWrapper = styled.div`
  display: flex;
`

export default ProjectListItem
