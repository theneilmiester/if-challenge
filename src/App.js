import React, { useContext } from "react";
import { StoreContext } from 'index';
import { useObserver } from 'mobx-react';
import "styles/index.scss";

const App = () => {
  const store = useContext(StoreContext);
  console.log('store:', store);
  return useObserver(() => (
    <>
      <div className="row reactions-count">
        <div className="col-sm" align="left">
            <i className="fa fa-thumbs-up" />{store.likesCount}
        </div>
        <div className="col-sm" align="right">
            3 comments
        </div>
      </div>
      <div className="row">
      <button type="button" className="btn btn-light align-top" onClick={() => store.updateCount()}>
          <i className="fa fa-thumbs-o-up" />
          Like
        </button>
      </div>
    </>
  ));
}

export default App;
