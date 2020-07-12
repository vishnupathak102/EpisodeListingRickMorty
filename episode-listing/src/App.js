import React from 'react';
import HomePage from './Components/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ()=>{
    return (
      <div>     
       {/* <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/users/:userId/posts" component={Posts}/>
            <Route exact path="/users/:userId/albums" component={Albums}/>
          <Route path="/"  component={Users} />
            
            <Redirect to="/"/>
                  
          </Switch> 
        </BrowserRouter>   
      </Provider> */}
      <HomePage />
      </div>
    );
  }
