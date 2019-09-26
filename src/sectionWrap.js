import React from 'react';

export class SectionWrap extends React.PureComponent {
  render() {
    return (
      <div style={{ border: '1px dotted tomato', padding: '10px' }}>
        <h2 style={{ background: 'tomato', color: 'white' }}>
          {this.props.title}
        </h2>
        {this.props.children}
      </div>
    );
  }
}