import React from 'react'
import { Pagination } from 'antd';

function PaginationAdmin(prop) { 
  
  return (
    <div>
      <Pagination defaultPageSize={prop.itemsPerPage} defaultCurrent={1}
       total={prop.userData.length} onChange={(page) => prop.setCurrentPage(page)} />

    </div>
  )
}

export default PaginationAdmin
