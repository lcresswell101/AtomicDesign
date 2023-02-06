import React from "react";

type Props = {
    children: React.ReactNode,
    handleSubmit: () => void;
}

class Form extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

       this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        this.props.handleSubmit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                { this.props.children }
            </form>
        )
    }
}

export default Form;