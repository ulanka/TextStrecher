import React, { Component } from 'react';
import './App.css';


export default class Screen2 extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    let transformCustomCSSPropValue_text = (input) => {
      // This function modifies the value for property 'customCSS'.
      // There is a variable named 'input' that provides the property value.
      // The return value must be a string using DOM notation.
      // Example:
      //   return '"fontWeight": "bold"';
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      input  = '"fontSize": "'+this.props.appActions.dataSlots['ds_fontSIze']+'"';
      //input  = '"fontSize": "72px"';
      
      return input;
    }
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        ...(() => {  // append customCSS property of 'text'
          let val = transformCustomCSSPropValue_text((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_fontSIze'] : ''));
          if (val == null || val.length == 0) return null;
          try {
            return JSON.parse('{'+val+'}');
          } catch (error) {
            console.log(error);
          }
          return null;
        })(),
     };
    const value_text = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_Slot'] : '');
    
    
    return (
      <div className="AppScreen Screen2" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='appBg' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText'>
            <div className='baseFont' style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.screen2_text_938607}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
