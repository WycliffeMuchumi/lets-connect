import React, {Component} from "react"


class Form extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <main className="content-section">
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <br />
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />
                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />Female
                    </label>
                    <br />
                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">---please choose a destination---</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="london">London</option>
                        <option value="italy">Italy</option>
                        <option value="switzerland">Switzerland</option>
                    </select>
                    <br />
                    <button type="submit">submit</button>
                </form>
            </main>
        )
    }
}

export default Form;

// Constructor method initializes a class component
// super() method ships properties and methods from the super parent class(React.Component)