#React: Setting up a Project.
- Setting up a webapp with React (0.14)
- Using babel, webpack and ES6 preset

## Version
1.0.0

## Usage
1. `git clone https://github.com/kevinvn1709/react.git`
2. `npm install`
3. `webpack-dev-server`  or  `npm run dev-server`
4. `Go to localhost:8080`

## Docker Image

Update soon....!


## Reference

#### Map foreach item
ES5:
```javascript
this.props.task.map(function(item, index){
    return (
        <Item key={index} name={item.name} value={item.value} />
    )
})
```
ES6 Arrows + Spread:
```javascript
this.props.task.map((item, index) => {
    return (
        <Item key={index} {...item} />
    )
})
```

ES6 with lodash:
```javascript
_.map(this.props.task, (item, index) => {
    return (
        <Item key={index} {...item} />
    )
})
```

ES6 with shorthand syntax + lodash:
```javascript
_.map(this.props.task, (item, index) => <Item key={index} {...item} />)
```


#### Property initializers

ES5:
```javascript
var Video = React.createClass({
  getDefaultProps: function() {
    return {
      autoPlay: false,
      maxLoops: 10,
    };
  },
  getInitialState: function() {
    return {
      loopsRemaining: this.props.maxLoops,
    };
  },
  propTypes: {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
  },
});
```
ES6:
```javascript
class Video extends React.Component {
  static defaultProps = {
    autoPlay: false,
    maxLoops: 10,
  }
  static propTypes = {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
  }
  state = {
    loopsRemaining: this.props.maxLoops,
  }
}
```
