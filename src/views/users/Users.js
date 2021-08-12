import React, {  useEffect } from 'react'
// import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'

// import usersData from './UsersData'
 import { useLazyQuery,useMutation } from '@apollo/client'
import {GET_USERS_QUERY} from '../../graphql/queries'
import {RESET_USER_PASSWORD} from '../../graphql/queries'


const Users = () => {
  const [users,{data}] = useLazyQuery(GET_USERS_QUERY,{
    // variables: {pagination:5},
  });

  if(data){
    console.log("CLICKED ---------->WORKING----->");
    console.log(data.users);
    var usrdata= data.users;
  }
  
 

const [user_id, setUserId] = React.useState('');


  useEffect(() => {
    users();
  }, [user_id])

  const [resetUserPassword,{loading, error}] = useMutation(RESET_USER_PASSWORD,{
    variables: {user_id: user_id}
  });
  return (
    <CRow>
      <CCol xl={12}>
        <CCard>

          <CCardHeader>
            Users
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usrdata}
            fields={[
              { key: 'name', _classes: 'font-weight-bold' },
              'email','username','contact', 'bio', 'date_of_birth','action','reset'
            ]}
            hover
            striped
        
            clickableRows
            onRowClick={(item) =>setUserId(item.id) }
            scopedSlots = {{
              'action':
                ()=>(
                  <td>
                    <CButton color="primary" className="px-2 py-1">
                      Block
                    </CButton>
                  </td>
                ),
                'reset': 
                ()=>(
                  
                  <td><CButton color="primary" onClick={(item) => setUserId(item.id),(item) =>resetUserPassword(item.id)} className="px-2 py-1">
                  RESET
                </CButton>
                </td>
                )
            }}
          />
 
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users
