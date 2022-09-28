import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <h1>How does react work?</h1>
            <p>react is a libraries not fomeWork.it has jsx,virtual dom,props and state,component.JSX is a JavaScript syntax extension used in React element creation.React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.single pices in component and when it send and recive it is props.It changes whenever a user interacts with the application, rendering a new UI </p>
            <h1>Difference between props and state?</h1>
            <p>React uses data transmission props that we need to transfer to various components. The difference comes in which component the data are owned. State is owned locally and the component itself updates it.</p>
            <h1>useEffect use </h1>
        </div>
    );
};

export default Question;