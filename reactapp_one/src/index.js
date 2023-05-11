import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// const head = "heeey";


const ftn =  (button) => {
    return (
        <img src="https://images.unsplash.com/photo-1669542872702-61886718421b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        )
    };
    
    
// export default head;
export const data = ftn;
