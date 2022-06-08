import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'John', salary: 800, increase: false, id: 1},
    {name: 'Smit', salary: 2000, increase: false, id: 2},
    {name: 'Li', salary: 3700, increase: true, id: 3}
  ]

  return (
    <div className="app">
        <AppInfo />
        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}
        onDelete={id => console.log(id)}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
