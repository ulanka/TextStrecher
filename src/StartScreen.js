import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      textarea: '',
      picker: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_fontSIze'] : ''),
      picker: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_fontSIze'] : ''),
    };
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  textAreaChanged_textarea = (event) => {
    this.setState({textarea: event.target.value});
  }
  
  onClick_state0_elButton2 = (ev) => {
    let newVal = this.state.textarea;
    this.props.appActions.updateDataSlot('ds_Slot', newVal);
  
    // Go to screen 'Screen 2'
    this.props.appActions.goToScreen('screen2', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
  }
  
  renderState0() {
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
    
    const style_state0_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_state0_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state0_elTextarea = {
        display: 'block',
        backgroundColor: 'white',
        borderColor: 'lightGray',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_state0_elTextarea_outer = {
        pointerEvents: 'auto',
     };
    const style_state0_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_state0_elButton2 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_state0_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    let selection_picker = this.state.picker;
    // Source datasheet and selected data column for picker element 'picker'
    const dataSource_picker = this.props.appActions.getDataSheet('fontSizes');
    const valueColumnName_picker = 'fontS';
    const labelColumnName_picker = 'fontS';
    
    const style_state0_elPicker529318_outer = {
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight state0_elBackground' style={style_state0_elBackground_outer}>
            <div className='appBg' style={style_state0_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state0_elTextarea' style={style_state0_elTextarea_outer}>
            <textarea className='baseFont' style={style_state0_elTextarea}  placeholder={this.props.locStrings.start_textarea_503126} onChange={this.textAreaChanged_textarea} value={this.state.textarea}  />
          
          </div>
          
          <div className='state0_elButton'>
            <Button className='actionFont' style={style_state0_elButton}  color="accent" >
              {this.props.locStrings.start_button_476009}
            </Button>
          
          </div>
          
          <div className="flowRow flowRow_StartScreen_state0_elButton2_1046795">
          <div className='state0_elButton2' style={style_state0_elButton2_outer}>
            <Button className='actionFont' style={style_state0_elButton2}  color="accent" onClick={this.onClick_state0_elButton2} >
              {this.props.locStrings.start_button2_1046795}
            </Button>
          
          </div>
          
          </div>
          <div className='state0_elPicker529318' style={style_state0_elPicker529318_outer}>
            <Select className='baseFont'  onChange={this.pickerValueChanged_picker} value={selection_picker} >
              {dataSource_picker.items.map(item => {
                const colValue = item[valueColumnName_picker];
                const labelColValue = item[labelColumnName_picker];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
  }
  
  renderState1() {
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
    
    let selection_picker = this.state.picker;
    // Source datasheet and selected data column for picker element 'picker'
    const dataSource_picker = this.props.appActions.getDataSheet('fontSizes');
    const valueColumnName_picker = 'fontS';
    const labelColumnName_picker = 'fontS';
    
    const style_state1_elPicker529318_outer = {
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state1_elPicker529318' style={style_state1_elPicker529318_outer}>
            <Select className='baseFont'  onChange={this.pickerValueChanged_picker} value={selection_picker} >
              {dataSource_picker.items.map(item => {
                const colValue = item[valueColumnName_picker];
                const labelColValue = item[labelColumnName_picker];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (0) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
