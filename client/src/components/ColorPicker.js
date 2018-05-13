import React, {Component} from 'react';
import Color from './Color';
import './ColorPicker.css'

const COLORS = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];

class ColorPicker extends Component {

    state = {
        colorSelected: ''
    }

    handleClickColor(e) {
        const color = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
        this.props.changeColor(color);
    }

    selectList(colorIndex) {
        this.setState({ colorSelected: colorIndex });

    }


    render() {

        return(
            <div className='ColorPicker'>
               { COLORS.map((color,i) =>
                    <Color
                        key={i}
                        selectedIndex={this.state.colorSelected}
                        selectColor={(e) => {this.selectList(i); this.handleClickColor(e);}}
                        bgColor={color}
                        colIndex={i}
                        >
                    </Color>
                )}
            </div>
        )
    }
}

export default ColorPicker;