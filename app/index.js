import React from 'react';
import {render} from 'react-dom';
import Timer from '../components/Timer';
import Vimeo from 'react-vimeo';

let videoId = '10517961';

render(
  <Timer />,
  document.getElementById('timer')
);

render(
  <Vimeo videoId={ videoId } />,
  document.getElementById('video')
);