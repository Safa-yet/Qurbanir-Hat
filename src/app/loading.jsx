import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 h-[80vh]">
        <Spinner color="success" size='2xl'/>

      </div>
    );
};

export default loading;