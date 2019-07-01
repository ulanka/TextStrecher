import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Screen2 extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
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
      input  = '"fontSize": "'+this.props.appActions.dataSlots['ds_selectedFont']+'"';
      //input  = '"fontSize": "72px"';
      
      return input;
    }
    const style_elText = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        ...(() => {  // append customCSS property of 'text'
          let val = transformCustomCSSPropValue_text((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_selectedFont'] : ''));
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
    
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen Screen2" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='appBg' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText'>
            <div className='' style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.screen2_text_938607}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elButton' style={style_elButton_outer}>
            <Button className='actionFont' style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.screen2_button_667176}
            </Button> 
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
