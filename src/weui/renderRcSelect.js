import React, {
    Component,
    PropTypes
} from 'react'
import ReactDOM from 'react-dom'

import 'rc-select/assets/index.css';
import Select, {
    Option
} from 'rc-select/lib/index';

class renderRcSelect extends Component {
    render() {
        const {
            input,
            options,
            onTagSelect,
            tagSels
        } = this.props
        let opts = options||[]

        for (var i = 0; i < opts.length; i++) {
            opts.push(<Option key={opts[i].key}  title={opts[i].title}> 
                    {opts[i].text}
                  </Option>);
        };
      
        return (<Select {... this.props}   onChange={(val)=>{onTagSelect(null,val)}} 
            value={tagSels}
          >
            {opts}
          </Select>)
    }
}
// const renderRcSelect = ({
//     input,
//     options,
//     tagSels,
//     onTagSelect
// }) => {

//     return (<Select {...input} 
//           >
//             {options}
//           </Select>)
// }

export default renderRcSelect