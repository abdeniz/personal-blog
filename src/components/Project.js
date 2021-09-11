import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import Tag from './Tag'

const ProjectListItem = ({ project }) => {
  return (
    <Project>
      <TitleWrapper>
        <ProjectLink href={project.url}>
          <img src={arrow} alt='arrow' />
          <ProjectTitle>{project.title}</ProjectTitle>
        </ProjectLink>
      </TitleWrapper>
      <TagWrapper>
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
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
  margin-bottom: 8px;
`

const ProjectTitle = styled.h3`
  font-weight: 500;
  margin-left: 4px;
  transition: color 0.2s;
`

const ProjectLink = styled.a`
  display: flex;

  & > img {
    transition: transform 0.2s;
  }

  &:hover > h3 {
    color: var(--color-tag-background);
  }

  &:hover > img {
    transform: translateX(-15%);
  }
`

const TagWrapper = styled.div`
  display: flex;
`

export default ProjectListItem
