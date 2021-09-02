import React from 'react'
import styled from 'styled-components'
import Column from './Column'
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
    <ProjectListColumn>
      <h2>Projects</h2>

      <div>
        {tempProjects.map(({ title, tags }, index) => (
          <ProjectListItem key={index} title={title} tags={tags} />
        ))}
      </div>
    </ProjectListColumn>
  )
}

const ProjectListColumn = styled(Column)`
  justify-self: center;

  @media only screen and (max-width: 1100px) {
    justify-self: normal;
  }
`

export default ProjectList
