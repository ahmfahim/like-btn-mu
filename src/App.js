import './App.css';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  
  
  return (
    <div className="App">
      <AccessAlarmIcon/>
      <ThumbUpIcon onClick={() => setLikeColor(likeColor ? '' : 'secondary')} color={likeColor}/>
    </div>
  );
}

export default App;
