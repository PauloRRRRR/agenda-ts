import React from 'react'
import './App.css'

import {EventSettingsModel, Inject, ScheduleComponent, Day, Week, Month, Agenda, ViewsDirective, ViewDirective, TimelineViews, WorkWeek, TimelineMonth} from '@syncfusion/ej2-react-schedule';

import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'

class App extends React.Component {
  private localData: EventSettingsModel = {
    dataSource:[{ 
      Id: 1,
      End: new Date(2022,9,5,6,30),
      Start: new Date(2022,9,5,4,0),
      Summary: '',
//      IsAllDay: true,
//     RecurrenceRule: 'FREQ=DAILY;INTERNAL=1,COUNT=10',
//      IsReadonly: true
    },{
      Id: 2,
      End: new Date(2022,9,16,11,30),
      Start: new Date(2022,9,16,11,4,10),
      Summary: 'Meeting'
    }],
    fields:{
      subject:{
        name:'Summary', default:'No title is provided'
      },
      startTime:{
        name:'Start'
      },
      endTime:{
          name:'End'
        }
    }  
  };

// private remoteData = new DataManager({
//   url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
//   adaptor: new WebApiAdaptor,
//   crossDomain: true
// });

// public render(){
//   return(<ScheduleComponent height= '550px' currentView='Week' 
//   selectedDate={new Date(2022,9,5)} eventSettings={this.localData}>
//     <ViewsDirective>
//       <ViewDirective option='Day'></ViewDirective>
//       <ViewDirective option ='Week'></ViewDirective>
//       <ViewDirective option ='Month'></ViewDirective>
//       <ViewDirective option ='Agenda'></ViewDirective>
//       <ViewDirective option ='TimelineDay'></ViewDirective>
//       <ViewDirective option ='TimelineMonth'></ViewDirective>
//     </ViewsDirective>
//     <Inject services={[Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth]}/>
//   </ScheduleComponent>);
// }

  public render(){
    return <ScheduleComponent currentView='Month' 
    selectedDate={new Date(2022,0,11)} 
    eventSettings={ this.localData}>
      <ViewsDirective >
       <ViewDirective  option='Day' ></ViewDirective>
       <ViewDirective option ='Week'></ViewDirective>
       <ViewDirective option ='Month'></ViewDirective>
       <ViewDirective option ='Agenda'></ViewDirective>
       <ViewDirective option ='TimelineDay'></ViewDirective>
       <ViewDirective option ='TimelineMonth'></ViewDirective>
     </ViewsDirective>
      <Inject services={[Day, Week, Month, Agenda]}/>
    </ScheduleComponent>
  }
}

export default App
