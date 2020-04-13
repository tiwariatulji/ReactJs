import React, { Component } from 'react'

const Hoc = (Men,goli) => {
    class India extends Component {
        state = {
            ganShot: 0,
        }
        changeGunShot = () => {
            this.setState({ ganShot: this.state.ganShot + goli })
        }
        render() {
            return <Men gunName="Ak 47"
                gunState = {this.state.ganShot}
                gunClick = {this.changeGunShot}
             />
        }
    }
    return India;
}
export default Hoc;