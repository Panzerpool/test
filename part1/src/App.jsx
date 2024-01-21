const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    execises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercices: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) =>{
    //console.log(props)
    return(
      <h1>{props.course}</h1>
    )
  }

  const Content = (part1, part2, part3) =>{
    return(
      <>
      <Part name={part1.name} exercise={part1.exercises} />
      <Part name={part2.name} exercise={part2.exercises} />
      <Part name={part2.name} exercise={part2.exercices} />
      </>
    )
  }

  const Total = (props) =>{
    return(
      <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </>
    )
  }

  const Part = (props) =>{
    return(
      <p>{props.name} {props.exercise}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App