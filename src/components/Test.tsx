import { Component } from 'react'

type CounterProps = {
    count: number
}
type CounterState = {
    count: number
}

class Test extends Component<CounterProps, CounterState> {
    constructor(props: any) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    componentDidMount(): void {
        console.log('Component mounted')
    }

    componentDidUpdate(prevProps: CounterProps, prevState: CounterState) {
        if (prevState.count !== this.state.count) {
            console.log('Count has been updated:', this.state.count)
        }
    }

    render() {
        console.log('render')

        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export default Test
