import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiPhone } from '@mdi/js';
import { mdiEmail } from '@mdi/js';

{/* <Icon path={mdiPhone} size={1} /> */}
// import './General.css'

function General() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{paddingBlock: '1rem'}}>Full Name</h1>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon path={mdiPhone} size={1} />
        <p style={{ marginLeft: '0.5rem'}}>123123123</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center'  }}>
        <Icon path={mdiEmail} size={1} />
        <p style={{ marginLeft: '0.5rem'}}>email@email.com</p>
      </div>
    </>
  )
}

export default General