import React from 'react';

export default class AddNewEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'default',
      firstName: null,
      lastName: null,
      jobTitle: null,
      street: null,
      city: null,
      zip: null,
      email: null,
      phone: null,
      wage: null,
      departmentId: 'default',
      contract: 'default',
      startDate: null,
      inductionDate: null,
      qualifications: null,
      role: null,
      image: null,
      photo: {
        file: null,
        preview: null
      },
      departments: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'firstName') {
      this.setState({
        firstName: event.target.value
      });
    } else if (event.target.id === 'lastName') {
      this.setState({
        lastName: event.target.value
      });
    } else if (event.target.id === 'jobTitle') {
      this.setState({
        jobTitle: event.target.value
      });
    } else if (event.target.id === 'street') {
      this.setState({
        street: event.target.value
      });
    } else if (event.target.id === 'city') {
      this.setState({
        city: event.target.value
      });
    } else if (event.target.id === 'zip') {
      this.setState({
        zip: event.target.value
      });
    } else if (event.target.id === 'email') {
      this.setState({
        email: event.target.value
      });
    } else if (event.target.id === 'phone') {
      this.setState({
        phone: event.target.value
      });
    } else if (event.target.id === 'wage') {
      this.setState({
        wage: event.target.value
      });
    } else if (event.target.id === 'department') {
      this.setState({
        departmentId: event.target.value
      });
    } else if (event.target.id === 'contract') {
      this.setState({
        contract: event.target.value
      });
    } else if (event.target.id === 'startDate') {
      this.setState({
        startDate: event.target.value
      });
    } else if (event.target.id === 'inductionDate') {
      this.setState({
        inductionDate: event.target.value
      });
    } else if (event.target.id === 'qualifications') {
      this.setState({
        qualifications: event.target.value
      });
    } else if (event.target.id === 'photo') {
      this.setState({
        photo: event.target.value
      });
    } else if (event.target.id === 'state') {
      this.setState({
        state: event.target.value
      });
    } else if (event.target.id === 'admin') {
      this.setState({
        role: event.target.value
      });
    } else if (event.target.id === 'employee') {
      this.setState({
        role: event.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('avatar', this.state.photo.file);

    fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          image: '/uploads/' + data.filename
        });
      })
      .then(() => {
        const employee = Object.assign({}, this.state);
        fetch('/api/employees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(employee)
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handlePhotoChange(event) {
    this.setState({
      photo: {
        file: event.target.files[0],
        preview: URL.createObjectURL(event.target.files[0])
      }
    });
  }

  renderImage(preview) {
    return (
      <div className="">
        {preview && <img src={preview} style={{ maxWidth: '100%' }} className="mb-4 image-prev" alt="Uploaded image preview" />}
      </div>
    );
  }

  render() {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="page-content col-10">
          <div className="shadow title d-flex justify-content-between">
            <h2 className="col-10 page-title text-center">ADD NEW EMPLOYEE</h2>
            <span className="col-1"></span>
          </div>
        </div>
        <form className="col-10 shadow d-flex flex-column align-items-center" onSubmit={this.handleSubmit}>
          <div className="col-11 d-flex flex-column align-items-left section-styling-head">
            <h5 className="row ml-3 mt-1">NAME & JOB TITLE</h5>
            <div className="form-group d-flex justify-content-between ml-1">
              <div className="col-4">
                <label htmlFor="exampleFormControlInput1">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={this.handleChange} required/>
              </div>
              <div className="col-4">
                <label htmlFor="exampleFormControlInput1">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={this.handleChange} required/>
              </div>
              <div className="col-4">
                <label htmlFor="exampleFormControlInput1">Job Title</label>
                <input type="text" className="form-control" id="jobTitle" placeholder="Job Title" onChange={this.handleChange} required/>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex">
            <div className="col d-flex mt-3 section-styling">
              <div className="col-12 d-flex flex-column align-items-left">
                <h5 className="row ml-1 mt-1">CONTACT DETAILS</h5>
                <div className="form-group d-flex flex-column justify-content-between ml-1">
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Street</label>
                    <input type="text" className="form-control" id="street" placeholder="Street address" onChange={this.handleChange} required/>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">City</label>
                    <input type="text" className="form-control" id="city" placeholder="City" onChange={this.handleChange} required/>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">State</label>
                    <select value={this.state.state} name="state" id="state" className="form-control" onChange={this.handleChange} required>
                      <option value="default">Choose...</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Zip Code</label>
                    <input type="text" className="form-control" id="zip" placeholder="Zip Code" onChange={this.handleChange}/>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="name@company.com" onChange={this.handleChange}/>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Phone</label>
                    <input type="phone" className="form-control" id="phone" placeholder="Phone Number" onChange={this.handleChange}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-flex mt-3 section-styling">
              <div className="col-12 d-flex flex-column align-items-left">
                <h5 className="row ml-1 mt-1">JOB DETAILS</h5>
                <div className="form-group d-flex flex-column justify-content-between ml-1">
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Wage</label>
                    <input type="text" className="form-control" id="wage" placeholder="Wages per hour" onChange={this.handleChange}/>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Department</label>
                    <select id="department" value={this.state.departmentId} name="department" className="form-control" onChange={this.handleChange} required>
                      <option value="default">Choose...</option>
                      <option value="1">Marketing</option>
                      <option value="2">Management</option>
                      <option value="3">Production</option>
                      <option value="4">R&D</option>
                      <option value="5">Finance</option>
                      <option value="6">IT</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Contract</label>
                    <select id="contract" value={this.state.contract} name="contract" className="form-control" onChange={this.handleChange} required>
                      <option value="default">Choose...</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Start Date</label>
                    <input type="date" className="form-control" id="startDate" placeholder="Employee Start Date" onChange={this.handleChange} required/>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Induction Date</label>
                    <input type="date" className="form-control" id="inductionDate" placeholder="Employee Induction Date" onChange={this.handleChange} required/>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="exampleFormControlInput1">Qualifications</label>
                    <textarea type="text" className="form-control" id="qualifications" placeholder="list all qualifications separated by a comma" onChange={this.handleChange} required/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-flex mt-3 section-styling">
              <div className="col-12 d-flex flex-column align-items-left justify-content-between">
                <h5 className="ml-1 mt-1">EMPLOYEE PHOTO & ROLE</h5>
                <div className="row form-group d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-center">
                    {this.renderImage(this.state.photo.preview)}
                  </div>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" name="avatar" accept="image/*" onChange={this.handlePhotoChange}/>
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                  </div>
                </div>
                <div className="row justify-content-center role-section">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="admin" value="Admin" required onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="inlineRadio1" onChange={this.handleChange}>ADMIN</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="employee" value="Employee" required onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="inlineRadio2" onChange={this.handleChange}>EMPLOYEE</label>
                  </div>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                  <button type="reset" className="btn btn-danger m-1" onClick={() => { this.props.setView('main-menu'); }}>CANCEL</button>
                  <button type="submit" className="btn btn-success m-1">ADD EMPLOYEE</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    );
  }
}
