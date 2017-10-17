# react-tab-bar
> Tabbar for react.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    template: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: [],
    template: noop,
    onChange: noop,
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-tab-bar --save import : import
// ReactTabBar from 'react-tab-bar'

class App extends React.Component {
  state = {
    value:[
      {
        selected:true,
        type:'inline',
        icon:'home',
        text:'Home',
        badge: 2
      },
      {
        type:'float',
        icon:'photo',
        text:'Photo',
        badge: 10
      },
      {
        type:'inline',
        icon:'time',
        text:'History',
        badge: 0
      },
      {
        type:'absolute',
        icon:'time',
      }
    ]
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _change = e =>{
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="hello-react-tab-bar">
        <ReactTabBar ref='rc' className="test-tab-bar" value={this.state.value} onChange={this._change} />
      </div>
    );
  }
}

```
