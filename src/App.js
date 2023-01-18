import React from 'react';
import './App.css';

// component of modal
const Modal = ({open, setOpen, children}) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
          <div className="modal">
            <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg> 
            {children}
          </div>
  </div>

);


function App() {
  const [open, setOpen] = React.useState(false)


  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Open modal window</button>
      <Modal open={open} setOpen={setOpen}>
        <iframe src="https://giphy.com/embed/WirhZMBF1AZVK" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <h3>This is modal</h3>
      </Modal>  
      
      {/* with animation */}
      {/* {<div className={`overlay animated ${open ? 'show' : ''}`}>
          <div className="modal">
            <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg> 
            <iframe src="https://giphy.com/embed/WirhZMBF1AZVK" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
      </div>} */}
      
      {/* without animation */}
      {/* {
        open && (
            <div className="overlay">
              <div className="modal">
                <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                  <title />
                  <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg> 
                <iframe src="https://giphy.com/embed/WirhZMBF1AZVK" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
              
              </div>
            </div>  
        )}  */}

    </div>
  );
}

export default App;
// https://giphy.com/embed/WirhZMBF1AZVK"
// https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
// <iframe src="https://giphy.com/embed/WirhZMBF1AZVK" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spiderman-t-rex-WirhZMBF1AZVK">via GIPHY</a></p> 