import React from 'react';

export const GlobalContext = React.createContext<{ params: any, dispatchParams: React.Dispatch<{ key: string; value: any; }> } | any>(null);