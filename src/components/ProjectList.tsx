import React from 'react'
import styled from 'styled-components'
import ProjectListItem, { IProjectListItem } from './ProjectListItem'

const tempProjects: IProjectListItem[] = [
  {
    title: 'Yesume Generator',
    tags: ['React', 'PDF'],
  },
  {
    title: 'Y.E.R.V.I.S.',
    tags: ['Tensorflow.js'],
  },
  {
    title: 'YeCMS',
    tags: ['Javascript', 'CSS'],
  },
]

const ProjectList = () => {
  return (
    <ProjectListWrapper>
      <h2>Projects</h2>

      <div>
        {tempProjects.map(({ title, tags }, index) => (
          <ProjectListItem key={index} title={title} tags={tags} />
        ))}
      </div>
    </ProjectListWrapper>
  )
}

const ProjectListWrapper = styled.div`
  justify-self: center;
`

export default ProjectList
