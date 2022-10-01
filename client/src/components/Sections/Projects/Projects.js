import React from 'react'
import ProjectCard from '../../ProjectCard/ProjectCard'

export default function Projects() {
  return (
    <section className="projects">
        <h2 id="projects">My Projects</h2>
        <ProjectCard 
          title="Pokemon Counter Calculator"
          description={<>A browser-like calculator 
          used to determine the best 
          attack types and defense types to battle the 
          specific pokemon or type queried. Search for a pokemon by 
          name to figure out how to counter it or look up 
          the best counters for one or more types. Data fetched from the 
          &nbsp;<a href='https://pokeapi.co/'>PokeAPI</a>. Built 
          with React and MUI components.</>}
          hostedURL="https://sam-hilliard.github.io/pokemon-counter-calculator/"
          githubURL="https://github.com/sam-hilliard/pokemon-counter-calculator"
        />
    </section>
  )
}