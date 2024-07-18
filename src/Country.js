import './index.css';

import Korea from './nation/Korea';
import China from './nation/China';
import Japan from './nation/Japan';
import Egypt from './nation/Egypt';
import India from './nation/India';
import Maldives from './nation/Maldives';
import Russia from './nation/Russia';
import Singapore from './nation/Singapore';
import Spain from './nation/Spain';

function Country() {
  return (
    <>
      <div className="banner-container">
        <img src={`${process.env.PUBLIC_URL}/img/nationbanner.png`} />
        <div className="app-title">
          <p className="emoji">⭐</p>
          <p className="first-title">
            어디로 떠날지 선택하는 것만으로도 모험이 시작됩니다.
          </p>
          <h2>모험을 떠날 곳을 나라별로 살펴보세요</h2>
        </div>
      </div>
      <div className="app-container">
        <div className="travel-container">
          <Korea />
          <China />
          <Japan />
          <Egypt />
          <India />
          <Maldives />
          <Russia />
          <Singapore />
          <Spain />
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </>
  );
}

export default Country;
