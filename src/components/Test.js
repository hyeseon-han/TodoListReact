import React, { Component } from 'react';
import './Test1.css'
class Test extends Component {
    state = {
        done : false
    }
    handleClick = () => {
        const {done} = this.state
        this.setState({
            done: !done
        })
    }
    render() {
        return (          

            <div>
      {/* <button className={ `클래스 ${this.state.done && 'on'}` }  > 다중클래스 </button> */}

                <button className={ `${this.state.done && 'on'}` }                
                onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default Test;