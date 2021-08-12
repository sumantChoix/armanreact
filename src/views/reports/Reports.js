import React, { useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react'

 import { useLazyQuery } from '@apollo/client'
import {GET_REPORTS_QUERY} from '../../graphql/queries'


const Reports = () => {
  const [reports,{data}] = useLazyQuery(GET_REPORTS_QUERY,{
  });

  if(data){
    console.log("CLICKED ---------->WORKING----->");
    console.log(data.reports);
    var usrdata= data.reports;
  }
 
  useEffect(() => {
    reports();
  }, [ ])

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
          Reports
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usrdata}
            fields={[
              { key: 'name', _classes: 'font-weight-bold' },
              'email','type'
            ]}
            hover
            striped
          />
        
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Reports
