import React, { Component } from "react";
import { useAuth0 } from "../react-auth0-spa";


class Services extends Component {
  // Checkbox Initial State
  state = {
    isLawnMowing: false,
    isCarWash: false,
    isGutterCleaning: false,
    isAcMaintenance: false,
    isLeavesAndLawn: false,
    isPowerWash: false,
    isChimneyInspection: false,
    isDrainWaterHeater: false,
   
};
  // React Checkboxes onChange Methods
  onChangeLawnMowing = () => {
    this.setState(initialState => ({
      isLawnMowing: !initialState.isLawnMowing,
    }));
  }
  onChangeCarWash = () => {
    this.setState(initialState => ({
      isCarWash: !initialState.isCarWash,
    }));
  }
  onChangeGutterCleaning = () => {
    this.setState(initialState => ({
      isGutterCleaning: !initialState.isGutterCleaning,
    }));
  }
  onChangeAcMaintenance = () => {
    this.setState(initialState => ({
      isAcMaintenance: !initialState.isAcMaintenance,
    }));
  }
  onChangeLeavesAndAerateLawn = () => {
    this.setState(initialState => ({
      isLeavesAndAerateLawn: !initialState.isLeavesAndAerateLawn,
    }));
  }
  onChangePowerWash = () => {
    this.setState(initialState => ({
      isPowerWash: !initialState.isPowerWash,
    }));
  }
  onChangeChimneyInspection = () => {
    this.setState(initialState => ({
      isChimneyInspection: !initialState.isChimneyInspection,
    }));
  }
  onDrainWaterHeater = () => {
    this.setState(initialState => ({
      isDrainWaterHeater: !initialState.isDrainWaterHeater,
    }));
  }
  // Submit
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="App">
        <h2>Store Multiple Checkboxes Values in React</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isLawnMowing}
                onChange={this.onChangeLawnMowing}
                className="form-check-input"
              />
              LawnMowing
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isCarWash}
                onChange={this.onChangeCarWash}
                className="form-check-input"
              />
              CarWash
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isGutterCleaning}
                onChange={this.onGutterCleaning}
                className="form-check-input"
              />
              GutterCleaning
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isAcMaintenance}
                onChange={this.onChangeAcMaintenance}
                className="form-check-input"
              />
             AC Maintenance
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.ispowerWash}
                onChange={this.onChangePowerWash}
                className="form-check-input"
              />
             PowerWash
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isChimneyInspection}
                onChange={this.onChangeChimneyInspection}
                className="form-check-input"
              />
             ChimneyInspection
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isDrainWaterHeater}
                onChange={this.onChangeDrainWaterHeater}
                className="form-check-input"
              />
             DrainWaterHeater
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isLeavesAndAerateLawn}
                onChange={this.onChangeLeavesAndAerateLawn}
                className="form-check-input"
              />
             LeavesAndAerateLawn
            </label>
          </div>
          <div className="form-group">
            <button className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
      
    );
  }
};
export default Services;