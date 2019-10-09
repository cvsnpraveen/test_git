import React from 'react';

class App extends React.Component {

  render() {
    this.handleChange = (e) => {
      const files  = e.target.files;
      console.log("e=>", files);
      let reader = new FileReader();
        reader.readAsText(files[0]);

        reader.onload=(e)=>{
          const data = e.target.result;

            console.log('Data=>', data);
            console.log('Data=>', data.split(/,|;/));
        }
    }

    return (
      <div className="App">
        <div className="choose_file">
          <button type="button" className="btn btn-default">Choose Image</button>
          <input name="file" type="file" accept=".csv,.txt" multiple onChange={this.handleChange} />
        </div>
      </div>
    );

  }
}

export default App;


.choose_file {
  position: relative;
  display: inline-block;   
  font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;
  color: #7f7f7f;
  margin-top: 2px;
  background: white;
  text-align: center;
}
.choose_file input[type="file"]{
  -webkit-appearance:none; 
  position:absolute;
  top:0;
  left:0;
  opacity:0;
  width: 100%;
  height: 100%;
}
