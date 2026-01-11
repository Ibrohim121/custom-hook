import React from 'react';
import { useFetch } from './hooks/useFetch';

 export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo; 
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const UserList = () => {
  const { data, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.company.bs}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;