import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// Functional Component for reference
// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} alt="logo" className="App-logo" />
//                 <p>Learning React functional</p>
//             </header>
//         </div>
//     );
// }

// Class based component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
            list: [],
        };
    }

    addItem(todoValue) {
        if (todoValue !== '') {
            const newItem = {
                id: Date.now(),
                value: todoValue,
                isDone: false,
            };
            const appList = this.state;
            const updatedList = [...appList.list];
            updatedList.push(newItem);
            this.setState({
                list: updatedList,
                newItem: '',
            });
        }
    }

    deleteItem(id) {
        const { list } = this.state;
        const newList = [...list];
        const updatedList = newList.filter(item => item.id !== id);
        this.setState({
            list: updatedList,
        });
    }

    toggleItem(id) {
        const { list } = this.state;
        const updatedList = list.map(val => {
            if (val.id === id) {
                return (val.isDone = !val.isDone);
            }
            return val;
        });
        this.setState(updatedList);
    }

    updateInput(input) {
        this.setState({
            newItem: input,
        });
    }

    render() {
        const { list, newItem } = this.state;
        return (
            <div>
                <img src={logo} alt="logo" className="d-block mx-auto" width="200" height="200" />
                <h1 className="text-white text-center">
                    Simple React Todo app{' '}
                    <span role="img" aria-label="wink-smiley">
                        😉
                    </span>
                </h1>
                <div className="container text-white w-100">
                    Add an Item...
                    <br />
                    <input
                        type="text"
                        className="input-text w-100 my-3"
                        placeholder="Write a Todo"
                        required
                        value={newItem}
                        onChange={e => this.updateInput(e.target.value)}
                    />
                    <button
                        type="button"
                        className="btn btn-info btn-block my-3"
                        onClick={() => this.addItem(newItem)}
                        disabled={!newItem.length}
                    >
                        Add Todo
                    </button>
                    <div className="list my-3">
                        <ul className="list-unstyled">
                            {list.map(item => (
                                <li key={item.id} className="my-4 font-weight-bold">
                                    <input
                                        type="checkbox"
                                        className="text-primary mx-1 checkbox"
                                        checked={item.isDone}
                                        onChange={() => {
                                            this.toggleItem(item.id);
                                        }}
                                    />
                                    <span className={item.isDone ? 'completed' : ''}>{item.value}</span>
                                    <button
                                        type="button"
                                        className="btn btn-danger float-right"
                                        onClick={() => this.deleteItem(item.id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
