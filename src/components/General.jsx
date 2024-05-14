/* eslint-disable react/prop-types */
// import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiPhone } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
// import './General.css'

function IconInfo(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Icon path={props.icon} size={1} />
      <p style={{ marginLeft: '0.5rem'}}>{props.info}</p>
    </div>
  )
}

function General(props) {
  return (
    <>
      <h1 style={{paddingBlock: '1rem'}}>{props.data.firstName} {props.data.lastName}</h1>
      <IconInfo icon={mdiPhone} info={props.data.phone} />
      <IconInfo icon={mdiEmail} info={props.data.email} />
    </>
  )
}

export default General