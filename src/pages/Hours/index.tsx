import React from 'react';
import Cards from '../../components/Cards';
import HoursPeoples from '../HoursPeoples';
import { HourPageStyle } from './styles';

const HoursPage: React.FC = () => {
  return(
      <HourPageStyle>
          <span>
            <i className="fas fa-chevron-left"></i>
            <p> Quarta, 25 de agosto</p>
            <i className="fas fa-chevron-right"></i>
          </span>
          {/* <div>
            <Cards 
                hour='08:20'
                occupied={true}
            />
            <Cards 
                hour='13:20'
                occupied={true}
            />
            <Cards 
                hour='08:20'
                occupied={false}
            />
            <Cards 
                hour='13:20'
                occupied={false}
            />
            <Cards 
                hour='08:20'
                occupied={true}
            />
            <Cards 
                hour='13:20'
                occupied={true}
            />
            <Cards 
                hour='08:20'
                occupied={true}
            />
            <Cards 
                hour='13:20'
                occupied={false}
            />
          </div> */}
            <HoursPeoples />
      </HourPageStyle>
  );
}

export default HoursPage;