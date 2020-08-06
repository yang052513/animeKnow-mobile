import React from 'react'
import { connect } from 'react-redux'
import { buyCake, addCake } from '../redux'

function CakeContainer(props) {
  console.log(props)
  return (
    <div>
      <h2>Number of cakes {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cakes</button>
      <button onClick={props.addCake}>Add Cake to Shelf</button>
    </div>
  )
}

// state from reducer
const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes,
  }
}

// dispatch from reducer
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
