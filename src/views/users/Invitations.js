import React, {  useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react'

 import { useLazyQuery } from '@apollo/client'
import {GET_INVITED_USERS} from '../../graphql/queries'

const Invitations = () => {
  const [users,{data}] = useLazyQuery(GET_INVITED_USERS,{
  });

  if(data){
    console.log("CLICKED ---------->WORKING----->");
    console.log(data.invitations);
    var usrdata= data.invitations;
  }
  

  useEffect(() => {
    users();
  }, [ ])

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
      
          <CCardHeader>
            INVITATIONS
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usrdata}
            fields={[
              { key: 'email', _classes: 'font-weight-bold' },
                   'invition_source','invition_from_user', 'invition_from_user_id'            ]}
            hover
            striped
          />
        
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Invitations
