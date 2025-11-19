import logo from './logo.svg';
import menu from './menu.png';
import xicon from './x_icon.png';
import people from './people.webp';
import star from './star.svg';
import atlassian from './atlassian.svg';
import canva from './canva.svg';
import delo from './delo.svg';
import dropbox from './dropbox.svg';
import forrester from './forrester.svg';
import ibm from './ibm.svg';
import micro from './micro.svg';
import paysafe from './paysafe.svg';
import redbool from './redbool.svg';
import samsung from './samsung.svg';
import tik from './tik tok.svg';
import ubisoft from './ubisoft.svg';
import './App.css';


function App() {

  return (
    <div >

      <header className='App-header'>

        <div className='App-parent_1'>

          <img src={logo} className='App-logo' alt='logo' />

        </div>

        <div className='App-parent_2'>

          <a href='#'>Product</a>
          <a href='#'>Community</a>
          <a href='#'>Resources</a>
          <a href='#'>Pricing</a>
          <a href='#'>For Teams</a>

        </div>

        <div className='App-parent_3'>

          <button className='App-login'>Log In</button>
          <button className='App-get'>Get started</button>

        </div>

      </header>

      <main>

        <div className='container_1'>

          <div className='parent_1'>

            <h1>Learn in-demand <span>UX, PM & AI</span> skills</h1>
            <p>Bite-sized, interactive learning built for busy professionals. Advance your UX design or product management career in 5 minutes a day.</p>

            <div className='child_1'>

              <button className='get_button'>Get Started</button>
              <button className='teams_button'>Uxcel for Teams</button>

            </div>

            <div className='child_2'>

              <div className='grand_child_1'>
                <img src={people} alt='people' className='people' />
              </div>

              <div className='grand_child_2'>
                <p>Trusted by 500k+ design & product professionals</p>
              </div>

              <div className='grand_child_3'>
              </div>

              <div className='grand_child_4'>

                <p>4.7 out of 5</p>
                <img src={star} alt='starIcon' className='starIcon' />

              </div>

            </div>

          </div>

        </div>

        <div className='container_2'>

          <div className='track'>

            <img src={atlassian} alt='atlassian' />
            <img src={canva} alt='canva' />
            <img src={delo} alt='delo' />
            <img src={dropbox} alt='dropbox' />
            <img src={forrester} alt='forrester' />
            <img src={ibm} alt='ibm' />
            <img src={micro} alt='micro' />
            <img src={paysafe} alt='paysafe' />
            <img src={redbool} alt='redbool' />
            <img src={samsung} alt='samsung' />
            <img src={tik} alt='tik' />
            <img src={ubisoft} alt='ubisoft' />

          </div>

        </div>

      </main>


    </div>
  );
}

export default App;
