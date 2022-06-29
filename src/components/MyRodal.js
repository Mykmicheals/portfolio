import React from 'react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

function MyRodal(props) {
  return (
    <Rodal
      customStyles={{ textAlign: 'center', }}
      visible={props.visible}
      onClose={props.onClose}
      closeOnEsc='true'
      animation='slideLeft'
      height='250'
      showMax='false'
      width='250'
    >
      <div className='modal'>{props.children}</div>

    </Rodal>
  )
}

export default MyRodal