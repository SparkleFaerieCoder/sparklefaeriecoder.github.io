import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import './scss/app.scss'

interface Props {
    name: string
}

class App extends React.Component<Props> {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
            </div>
        </div>
    }
}

ReactDOM.render(<App name="Alex" />, document.getElementById("app"));