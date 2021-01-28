import React from "react";


export default class Header extends React.Component {
    constructor() {
        super();
        this.state = { title: "Welcome" };
      }
    handleChange(e) {
        const title = e.target.value;
        this.setState({title})
       this.props.changeTitle(title);
    }
    render() {
        //App.jsからtitleに渡したpropsの表示
        return (
            <div>
             
                <input value={this.state.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}