import React from "react";

export class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }
  clicked() {
    this.setState({
      hide: true,
    });
  }
  render() {
    return (
      <div>
        <button
          type="button"
          class="popup-btn"
          data-toggle="modal"
          onClick={() => this.clicked()}
        >
          {this.props.buttonText}
        </button>
        {this.state.hide ? (
          <div
            class="modal fade"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            {this.props.popupText}
          </div>
        ) : null}
      </div>
    );
  }
}
