import React, { Component } from 'react'

class Like extends Component {
    render() {
        return (
            <div>
                <br/>
                {!this.props.user.heart ? (
                    this.props.isLoading ? (
                        <span className="button is-primary is-loading">Jag vill läsa med dig</span>
                    ) : (
                        <span className="button is-primary" onClick={() => this.props.like(this.props.user)}>Jag vill läsa med dig</span>
                    )
                ) : (
                    <span className="button is-info">Skickad</span>
                )}
                <br/>
            </div>
        );
    }
}

export default Like;
