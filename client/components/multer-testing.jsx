// import React from 'react';

// export default class MulterTesting extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: null,
//       src: '',
//       preview: null
//     };
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   onFormSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('avatar', this.state.file);
//     fetch('/api/upload', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         // console.log('data', data);
//         console.log('data.filename', data.filename);
//         console.log('data.path', data.path);
//         this.setState({
//           src: data.filename
//         });
//         console.log(this.state.src);
//         // alert('The file is successfully uploaded');
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   handleChange(e) {
//     this.setState({
//       file: e.target.files[0],
//       preview: URL.createObjectURL(e.target.files[0])
//     });
//     console.log(this.state.file);
//     const photo = Object.assign({}, this.state.file);
//     console.log(photo);
//     this.props.getPhoto(photo);

//   }

//   renderImage(preview) {
//     return (
//       <div className="col s8 offset-s2 center">
//         {preview && <img src={preview} style={{ maxWidth: '100%' }} alt="Uploaded image preview" />}
//       </div>
//     );
//     // return (
//     //   <div className="col s8 offset-s2 center">
//     //     {src && <img src={`/uploads/${src}`} style={{ maxWidth: '100%' }} alt="Uploaded image preview" />}
//     //   </div>
//     // );
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           {this.renderImage(this.state.preview)}
//         </div>
//         {/* <form onSubmit={this.onFormSubmit}> */}
//         <h1>File Upload</h1>
//         <input type="file" name="avatar" accept="image/*" onChange={this.handleChange} />
//         {/* <button type="submit">Upload</button> */}
//         {/* </form> */}
//       </div>
//     );
//   }
// }
