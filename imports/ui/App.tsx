import React, { useState } from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import Gantt from './components/GanttChart';
import ToolBar from './components/ToolBar';

const data = {
  data: [
    { id: 1, text: 'Task #1', start_date: '2019-04-15', duration: 3, progress: 0.6 },
    { id: 2, text: 'Task #2', start_date: '2019-04-18', duration: 3, progress: 0.4 }
  ],
  links: [
    { id: 1, source: 1, target: 2, type: '0' }
  ]
};
export const App = () => {
  const [currentZoom, setCurrentZoom] = useState<string>('Months');
  console.log(currentZoom)


  const handleZoomChange = (zoom: string) => {
    setCurrentZoom(zoom);
  }
  return (
    <div>
      <div className="zoom-bar">
        <ToolBar
          zoom={currentZoom}
          onZoomChange={handleZoomChange}
        />
      </div>
      <div className="gantt-container">
        <Gantt tasks={data}
          zoom={currentZoom} />
      </div>
    </div>

  );
}