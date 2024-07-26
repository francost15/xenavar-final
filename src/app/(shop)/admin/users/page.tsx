export const revalidate = 0;
import {getPaginatedOrders, getPaginatedUsers } from '@/actions';
import { Pagination, Title } from '@/components';
import { redirect } from 'next/navigation';
import { UsersTable } from './ui/UsersTable';

export default async function UsersPage() {
  const {ok, users = []} = await getPaginatedUsers();
  if (!ok) {
   redirect('/auth/login');
  }
  return (
    <>
      <Title title="Roles de usuarios" />

      <div className="mb-10">
        <UsersTable users={users}/>
      <Pagination totalPages={1}/>
      </div>
    </>
  );
}