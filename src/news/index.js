import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';
import Thumbnail from './components/Thumbnail';

export default class App extends React.Component {
    render() {
        var data = [{
            imageUrl: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
            title: 'React Tutorials',
            description: "Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.",
            button: {
                message: 'Lessons',
                number: 30
            }
        }, {
            imageUrl: 'https://avatars0.githubusercontent.com/u/9637642?v=3&s=400',
            title: 'Babel Tutorials',
            description: "Babel has support for the latest version of JavaScript through syntax transformers. These allow you to use new syntax, right now without waiting for browser support. Check out our ES2015 preset to get started",
            button: {
                message: 'Lessons',
                number: 12
            }
        },{
            imageUrl: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
            title: 'React Tutorials',
            description: "Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.",
            button: {
                message: 'Lessons',
                number: 30
            }
        }, {
            imageUrl: 'https://avatars0.githubusercontent.com/u/9637642?v=3&s=400',
            title: 'Babel Tutorials',
            description: "Babel has support for the latest version of JavaScript through syntax transformers. These allow you to use new syntax, right now without waiting for browser support. Check out our ES2015 preset to get started",
            button: {
                message: 'Lessons',
                number: 12
            }
        }];


        return (
            <div>
                {
                    data.map((item) => {
                        return <Thumbnail {...item} />
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

