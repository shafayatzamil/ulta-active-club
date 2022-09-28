import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div style={{margin:'30px'}}>
            <h2 style={{textAlign:"center"}}>Question answer</h2>

            <h1>How does react work?</h1>
            <p>react is a libraries not fomeWork.it has jsx,virtual dom,props and state,component.JSX is a JavaScript syntax extension used in React element creation.React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.single pices in component and when it send and recive it is props.It changes whenever a user interacts with the application, rendering a new UI </p>
            <h1>Difference between props and state?</h1>
            <p>React uses data transmission props that we need to transfer to various components. The difference comes in which component the data are owned. State is owned locally and the component itself updates it.</p>
            <h1>useEffect use except api fetching?</h1>
            <p>useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. callback argument is a function to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values.

             useEffect(callback, dependencies) invokes the callback after initial mounting, and on later renderings, if any value inside dependencies has changed.   

            The next step to mastering useEffect() is to understand and avoid the infinite loop pitfall.</p>
        </div>
    );
};

export default Question;