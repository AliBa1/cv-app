/* eslint-disable react/prop-types */
// import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiPhone } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
// import './Personal.css'

function IconInfo({icon, info}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Icon path={icon} size={1} />
      <p style={{ marginLeft: '0.5rem'}}>{info}</p>
    </div>
  )
}

function Personal({data}) {
  return (
    <>
      <h1 style={{paddingBlock: '1rem'}}>{data.firstName} {data.lastName}</h1>
      <IconInfo icon={mdiPhone} info={data.phone} />
      <IconInfo icon={mdiEmail} info={data.email} />
    </>
  )
}

export default Personal