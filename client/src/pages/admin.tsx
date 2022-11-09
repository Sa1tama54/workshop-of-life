import dynamic from 'next/dynamic';
import React from 'react';

const ReactAdmin = dynamic(() => import('../admin/App'), {
  ssr: false,
});

const Admin = () => {
  return (
    <div>
      <ReactAdmin />
    </div>
  );
};

export default Admin;
