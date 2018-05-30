class VisibilityToggle extends React.Component {
  constructor (props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility () {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        <div>
          {
            this.state.visibility && (
              <p>Hey. These are some details you can now see!</p>
            )  
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false
// const hideAndShow = () => {
//   visibility = !visibility
//   render()
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={hideAndShow}>
//         {visibility ? 'Show details' : 'Hide details'} 
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   )

//   ReactDOM.render(template, document.getElementById('app')
//   )
// }

// render()
