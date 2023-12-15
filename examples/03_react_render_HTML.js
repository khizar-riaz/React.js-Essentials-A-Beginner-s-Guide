import React from 'react';
import ReactDOM from 'react-dom';

const MyComponent = () => {
    return (
        <table>
            <tr>
                <th>Name</th>
            </tr>
            <tr>
                <td>John</td>
            </tr>
            <tr>
                <td>Elsa</td>
            </tr>
        </table>
    );
};

const App = () => {
    const container = document.getElementById('root');

    // Rendering the component using ReactDOM
    ReactDOM.render(<MyComponent />, container);
};

export default App;
