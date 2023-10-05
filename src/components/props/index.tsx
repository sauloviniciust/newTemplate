import { Component,  } from "react";


class Prop extends Component<{name: string}> {
    render() {
        return(
            <>
                <p>este é meu nome: {this.props.name}</p>
            </>
        )
    }
}

export  {Prop }