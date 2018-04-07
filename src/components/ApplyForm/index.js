import * as React from 'react'

export default class ApplyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: props.open || false,
    }
  }

  openForm = () => {
    this.setState({ open: true })
  }

  render() {
    if (this.state.open) {
      return (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfK0YhISrvLDa2tNgewMw4wQEfzynVQSNQHa7hfxU2sz2uAew/viewform?embedded=true"
          width="760"
          height="1400"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      )
    } else {
      return this.props.renderClosed({ onOpen: this.openForm })
    }
  }
}
