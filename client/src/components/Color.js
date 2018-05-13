import React, {Component} from 'react';

import './Color.css'



class Color extends Component {



    render() {
        const { selectColor, colIndex, selectedIndex} = this.props;

        return(
                <div
                    className={"ColorPicker_items "+ (colIndex==selectedIndex? 'selected':'')}
                    onClick={selectColor}
                    style={{ backgroundColor: this.props.bgColor }}
                    >
                </div>
        )
    }
}

export default Color;