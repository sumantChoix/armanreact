import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useMutation } from '@apollo/client'
import {INVIE_USERS} from '../../graphql/queries'


const InviteUsers = (props) => {
  const [invited_user_email, setEmail] = React.useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  }
    const [inviteUser,{loading, error,data}] = useMutation(INVIE_USERS,{
             variables: {invited_user_email: invited_user_email},
    });
    console.log("CLICKED ---------->WORKING----->");
    if (loading) return <span>loading...</span>
    if (error) {
      console.log(error,'woking----------------');
      return <div>Error!</div>;
    }
    if(data){
        console.log(data);
      }

      const handleSubmit = (event) => {
        inviteUser();
        event.preventDefault();
      }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Invite Users</h1>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" onChange={handleChange} value={invited_user_email} placeholder="Email" autoComplete="Email" name="invited_user_email" id="invited_user_email" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" type="submit"  className="px-4">INVITE</CButton>
                      </CCol>
                     
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default InviteUsers
